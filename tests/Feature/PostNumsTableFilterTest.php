<?php

declare(strict_types=1);

use App\Filament\Data\Resources\PostNums\Pages\ListPostNums;
use App\Models\PostNum;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Livewire\Livewire;

uses(RefreshDatabase::class);

it('filters post nums by post_ort', function () {
    $admin = User::factory()->create(['role' => 'admin']);

    $stockholm = PostNum::create([
        'id' => 'post-num-1',
        'post_nummer' => '111 11',
        'post_ort' => 'Stockholm',
        'post_lan' => 'Stockholms lan',
        'merinfo_personer_phone_saved' => 1,
        'status' => 'pending',
    ]);

    $goteborg = PostNum::create([
        'id' => 'post-num-2',
        'post_nummer' => '222 22',
        'post_ort' => 'Goteborg',
        'post_lan' => 'Vastra Gotalands lan',
        'merinfo_personer_phone_saved' => 1,
        'status' => 'pending',
    ]);

    $this->actingAs($admin);

    Livewire::test(ListPostNums::class)
        ->filterTable('post_ort', 'Stockholm')
        ->assertCanSeeTableRecords([$stockholm])
        ->assertCanNotSeeTableRecords([$goteborg]);
});
