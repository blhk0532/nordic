<?php

use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;

Route::middleware(['auth'])->group(function () {
    Route::redirect('settings', 'settings/profile');

    Route::get('settings/profile', \App\Livewire\Pages\Settings\Profile::class)->name('profile.edit');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('settings/password', \App\Livewire\Pages\Settings\Password::class)->name('user-password.edit');
    Route::get('settings/appearance', \App\Livewire\Pages\Settings\Appearance::class)->name('appearance.edit');

    Route::get('settings/two-factor', \App\Livewire\Pages\Settings\TwoFactor::class)
        ->middleware(
            when(
                Features::canManageTwoFactorAuthentication()
                && Features::optionEnabled(Features::twoFactorAuthentication(), 'confirmPassword'),
                ['password.confirm'],
                [],
            ),
        )
        ->name('two-factor.show');
});
