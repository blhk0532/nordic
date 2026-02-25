<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class ImportRatsitPostorterToPostNums extends Command
{
    protected $signature = 'app:import-ratsit-postorter-to-post-nums';

    protected $description = 'Import data from ratsit_postorter to post_nums table';

    public function handle(): int
    {
        $this->info('Starting import from ratsit_postorter to post_nums...');

        $records = DB::table('ratsit_postorter')
            ->select('post_nummer', 'post_ort', 'kommun', 'personer_count', 'foretag_count', 'personer_link')
            ->get()
            ->toArray();

        $updateCount = 0;
        $createCount = 0;
        $total = count($records);
        $this->info("Total records: {$total}");

        $postNummerToId = DB::table('post_nums')
            ->select('id', 'post_nummer')
            ->get()
            ->keyBy('post_nummer')
            ->toArray();

        $idToPostNummer = DB::table('post_nums')
            ->select('id', 'post_nummer')
            ->get()
            ->keyBy('id')
            ->toArray();

        foreach ($records as $record) {
            $normalizedPostNummer = $record->post_nummer;

            if (isset($postNummerToId[$normalizedPostNummer])) {
                DB::table('post_nums')
                    ->where('post_nummer', $normalizedPostNummer)
                    ->update([
                        'post_ort' => $record->post_ort,
                        'kommun' => $record->kommun,
                        'ratsit_personer_total' => $record->personer_count,
                        'ratsit_foretag_total' => $record->foretag_count,
                        'ratsit_personer_link' => $record->personer_link,
                    ]);
                $updateCount++;
            } elseif (isset($idToPostNummer[$normalizedPostNummer])) {
                DB::table('post_nums')
                    ->where('id', $normalizedPostNummer)
                    ->update([
                        'post_nummer' => $normalizedPostNummer,
                        'post_ort' => $record->post_ort,
                        'kommun' => $record->kommun,
                        'ratsit_personer_total' => $record->personer_count,
                        'ratsit_foretag_total' => $record->foretag_count,
                        'ratsit_personer_link' => $record->personer_link,
                    ]);
                $updateCount++;
            } else {
                DB::table('post_nums')->insert([
                    'id' => $normalizedPostNummer,
                    'post_nummer' => $normalizedPostNummer,
                    'post_ort' => $record->post_ort,
                    'kommun' => $record->kommun,
                    'post_lan' => '',
                    'ratsit_personer_total' => $record->personer_count,
                    'ratsit_foretag_total' => $record->foretag_count,
                    'ratsit_personer_link' => $record->personer_link,
                ]);
                $createCount++;
            }
        }

        $this->info('Import complete!');
        $this->info("Created: {$createCount}");
        $this->info("Updated: {$updateCount}");

        return Command::SUCCESS;
    }
}
