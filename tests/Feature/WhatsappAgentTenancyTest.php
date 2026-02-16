<?php

use App\Filament\Admin\Resources\WhatsappAgents\WhatsappAgentResource;
use App\Models\Team;
use App\Models\User;
use App\Models\WhatsappAgent;

test('whatsapp agent resource has correct tenancy configuration', function () {
    expect(WhatsappAgentResource::getModel())->toBe(WhatsappAgent::class);
    expect(WhatsappAgentResource::getTenantOwnershipRelationshipName())->toBe('team');
});

test('whatsapp agent model has team relationship', function () {
    $user = User::factory()->create();
    $team = Team::factory()->create();

    $whatsappAgent = WhatsappAgent::factory()->create([
        'team_id' => $team->id,
    ]);

    expect($whatsappAgent->team)->toBeInstanceOf(Team::class);
    expect($whatsappAgent->team->id)->toBe($team->id);
})->skip('Requires database setup');
