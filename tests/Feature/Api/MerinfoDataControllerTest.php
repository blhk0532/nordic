<?php

declare(strict_types=1);

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

beforeEach(function (): void {
    if (! Schema::hasTable('merinfo_data')) {
        Schema::create('merinfo_data', function (Blueprint $table): void {
            $table->id();
            $table->string('personnamn')->nullable();
            $table->string('alder')->nullable();
            $table->string('kon')->nullable();
            $table->string('gatuadress')->nullable();
            $table->string('postnummer')->nullable();
            $table->string('postort')->nullable();
            $table->string('telefon')->nullable();
            $table->string('karta')->nullable();
            $table->string('link')->nullable();
            $table->string('bostadstyp')->nullable();
            $table->string('bostadspris')->nullable();
            $table->boolean('is_active')->default(false);
            $table->boolean('is_telefon')->default(false);
            $table->boolean('is_ratsit')->default(false);
            $table->boolean('is_hus')->default(false);
            $table->unique(['personnamn', 'gatuadress'], 'merinfo_person_gata_unique');
            $table->timestamps();
        });
    }
});

it('creates merinfo data when telefon is an array', function (): void {
    $response = $this->postJson('/api/merinfo-data', [
        'personnamn' => 'Array Phone Person',
        'gatuadress' => 'Arraygatan 1',
        'postnummer' => '11122',
        'postort' => 'Stockholm',
        'telefon' => ['+46701234567', '+468123456'],
        'is_telefon' => false,
        'is_hus' => false,
    ]);

    $response->assertCreated()
        ->assertJsonPath('message', 'Record created successfully');

    $this->assertDatabaseHas('merinfo_data', [
        'personnamn' => 'Array Phone Person',
        'gatuadress' => 'Arraygatan 1',
        'telefon' => '+46701234567',
    ]);
});

it('creates merinfo data when telefon is a string', function (): void {
    $response = $this->postJson('/api/merinfo-data', [
        'personnamn' => 'String Phone Person',
        'gatuadress' => 'Stringgatan 2',
        'postnummer' => '22233',
        'postort' => 'Göteborg',
        'telefon' => '+46709998877',
        'is_telefon' => false,
        'is_hus' => false,
    ]);

    $response->assertCreated()
        ->assertJsonPath('message', 'Record created successfully');

    $this->assertDatabaseHas('merinfo_data', [
        'personnamn' => 'String Phone Person',
        'gatuadress' => 'Stringgatan 2',
        'telefon' => '+46709998877',
    ]);
});

it('updates existing record on repeated post with same person and address', function (): void {
    $firstResponse = $this->postJson('/api/merinfo-data', [
        'personnamn' => 'Same Person',
        'gatuadress' => 'Same Street 1',
        'postnummer' => '11122',
        'postort' => 'Stockholm',
        'telefon' => ['+46701234567', '+468123456'],
        'is_telefon' => true,
        'is_hus' => true,
    ]);

    $firstResponse->assertCreated();

    $secondResponse = $this->postJson('/api/merinfo-data', [
        'personnamn' => 'Same Person',
        'gatuadress' => 'Same Street 1',
        'postnummer' => '11122',
        'postort' => 'Stockholm',
        'telefon' => ['+46700000000'],
        'is_telefon' => true,
        'is_hus' => true,
    ]);

    $secondResponse->assertOk()
        ->assertJsonPath('message', 'Record updated successfully');

    $this->assertDatabaseCount('merinfo_data', 1);
    $this->assertDatabaseHas('merinfo_data', [
        'personnamn' => 'Same Person',
        'gatuadress' => 'Same Street 1',
        'telefon' => '+46700000000',
    ]);
});
