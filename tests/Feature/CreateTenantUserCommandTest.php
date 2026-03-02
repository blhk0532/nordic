<?php

declare(strict_types=1);

use App\Models\Team;
use App\Models\User;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Schema;

beforeEach(function (): void {
    Schema::create('users', function (Blueprint $table): void {
        $table->id();
        $table->string('name');
        $table->string('email')->unique();
        $table->timestamp('email_verified_at')->nullable();
        $table->string('password');
        $table->string('role')->default('booking');
        $table->boolean('is_active')->default(true);
        $table->foreignId('current_team_id')->nullable();
        $table->timestamps();
    });

    Schema::create('teams', function (Blueprint $table): void {
        $table->id();
        $table->foreignId('user_id');
        $table->string('name');
        $table->string('slug')->nullable();
        $table->boolean('personal_team')->default(false);
        $table->string('ulid')->nullable();
        $table->timestamps();
    });

    Schema::create('membership', function (Blueprint $table): void {
        $table->id();
        $table->foreignId('team_id');
        $table->foreignId('user_id');
        $table->timestamps();
        $table->unique(['team_id', 'user_id']);
    });
});

afterEach(function (): void {
    Schema::dropIfExists('membership');
    Schema::dropIfExists('teams');
    Schema::dropIfExists('users');
});

it('creates a verified user with team membership and current team id', function (): void {
    $verifiedAt = '2026-03-02 10:00:00';

    $exitCode = Artisan::call('user:create-with-team', [
        'email' => 'tenant-user@example.com',
        'password' => 'secret-123',
        '--name' => 'Tenant User',
        '--team' => 'Tenant User Team',
        '--verified-at' => $verifiedAt,
    ]);

    $this->assertSame(0, $exitCode, Artisan::output());

    $user = User::query()->where('email', 'tenant-user@example.com')->first();

    expect($user)->not->toBeNull();
    expect($user?->email_verified_at)->not->toBeNull();
    expect($user?->email_verified_at?->format('Y-m-d H:i:s'))->toBe($verifiedAt);
    expect($user?->current_team_id)->not->toBeNull();

    $team = Team::query()->find($user?->current_team_id);

    expect($team)->not->toBeNull();
    expect($team?->user_id)->toBe($user?->id);

    $this->assertDatabaseHas('membership', [
        'team_id' => $team?->id,
        'user_id' => $user?->id,
    ]);
});
