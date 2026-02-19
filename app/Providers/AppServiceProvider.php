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

         $panelSwitch
        ->panels(['admin', 'app'])
        ->modalWidth('sm')
        ->slideOver()
                ->labels([
                    'admin' => 'Admin',
                    'app' => 'Appen',
                    'booking' => 'Booking',
                    'calendar' => 'Calendar',
                    'chat' => 'Chat',
                    'data' => 'Data',
                    'email' => 'Email',
                    'files' => 'Files',
                    'notify' => 'Notify',
                    'queue' => 'Queue',
                    'super' => 'Super',
                    'tools' => 'Tools',
                ])
                ->icons([
                    'admin' => 'heroicon-o-shield-check',
                    'app' => 'heroicon-o-user-circle',
                    'booking' => 'heroicon-o-clipboard-document-check',
                    'calendar' => 'heroicon-o-calendar-days',
                    'chat' => 'heroicon-o-chat-bubble-left-right',
                    'data' => 'heroicon-o-list-bullet',
                    'email' => 'heroicon-m-at-symbol',
                    'files' => 'heroicon-m-server-stack',
                    'notify' => 'heroicon-m-megaphone',
                    'queue' => 'heroicon-c-queue-list',
                    'super' => 'heroicon-m-fire',
                    'tools' => 'heroicon-s-bolt',
                ])
                ->renderHook(PanelsRenderHook::TOPBAR_LOGO_AFTER)
                ->sort('asc');

        if ($user?->role && $user?->role === 'admin') {
        $panelSwitch
        ->panels(['admin', 'app', 'booking', 'chat'])
            ->iconSize(32)
              ->modalWidth('sm')
                ->renderHook(PanelsRenderHook::TOPBAR_LOGO_AFTER)
                ->sort('asc');
            }


        if($user?->role && $user?->role === 'super'){
         $panelSwitch
        ->panels(['admin', 'app', 'booking', 'calendar', 'chat', 'data', 'email', 'files', 'notify', 'queue', 'super', 'tools'])
            ->iconSize(20)
                ->renderHook(PanelsRenderHook::TOPBAR_LOGO_AFTER)
                ->sort('asc')
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
        Password::defaults(fn (): ?Password => app()->isProduction()
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
