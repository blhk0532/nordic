<?php

declare(strict_types=1);

namespace App\Models;

use Adultdate\FilamentBooking\Enums\CalendarTheme;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property int $id
 * @property int $user_id
 * @property \Carbon\CarbonImmutable|null $opening_hour_start
 * @property \Carbon\CarbonImmutable|null $opening_hour_end
 * @property \Carbon\CarbonImmutable|null $created_at
 * @property \Carbon\CarbonImmutable|null $updated_at
 * @property string|null $confirmation_sms
 * @property string|null $confirmation_email
 * @property bool $calendar_weekends
 * @property CalendarTheme $calendar_theme
 * @property string|null $confirmation_sms_number
 * @property string|null $confirmation_email_address
 * @property string|null $telavox_jwt
 * @property string $calendar_timezone
 * @property-read \App\Models\User $user
 *
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CalendarSettings newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CalendarSettings newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CalendarSettings query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CalendarSettings whereCalendarTheme($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CalendarSettings whereCalendarTimezone($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CalendarSettings whereCalendarWeekends($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CalendarSettings whereConfirmationEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CalendarSettings whereConfirmationEmailAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CalendarSettings whereConfirmationSms($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CalendarSettings whereConfirmationSmsNumber($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CalendarSettings whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CalendarSettings whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CalendarSettings whereOpeningHourEnd($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CalendarSettings whereOpeningHourStart($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CalendarSettings whereTelavoxJwt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CalendarSettings whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CalendarSettings whereUserId($value)
 *
 * @mixin \Eloquent
 */
class CalendarSettings extends Model
{
    protected $fillable = [
        'user_id',
        'opening_hour_start',
        'opening_hour_end',
        'confirmation_sms',
        'confirmation_email',
        'calendar_weekends',
        'calendar_theme',
        'confirmation_sms_number',
        'confirmation_email_address',
        'telavox_jwt',
        'calendar_timezone',
        'confirmation_sms',
    ];

    /**
     * Default attribute values to ensure attributes exist when not present in DB.
     * This prevents MissingAttributeException when accessing optional columns
     * before migrations have been run or columns are null.
     *
     * @var array
     */
    protected $attributes = [
        'confirmation_sms' => null,
        'confirmation_email' => null,
        'confirmation_sms_number' => null,
        'confirmation_email_address' => null,
        'telavox_jwt' => null,
        'calendar_timezone' => 'Europe/Stockholm',
    ];

    protected $casts = [
        'opening_hour_start' => 'datetime',
        'opening_hour_end' => 'datetime',
        'calendar_weekends' => 'boolean',
        'calendar_theme' => CalendarTheme::class,
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
