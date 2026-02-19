<?php

namespace App\Providers;

use BezhanSalleh\PanelSwitch\PanelSwitch;
use Carbon\CarbonImmutable;
use Filament\Support\Facades\FilamentView;
use Filament\View\PanelsRenderHook;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\ServiceProvider;
use Illuminate\Validation\Rules\Password;
use Livewire\Livewire;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Str;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {

        //    FilamentView::registerRenderHook(
        //        PanelsRenderHook::USER_MENU_BEFORE,
        //        fn () => view('filament.app.manus-icon-topbar')
        //    );

        $this->configureDefaults();

        if (app()->environment('production')) {
            URL::forceScheme('https');
        }


        PanelSwitch::configureUsing(function (PanelSwitch $panelSwitch) {

            $user = Auth::user();
            $name = $user?->name ? $user?->name : 'App';

            $panelSwitch
                ->panels(['admin', 'app'])
                ->modalWidth('sm')
                ->slideOver()
                ->labels([
                    'app' => Str::ucfirst(Str::limit($name, 10)),
                    'admin' => 'Admin',
                    'booking' => 'Bokning',
                    'calendar' => 'Kalender',
                    'chat' => 'Chat',
                    'data' => 'Data',
                    'email' => 'Email',
                    'files' => 'Filer',
                    'notify' => 'Notify',
                    'queue' => 'Queue',
                    'super' => 'Super',
                    'tools' => 'Tools',
                ])
                ->icons([
                    'app' => 'heroicon-o-user-circle',
                    'admin' => 'heroicon-o-shield-check',
                    'booking' => 'heroicon-o-check-circle',
                    'calendar' => 'heroicon-o-calendar-days',
                    'chat' => 'heroicon-o-chat-bubble-left-right',
                    'data' => 'heroicon-o-list-bullet',
                    'email' => 'heroicon-m-at-symbol',
                    'files' => 'heroicon-m-server-stack',
                    'notify' => 'heroicon-o-megaphone',
                    'queue' => 'heroicon-c-queue-list',
                    'super' => 'heroicon-m-fire',
                    'tools' => 'heroicon-s-bolt',
                ]);

            if ($user?->role && $user?->role === 'booking') {
                $panelSwitch
                    ->panels(['app', 'booking', 'calendar', 'chat'])
                    ->iconSize(32)
                    ->modalWidth('sm')
                    ->renderHook(PanelsRenderHook::TOPBAR_LOGO_BEFORE)
                    ->sort('asc');
            }

            if ($user?->role && $user?->role === 'manager') {
                $panelSwitch
                    ->panels(['app', 'admin', 'booking', 'calendar', 'chat', 'email',  'notify', 'queue'])
                    ->iconSize(32)
                    ->modalWidth('sm')
                    ->renderHook(PanelsRenderHook::TOPBAR_LOGO_BEFORE)
                    ->sort('asc');
            }


            if ($user?->role && $user?->role === 'admin') {
                $panelSwitch
                    ->panels(['app', 'admin', 'booking', 'calendar', 'chat', 'email',  'notify', 'queue'])
                    ->iconSize(32)
                    ->modalWidth('sm')
                    ->renderHook(PanelsRenderHook::TOPBAR_LOGO_BEFORE)
                    ->sort('asc');
            }


            if ($user?->role && $user?->role === 'super') {
                $panelSwitch
                    ->panels(['app', 'admin', 'booking', 'calendar', 'chat', 'data', 'email', 'files', 'notify', 'queue', 'super', 'tools'])
                    ->iconSize(20)
                    ->renderHook(PanelsRenderHook::TOPBAR_LOGO_BEFORE)
                    ->modalWidth('sm');
            }

        });

        // Register UserNotes modal outside of Topbar to prevent Livewire entangle conflicts
        // Disabled for now due to rich editor JS errors in the modal.
        // FilamentView::registerRenderHook(
        //     PanelsRenderHook::BODY_START,
        //     fn (): string => view('filament.app.user-notes-modal-container')->render(),
        // );
    }

    protected function configureDefaults(): void
    {
        Date::use(CarbonImmutable::class);
        DB::prohibitDestructiveCommands(
            app()->isProduction(),
        );
        Password::defaults(
            fn(): ?Password => app()->isProduction()
                ? Password::min(12)
                ->mixedCase()
                ->letters()
                ->numbers()
                ->symbols()
                ->uncompromised()
                : null
        );
    }
}
