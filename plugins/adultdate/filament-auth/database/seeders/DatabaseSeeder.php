<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Models\User;
use Closure;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Symfony\Component\Console\Helper\ProgressBar;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {

        DB::raw('SET time_zone=\'+00:00\'');

        User::firstOrCreate(
            ['email' => 'super@nordicdigitalthailand.com'],
            [
                'name' => 'super',
                'role' => 'super',
                'password' => 'bkkbkk',
                'email_verified_at' => now(),
            ]
        );
        User::firstOrCreate(
            ['email' => 'admin@nordicdigitalthailand.com'],
            [
                'name' => 'admin',
                'role' => 'super',
                'password' => 'bkkbkk',
                'email_verified_at' => now(),
            ]
        );
        User::firstOrCreate(
            ['email' => 'matsod@nordicdigitalthailand.com'],
            [
                'name' => 'Mathias',
                'role' => 'admin',
                'password' => 'qwe321asd',
                'email_verified_at' => now(),
            ]
        );
        User::firstOrCreate(
            ['email' => 'daniel@nordicdigitalthailand.com'],
            [
                'name' => 'Daniel',
                'role' => 'admin',
                'password' => 'qwe321asd',
                'email_verified_at' => now(),
            ]
        );
        User::firstOrCreate(
            ['email' => 'kat@nordicdigitalthailand.com'],
            [
                'name' => 'Berit',
                'role' => 'manager',
                'password' => 'qwe321asd',
                'email_verified_at' => now(),
            ]
        );
        User::firstOrCreate(
            ['email' => 'bokning@nordicdigitalthailand.com'],
            [
                'name' => 'Bokning',
                'role' => 'booking',
                'password' => 'qwe321asd',
                'email_verified_at' => now(),
            ]
        );
        User::firstOrCreate(
            ['email' => 'agent@nordicdigitalthailand.com'],
            [
                'name' => 'Agent',
                'role' => 'agent',
                'password' => 'qwe321asd',
                'email_verified_at' => now(),
            ]
        );
        User::firstOrCreate(
            ['email' => 'partner@nordicdigitalthailand.com'],
            [
                'name' => 'Partner',
                'role' => 'partner',
                'password' => 'qwe321asd',
                'email_verified_at' => now(),
            ]
        );
        User::firstOrCreate(
            ['email' => 'service@nordicdigitalthailand.com'],
            [
                'name' => 'Service',
                'role' => 'service',
                'password' => 'qwe321asd',
                'email_verified_at' => now(),
            ]
        );
        User::firstOrCreate(
            ['email' => 'manager@nordicdigitalthailand.com'],
            [
                'name' => 'Manager',
                'role' => 'manager',
                'password' => 'qwe321asd',
                'email_verified_at' => now(),
            ]
        );
        User::firstOrCreate(
            ['email' => 'supervisor@nordicdigitalthailand.com'],
            [
                'name' => 'Supervisor',
                'role' => 'supervisor',
                'password' => 'qwe321asd',
                'email_verified_at' => now(),
            ]
        );
        User::firstOrCreate(
            ['email' => 'guest@nordicdigitalthailand.com'],
            [
                'name' => 'Guest',
                'role' => 'guest',
                'password' => 'qwe321asd',
                'email_verified_at' => now(),
            ]
        );
    }

    protected function withProgressBar(int $amount, Closure $createCollectionOfOne): Collection
    {
        $progressBar = new ProgressBar($this->command->getOutput(), $amount);

        $progressBar->start();

        $items = new Collection;

        foreach (range(1, $amount) as $i) {
            $items = $items->merge(
                $createCollectionOfOne()
            );
            $progressBar->advance();
        }

        $progressBar->finish();

        $this->command->getOutput()->writeln('');

        return $items;
    }
}
