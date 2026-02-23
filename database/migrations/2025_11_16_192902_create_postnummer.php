<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // avoid failure if the table was already created by a prior run of this
        // migration.  we still execute the backfill/merge operations in case the
        // schema existed but data has changed since the last run.
        if (Schema::hasTable('sverige_postnummer')) {
            if (Schema::hasTable('post_nums')) {
                $this->backfillFromPostNums();
            }
            if (Schema::hasTable('ratsit_postorter')) {
                $this->mergeFromRatsitPostorter();
            }

            // even if the schema already existed we still need to patch any
            // lacunae left behind by earlier runs of this migration.
            $this->fillMissingKommunAndLan();

            return;
        }

        Schema::create('sverige_postnummer', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->string('post_nummer');
            $table->string('post_ort');
            $table->string('post_lan');
            // `after()` is not allowed in CREATE TABLE statements on MySQL,
            // so define `kommun` normally and add index below.
            $table->string('kommun')->nullable();
            $table->integer('personer_count')->default(0);
            $table->integer('foretag_count')->default(0);
            $table->string('personer_link')->nullable();
            $table->string('foretag_link')->nullable();
            $table->integer('merinfo_personer_total')->nullable()->default(null);
            $table->integer('merinfo_personer_phone_total')->nullable()->default(null);
            $table->integer('merinfo_personer_house_total')->nullable()->default(null);
            $table->integer('merinfo_foretag_total')->nullable()->default(null);
            $table->integer('merinfo_foretag_phone_total')->nullable()->default(null);
            $table->integer('merinfo_personer_saved')->nullable()->default(null);
            $table->integer('merinfo_personer_phone_saved')->nullable()->default(null);
            $table->integer('merinfo_personer_house_saved')->nullable()->default(null);
            $table->integer('merinfo_foretag_saved')->nullable()->default(null);
            $table->integer('merinfo_foretag_phone_saved')->nullable()->default(null);
            $table->integer('hitta_personer_total')->nullable()->default(null);
            $table->integer('hitta_foretag_total')->nullable()->default(null);
            $table->integer('hitta_personer_saved')->nullable()->default(null);
            $table->integer('hitta_personer_phone_saved')->nullable()->default(null);
            $table->integer('hitta_personer_house_saved')->nullable()->default(null);
            $table->integer('hitta_foretag_saved')->nullable()->default(null);
            $table->integer('hitta_postort_total_pages')->nullable();
            $table->integer('hitta_postort_processed_pages')->default(0);
            $table->integer('hitta_postort_last_page')->nullable();
            $table->integer('ratsit_personer_total')->nullable()->default(null);
            $table->integer('ratsit_foretag_total')->nullable()->default(null);
            $table->integer('ratsit_personer_saved')->nullable()->default(null);
            $table->integer('ratsit_foretag_saved')->nullable()->default(null);
            $table->integer('ratsit_personer_phone_saved')->nullable()->default(null);
            $table->integer('ratsit_personer_house_saved')->nullable()->default(null);
            $table->string('status')->nullable()->default('idle');
            $table->boolean('is_active')->default(true);
            $table->boolean('is_personer_active')->default(true);
            $table->boolean('is_foretag_active')->default(true);
            $table->boolean('merinfo_personer_queue')->default(false);
            $table->boolean('merinfo_foretag_queue')->default(false);
            $table->boolean('merinfo_personer_count')->default(false);
            $table->boolean('merinfo_foretag_count')->default(false);
            $table->boolean('hitta_personer_queue')->default(false);
            $table->boolean('hitta_foretag_queue')->default(false);
            $table->boolean('ratsit_personer_queue')->default(false);
            $table->boolean('ratsit_foretag_queue')->default(false);
            $table->timestamps();

            $table->index(['post_ort']);
            $table->index(['post_nummer']);
            $table->index(['kommun']);
            $table->unique(['post_ort', 'post_nummer'], 'postnummer_post_ort_post_nummer_unique');
        });

        if (Schema::hasTable('post_nums')) {
            $this->backfillFromPostNums();
        }

        if (Schema::hasTable('ratsit_postorter')) {
            $this->mergeFromRatsitPostorter();
        }

        // after import/merge make sure missing kommun/lan are patched
        $this->fillMissingKommunAndLan();
    }

    private function backfillFromPostNums(): void
    {
        DB::table('post_nums')
            ->orderBy('id')
            ->chunk(1000, function ($rows): void {
                $now = now();
                $payload = [];

                foreach ($rows as $row) {
                    $payload[] = [
                        'id' => (string) $row->id,
                        'post_nummer' => (string) $row->post_nummer,
                        'post_ort' => (string) $row->post_ort,
                        'post_lan' => (string) $row->post_lan,
                        'kommun' => null,
                        'personer_count' => 0,
                        'foretag_count' => 0,
                        'personer_link' => null,
                        'foretag_link' => null,
                        'merinfo_personer_total' => $row->merinfo_personer_total,
                        'merinfo_personer_phone_total' => $row->merinfo_personer_phone_total,
                        'merinfo_personer_house_total' => $row->merinfo_personer_house_total,
                        'merinfo_foretag_total' => $row->merinfo_foretag_total,
                        'merinfo_foretag_phone_total' => $row->merinfo_foretag_phone_total,
                        'merinfo_personer_saved' => $row->merinfo_personer_saved,
                        'merinfo_personer_phone_saved' => $row->merinfo_personer_phone_saved,
                        'merinfo_personer_house_saved' => $row->merinfo_personer_house_saved,
                        'merinfo_foretag_saved' => $row->merinfo_foretag_saved,
                        'merinfo_foretag_phone_saved' => $row->merinfo_foretag_phone_saved,
                        'hitta_personer_total' => $row->hitta_personer_total,
                        'hitta_foretag_total' => $row->hitta_foretag_total,
                        'hitta_personer_saved' => $row->hitta_personer_saved,
                        'hitta_personer_phone_saved' => $row->hitta_personer_phone_saved,
                        'hitta_personer_house_saved' => $row->hitta_personer_house_saved,
                        'hitta_foretag_saved' => $row->hitta_foretag_saved,
                        'hitta_postort_total_pages' => $row->hitta_postort_total_pages ?? null,
                        'hitta_postort_processed_pages' => $row->hitta_postort_processed_pages ?? 0,
                        'hitta_postort_last_page' => $row->hitta_postort_last_page ?? null,
                        'ratsit_personer_total' => $row->ratsit_personer_total,
                        'ratsit_foretag_total' => $row->ratsit_foretag_total,
                        'ratsit_personer_saved' => $row->ratsit_personer_saved,
                        'ratsit_foretag_saved' => $row->ratsit_foretag_saved,
                        'ratsit_personer_phone_saved' => $row->ratsit_personer_phone_saved,
                        'ratsit_personer_house_saved' => $row->ratsit_personer_house_saved,
                        'status' => $row->status ?? 'idle',
                        'is_active' => (bool) ($row->is_active ?? true),
                        'is_personer_active' => (bool) ($row->is_personer_active ?? true),
                        'is_foretag_active' => (bool) ($row->is_foretag_active ?? true),
                        'merinfo_personer_queue' => (bool) ($row->merinfo_personer_queue ?? false),
                        'merinfo_foretag_queue' => (bool) ($row->merinfo_foretag_queue ?? false),
                        'merinfo_personer_count' => (bool) ($row->merinfo_personer_count ?? false),
                        'merinfo_foretag_count' => (bool) ($row->merinfo_foretag_count ?? false),
                        'hitta_personer_queue' => (bool) ($row->hitta_personer_queue ?? false),
                        'hitta_foretag_queue' => (bool) ($row->hitta_foretag_queue ?? false),
                        'ratsit_personer_queue' => (bool) ($row->ratsit_personer_queue ?? false),
                        'ratsit_foretag_queue' => (bool) ($row->ratsit_foretag_queue ?? false),
                        'created_at' => $row->created_at ?? $now,
                        'updated_at' => $row->updated_at ?? $now,
                    ];
                }

                if ($payload === []) {
                    return;
                }

                // Remove duplicate rows with identical post_ort+post_nummer because
                // the target table has a unique index on that combination. Using
                // these two columns as the upsert key also prevents MySQL errors when
                // two different `post_nums` entries share the same combo.
                $payload = collect($payload)
                    ->unique(fn ($r) => trim($r['post_ort']).'|'.trim($r['post_nummer']))
                    ->values()
                    ->all();

                try {
                    DB::table('sverige_postnummer')->upsert(
                        $payload,
                        ['post_ort', 'post_nummer'],
                        [
                        'post_nummer',
                        'post_ort',
                        'post_lan',
                        'merinfo_personer_total',
                        'merinfo_personer_phone_total',
                        'merinfo_personer_house_total',
                        'merinfo_foretag_total',
                        'merinfo_foretag_phone_total',
                        'merinfo_personer_saved',
                        'merinfo_personer_phone_saved',
                        'merinfo_personer_house_saved',
                        'merinfo_foretag_saved',
                        'merinfo_foretag_phone_saved',
                        'hitta_personer_total',
                        'hitta_foretag_total',
                        'hitta_personer_saved',
                        'hitta_personer_phone_saved',
                        'hitta_personer_house_saved',
                        'hitta_foretag_saved',
                        'hitta_postort_total_pages',
                        'hitta_postort_processed_pages',
                        'hitta_postort_last_page',
                        'ratsit_personer_total',
                        'ratsit_foretag_total',
                        'ratsit_personer_saved',
                        'ratsit_foretag_saved',
                        'ratsit_personer_phone_saved',
                        'ratsit_personer_house_saved',
                        'status',
                        'is_active',
                        'is_personer_active',
                        'is_foretag_active',
                        'merinfo_personer_queue',
                        'merinfo_foretag_queue',
                        'merinfo_personer_count',
                        'merinfo_foretag_count',
                        'hitta_personer_queue',
                        'hitta_foretag_queue',
                        'ratsit_personer_queue',
                        'ratsit_foretag_queue',
                        'updated_at',
                        ]
                    );
                } catch (\Throwable $e) {
                    logger()->error('sverige_postnummer upsert failed (post_nums backfill)', [
                        'error' => $e->getMessage(),
                        'sample_payload' => array_slice($payload, 0, 5),
                    ]);

                    throw $e;
                }
            });
    }

    private function mergeFromRatsitPostorter(): void
    {
        $postnummerByCompositeKey = [];

        DB::table('sverige_postnummer')
            ->select(['id', 'post_nummer', 'post_ort'])
            ->orderBy('id')
            ->chunk(2000, function ($rows) use (&$postnummerByCompositeKey): void {
                foreach ($rows as $row) {
                    $key = self::normalizeCompositeKey($row->post_nummer, $row->post_ort);
                    $postnummerByCompositeKey[$key] = (string) $row->id;
                }
            });

        if ($postnummerByCompositeKey === []) {
            return;
        }

        DB::table('ratsit_postorter')
            ->orderBy('id')
            ->chunkById(1000, function ($rows) use ($postnummerByCompositeKey): void {
                $now = now();
                $payload = [];

                foreach ($rows as $row) {
                    $key = self::normalizeCompositeKey($row->post_nummer, $row->post_ort);
                    $postnummerId = $postnummerByCompositeKey[$key] ?? null;

                    if ($postnummerId === null) {
                        continue;
                    }

                    $payload[] = [
                        'id' => $postnummerId,
                        // include the identifying fields in case we ever need to insert
                        // a row; they are non-nullable in the schema.
                        'post_nummer' => $row->post_nummer,
                        'post_ort' => $row->post_ort,
                        // lan is non-nullable in our schema; ratsit rows sometimes
                        // omit it which earlier caused `NULL` constraint violations.
                        // we coerce a missing value to empty string here.  This
                        // means a ratsit row without lan will overwrite any existing
                        // value from post_nums with `''` instead of leaving the
                        // previous value intact, but avoiding a migration failure
                        // was the primary goal.  If the business logic changes we
                        // could instead conditionally skip updating lan.
                        'post_lan' => (string) ($row->lan ?? ''),
                        'kommun' => $row->kommun ?? null,
                        'personer_count' => (int) ($row->personer_count ?? 0),
                        'foretag_count' => (int) ($row->foretag_count ?? 0),
                        'personer_link' => $row->personer_link ?? null,
                        'foretag_link' => $row->foretag_link ?? null,
                        'updated_at' => $now,
                    ];
                }

                if ($payload === []) {
                    return;
                }

                // deduplicate payload by the postnummer id.  when multiple
                // ratsit rows map to the same record we want the one that
                // actually provides a kommun value, because otherwise the first
                // (often null) entry would win and leave the field empty.
                $payload = collect($payload)
                    ->groupBy('id')
                    ->map(function ($group) {
                        return $group->sortByDesc(function ($row) {
                            return ! empty($row['kommun']);
                        })->first();
                    })
                    ->values()
                    ->all();

                // determine whether any payload row has a non-empty kommun; if
                // not we can skip updating that column during upsert so that an
                // existing kommun (perhaps manually maintained) isn't wiped.
                $updateColumns = [
                    'post_nummer',
                    'post_ort',
                    'post_lan',
                    'kommun',
                    'personer_count',
                    'foretag_count',
                    'personer_link',
                    'foretag_link',
                    'updated_at',
                ];

                $hasKommunValue = collect($payload)->contains(function ($row) {
                    return ! empty($row['kommun']);
                });

                if (! $hasKommunValue) {
                    $updateColumns = array_filter($updateColumns, fn ($c) => $c !== 'kommun');
                }

                try {
                    DB::table('sverige_postnummer')->upsert(
                        $payload,
                        ['id'],
                        $updateColumns
                    );
                } catch (\Throwable $e) {
                    logger()->error('sverige_postnummer upsert failed (ratsit merge)', [
                        'error' => $e->getMessage(),
                        'sample_payload' => array_slice($payload, 0, 5),
                    ]);

                    throw $e;
                }
            });
    }

    private static function normalizeCompositeKey(?string $postNummer, ?string $postOrt): string
    {
        $normalizedPostNummer = preg_replace('/\s+/', '', mb_strtoupper(trim((string) $postNummer)));
        $normalizedPostOrt = mb_strtoupper(trim((string) $postOrt));

        return $normalizedPostNummer.'|'.$normalizedPostOrt;
    }

    /**
     * Fill in blanks that our two‑stage import may have left behind.
     */
    private function fillMissingKommunAndLan(): void
    {
        // specific post_ort strings map to their parent kommun
        $stockholm = [
            'Stockholms kommun',
            'Stockholm - Bandhagen mfl',
            'Stockholm - Bromma',
            'Stockholm - Essingeöarna mm',
            'Stockholm - Farsta mfl',
            'Stockholm - Hägersten mfl',
            'Stockholm - Norrmalm mm',
            'Stockholm - Spånga mfl',
            'Stockholm - Södermalm mm',
        ];

        $goteborg = [
            'Göteborgs kommun',
            'Göteborg - Centrum',
            'Göteborg - Hisingen',
            'Göteborg - Nordost',
            'Göteborg - Väster',
            'Göteborg - Öster',
            'Götene kommun',
        ];

        $malmo = [
            'Malmö kommun',
            'Malmö - Väster',
            'Malmö - Öster',
        ];

        DB::table('sverige_postnummer')
            ->whereNull('kommun')
            ->whereIn('post_ort', $stockholm)
            ->update(['kommun' => 'Stockholms kommun']);

        DB::table('sverige_postnummer')
            ->whereNull('kommun')
            ->whereIn('post_ort', $goteborg)
            ->update(['kommun' => 'Göteborgs kommun']);

        DB::table('sverige_postnummer')
            ->whereNull('kommun')
            ->whereIn('post_ort', $malmo)
            ->update(['kommun' => 'Malmö kommun']);

        // propagate any remaining kommun values by post_nummer
        // Some legacy `post_nummer` values contain spaces (eg. "100 04") or
        // the existing schema may use a numeric/decimal column. To avoid
        // implicit casts that can fail under strict SQL modes we compare a
        // whitespace-stripped version of the value on both sides using
        // `REPLACE(...)` and parameterized bindings.
        $map = DB::table('sverige_postnummer')
            ->whereNotNull('kommun')
            ->select(DB::raw("REPLACE(post_nummer,' ', '') as post_nummer_clean"), 'kommun')
            ->groupBy('post_nummer_clean', 'kommun')
            ->pluck('kommun', 'post_nummer_clean');

        foreach ($map as $postNummerClean => $komm) {
            DB::table('sverige_postnummer')
                ->whereNull('kommun')
                ->whereRaw("REPLACE(post_nummer, ' ', '') = ?", [$postNummerClean])
                ->update(['kommun' => $komm]);
        }

        // finally populate post_lan from legacy table where blank
        DB::table('sverige_postnummer as s')
            ->join('post_nums as p',
                DB::raw("REPLACE(s.post_nummer,' ','')"),
                '=',
                DB::raw("REPLACE(p.post_nummer,' ','')")
            )
            ->whereRaw("COALESCE(s.post_lan,'') = ''")
            ->update(['s.post_lan' => DB::raw('p.post_lan')]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sverige_postnummer');
    }
};
