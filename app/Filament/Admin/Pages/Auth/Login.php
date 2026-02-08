<?php

declare(strict_types=1);

namespace App\Filament\Admin\Pages\Auth;

use Caresome\FilamentAuthDesigner\AuthDesignerPlugin;
use Caresome\FilamentAuthDesigner\Concerns\HasAuthDesignerLayout;
use Caresome\FilamentAuthDesigner\Enums\MediaPosition;
use Filament\Auth\Pages\Login as BaseLogin;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

final class Login extends BaseLogin
{
    use HasAuthDesignerLayout;

    public function schema(Schema $schema): Schema
    {
        return $schema->components([
            TextInput::make('username')->label('Username')->required(),
            $this->getPasswordFormComponent(),
            $this->getRememberFormComponent(),
        ]);
    }

    protected function getCredentialsFromFormData(array $data): array
    {
        return [
            'username' => $data['username'],
            'password' => $data['password'],
        ];
    }

    protected function getAuthDesignerPageKey(): string
    {
        return 'login';
    }
}

// In your panel provider:
AuthDesignerPlugin::make()
    ->login(fn ($config) => $config
        ->media(asset('assets/background.jpg'))
        ->mediaPosition(MediaPosition::Cover)
        ->usingPage(Login::class)
    );
