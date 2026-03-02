<?php

declare(strict_types=1);

namespace App\Console\Commands;

use App\Models\Team;
use App\Models\User;
use Carbon\CarbonImmutable;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;
use Throwable;

class CreateTenantUserCommand extends Command
{
    protected $signature = 'user:create-with-team
        {email : Email for the new user}
        {password : Plain password for the new user}
        {--name= : User display name}
        {--team= : Team name (defaults to "{name} Team")}
        {--role=booking : Role value for users.role}
        {--verified-at=now : Timestamp for email_verified_at (default: now)}';

    protected $description = 'Create a verified user with team, membership, and current_team_id set';

    public function handle(): int
    {
        $email = (string) $this->argument('email');
        $password = (string) $this->argument('password');
        $name = (string) ($this->option('name') ?: Str::before($email, '@'));
        $teamName = (string) ($this->option('team') ?: "{$name} Team");
        $role = (string) $this->option('role');

        if (User::query()->where('email', $email)->exists()) {
            $this->error("User with email {$email} already exists.");

            return self::FAILURE;
        }

        try {
            $verifiedAt = $this->resolveVerifiedAt((string) $this->option('verified-at'));
        } catch (Throwable $exception) {
            $this->error($exception->getMessage());

            return self::FAILURE;
        }

        try {
            [$user, $team] = DB::transaction(function () use ($email, $name, $password, $role, $verifiedAt, $teamName): array {
                $userAttributes = [
                    'name' => $name,
                    'email' => $email,
                    'password' => Hash::make($password),
                    'email_verified_at' => $verifiedAt,
                ];

                if (Schema::hasColumn('users', 'ulid')) {
                    $userAttributes['ulid'] = (string) Str::ulid();
                }

                if (Schema::hasColumn('users', 'role')) {
                    $userAttributes['role'] = $role;
                }

                $user = User::withoutEvents(function () use ($userAttributes): User {
                    return User::query()->create($userAttributes);
                });

                $team = Team::query()->create([
                    'user_id' => $user->id,
                    'name' => $teamName,
                    'slug' => $this->generateUniqueTeamSlug($teamName),
                    'personal_team' => true,
                ]);

                $team->users()->syncWithoutDetaching([$user->id]);

                User::withoutEvents(function () use ($user, $team): void {
                    $user->forceFill([
                        'current_team_id' => $team->id,
                    ])->save();
                });

                return [$user, $team];
            });
        } catch (Throwable $exception) {
            $this->error('Failed to create user with team: '.$exception->getMessage());

            return self::FAILURE;
        }

        $this->info("User created: {$user->email}");
        $this->line("User ID: {$user->id}");
        $this->line("Team ID: {$team->id}");
        $this->line("Current Team ID: {$user->current_team_id}");

        return self::SUCCESS;
    }

    private function resolveVerifiedAt(string $value): CarbonImmutable
    {
        if ($value === '' || $value === 'now') {
            return CarbonImmutable::now();
        }

        return CarbonImmutable::parse($value);
    }

    private function generateUniqueTeamSlug(string $teamName): string
    {
        $baseSlug = Str::slug($teamName);
        $slug = $baseSlug !== '' ? $baseSlug : 'team';
        $suffix = 1;

        while (Team::query()->where('slug', $slug)->exists()) {
            $slug = $baseSlug !== '' ? "{$baseSlug}-{$suffix}" : "team-{$suffix}";
            $suffix++;
        }

        return $slug;
    }
}
