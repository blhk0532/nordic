<?php

declare(strict_types=1);

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;

beforeEach(function (): void {
    if (! Schema::hasTable('merinfos')) {
        Schema::create('merinfos', function (Blueprint $table): void {
            $table->id();
            $table->string('type')->nullable();
            $table->string('title')->nullable();
            $table->string('short_uuid')->nullable();
            $table->text('name')->nullable();
            $table->text('givenNameOrFirstName')->nullable();
            $table->string('personalNumber')->nullable();
            $table->json('pnr')->nullable();
            $table->json('address')->nullable();
            $table->string('gender')->nullable();
            $table->boolean('is_celebrity')->default(false)->nullable();
            $table->boolean('has_company_engagement')->default(false)->nullable();
            $table->integer('number_plus_count')->default(0)->nullable();
            $table->json('phone_number')->nullable();
            $table->text('url')->nullable();
            $table->text('same_address_url')->nullable();
            $table->timestamps();
        });
    }
});

it('stores merinfo bulk payload sent as a top-level array', function (): void {
    $firstUuid = 'bulk-test-'.Str::uuid()->toString();
    $secondUuid = 'bulk-test-'.Str::uuid()->toString();

    $response = $this->postJson('/api/merinfo/bulk', [
        [
            'type' => 'person',
            'short_uuid' => $firstUuid,
            'name' => 'Signe Marie-Louise Danckwardt',
            'givenNameOrFirstName' => 'Signe',
            'address' => [
                [
                    'street' => 'Norra vägen 9 B lgh 1301',
                    'zip_code' => '302 32',
                    'city' => 'Halmstad',
                ],
            ],
            'phone_number' => [
                [
                    'number' => '070-635 41 62',
                    'raw' => '0706354162',
                ],
            ],
            'url' => 'https://www.merinfo.se/person/Halmstad/Signe-Marie-Louise-Danckwardt-1947/'.$firstUuid,
        ],
        [
            'type' => 'person',
            'short_uuid' => $secondUuid,
            'name' => 'Bengt-Åke Danielsson',
            'givenNameOrFirstName' => 'Bengt-Åke',
            'address' => [
                [
                    'street' => 'Norra vägen 5 lgh 1602',
                    'zip_code' => '302 32',
                    'city' => 'Halmstad',
                ],
            ],
            'phone_number' => [
                [
                    'number' => '070-330 40 18',
                    'raw' => '0703304018',
                ],
            ],
            'url' => 'https://www.merinfo.se/person/Halmstad/Bengt-Ake-Danielsson-1947/'.$secondUuid,
        ],
    ]);

    $response->assertOk()
        ->assertJsonPath('summary.total_processed', 2)
        ->assertJsonPath('summary.created', 2)
        ->assertJsonPath('summary.failed', 0);

    $this->assertDatabaseHas('merinfos', [
        'short_uuid' => $firstUuid,
        'name' => 'Signe Marie-Louise Danckwardt',
    ]);

    $this->assertDatabaseHas('merinfos', [
        'short_uuid' => $secondUuid,
        'name' => 'Bengt-Åke Danielsson',
    ]);
});
