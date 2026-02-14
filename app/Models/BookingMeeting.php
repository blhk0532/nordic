<?php

declare(strict_types=1);

namespace App\Models;

use Adultdate\FilamentBooking\Contracts\Eventable;
use Adultdate\FilamentBooking\ValueObjects\CalendarEvent;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

/**
 * @property int $id
 * @property string $title
 * @property string|null $description
 * @property \Carbon\CarbonImmutable $starts_at
 * @property \Carbon\CarbonImmutable $ends_at
 * @property \Carbon\CarbonImmutable|null $created_at
 * @property \Carbon\CarbonImmutable|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\User> $users
 * @property-read int|null $users_count
 *
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingMeeting newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingMeeting newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingMeeting query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingMeeting whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingMeeting whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingMeeting whereEndsAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingMeeting whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingMeeting whereStartsAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingMeeting whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingMeeting whereUpdatedAt($value)
 *
 * @mixin \Eloquent
 */
class BookingMeeting extends Model implements Eventable
{
    /** @use HasFactory<\Database\Factories\MeetingFactory> */
    use HasFactory;

    /**
     * @var array<int, string>
     */
    protected $fillable = [
        'title',
        'description',
        'starts_at',
        'ends_at',
    ];

    public function users(): BelongsToMany
    {
        return $this->belongsToMany(User::class);
    }

    public function toCalendarEvent(): CalendarEvent
    {
        $participants = $this->users_count ?? $this->users()->count();

        return CalendarEvent::make($this)
            ->title($this->title)
            ->start($this->starts_at)
            ->end($this->ends_at)
            ->durationEditable(false)
            ->extendedProps([
                'title' => $this->title,
                'participants' => $participants,
            ]);
    }

    protected function casts(): array
    {
        return [
            'starts_at' => 'datetime',
            'ends_at' => 'datetime',
        ];
    }
}
