<?php

declare(strict_types=1);

namespace App\Models;

use App\Observers\ServiceObserver;
use Filament\Models\Contracts\FilamentUser;
use Filament\Models\Contracts\HasAvatar;
use Filament\Panel;
use Illuminate\Auth\Authenticatable;
use Illuminate\Auth\MustVerifyEmail;
use Illuminate\Auth\Passwords\CanResetPassword;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\CanResetPassword as CanResetPasswordContract;
use Illuminate\Contracts\Auth\MustVerifyEmail as MustVerifyEmailContract;
use Illuminate\Database\Eloquent\Attributes\ObservedBy;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\Access\Authorizable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Storage;

#[ObservedBy(ServiceObserver::class)]
/**
 * @property int $id
 * @property string $ulid
 * @property bool $status
 * @property string $role
 * @property string|null $name
 * @property string|null $name_first
 * @property string|null $name_last
 * @property string|null $address
 * @property string|null $email
 * @property string|null $email_private
 * @property string|null $phone
 * @property string|null $phone_private
 * @property \Carbon\CarbonImmutable|null $email_verified_at
 * @property string $password
 * @property string|null $two_factor_secret
 * @property string|null $two_factor_recovery_codes
 * @property string|null $two_factor_confirmed_at
 * @property string|null $remember_token
 * @property string|null $avatar_url
 * @property array<array-key, mixed>|null $custom_fields
 * @property string|null $locale
 * @property string|null $theme_color
 * @property int|null $current_team_id
 * @property \Carbon\CarbonImmutable|null $created_at
 * @property \Carbon\CarbonImmutable|null $updated_at
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection<int, \Illuminate\Notifications\DatabaseNotification> $notifications
 * @property-read int|null $notifications_count
 *
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Service newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Service newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Service query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Service whereAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Service whereAvatarUrl($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Service whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Service whereCurrentTeamId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Service whereCustomFields($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Service whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Service whereEmailPrivate($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Service whereEmailVerifiedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Service whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Service whereLocale($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Service whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Service whereNameFirst($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Service whereNameLast($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Service wherePassword($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Service wherePhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Service wherePhonePrivate($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Service whereRememberToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Service whereRole($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Service whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Service whereThemeColor($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Service whereTwoFactorConfirmedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Service whereTwoFactorRecoveryCodes($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Service whereTwoFactorSecret($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Service whereUlid($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Service whereUpdatedAt($value)
 *
 * @mixin \Eloquent
 */
class Service extends Model implements AuthenticatableContract, AuthorizableContract, CanResetPasswordContract, FilamentUser, HasAvatar, MustVerifyEmailContract
{
    use Authenticatable;
    use Authorizable;
    use CanResetPassword;
    use HasFactory;
    use MustVerifyEmail;
    use Notifiable;

    protected $fillable = [
        'status',
        'name',
        'email',
        'password',
        'avatar_url',
        'custom_fields',
        'locale',
        'theme_color',
        'ulid',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    public function canAccessPanel(Panel $panel): bool
    {
        return false;
    }

    public function canImpersonate(): bool
    {
        return false;
    }

    public function getFilamentAvatarUrl(): ?string
    {
        $avatarColumn = config('filament-edit-profile.avatar_column', 'avatar_url');

        return $this->$avatarColumn ? Storage::url($this->$avatarColumn) : null;
    }

    protected static function boot(): void
    {
        parent::boot();

        self::creating(function ($model) {
            if (empty($model->ulid)) {
                $model->ulid = (string) \Illuminate\Support\Str::ulid();
            }
        });
    }

    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
            'status' => 'boolean',
            'custom_fields' => 'array',
        ];
    }
}
