<?php

namespace App\Providers;

use Carbon\CarbonImmutable;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\ServiceProvider;
use Illuminate\Validation\Rules\Password;
use BezhanSalleh\PanelSwitch\PanelSwitch;
use Filament\View\PanelsRenderHook;
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
        $this->configureDefaults();


                PanelSwitch::configureUsing(function (PanelSwitch $switch): void {
            $switch
                ->labels([
                    'admin' => 'Admin',
                    'app' => 'App',
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
                ->iconSize(20)
                ->renderHook(PanelsRenderHook::TOPBAR_LOGO_AFTER)
                ->sort('asc');


            $panels = [];



            $switch->panels($panels);
            });
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
