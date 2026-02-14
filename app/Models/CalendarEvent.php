<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property int $id
 * @property string $title
 * @property \Carbon\CarbonImmutable $start
 * @property \Carbon\CarbonImmutable|null $end
 * @property bool $all_day
 * @property string|null $background_color
 * @property string|null $description
 * @property int|null $user_id
 * @property \Carbon\CarbonImmutable|null $created_at
 * @property \Carbon\CarbonImmutable|null $updated_at
 * @property-read \App\Models\User|null $user
 *
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CalendarEvent newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CalendarEvent newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CalendarEvent query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CalendarEvent whereAllDay($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CalendarEvent whereBackgroundColor($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CalendarEvent whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CalendarEvent whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CalendarEvent whereEnd($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CalendarEvent whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CalendarEvent whereStart($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CalendarEvent whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CalendarEvent whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CalendarEvent whereUserId($value)
 *
 * @mixin \Eloquent
 */
class CalendarEvent extends Model
{
    protected $fillable = [
        'title',
        'start',
        'end',
        'all_day',
        'background_color',
        'description',
        'user_id',
    ];

    protected $casts = [
        'start' => 'datetime',
        'end' => 'datetime',
        'all_day' => 'boolean',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function toCalendarObject(int $timezoneOffset = 0, bool $useFilamentTimezone = false): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'start' => $useFilamentTimezone
                ? $this->start?->setTimezone(config('app.timezone', 'UTC'))->toIso8601String()
                : $this->start?->utcOffset($timezoneOffset)->toIso8601String(),
            'end' => $useFilamentTimezone
                ? $this->end?->setTimezone(config('app.timezone', 'UTC'))->toIso8601String()
                : $this->end?->utcOffset($timezoneOffset)->toIso8601String(),
            'allDay' => $this->all_day,
            'backgroundColor' => $this->background_color,
            'extendedProps' => [
                'description' => $this->description,
                'user_id' => $this->user_id,
            ],
        ];
    }

    /**
     * Return header widgets for the page so Filament will render them
     * in the page header area (the framework filters by canView()).
     *
     * @return array<class-string<\Filament\Widgets\Widget>>
     */
}
