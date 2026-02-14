<?php

declare(strict_types=1);

namespace App\Models;

use Adultdate\FilamentBooking\Contracts\Eventable;
use Adultdate\FilamentBooking\Enums\Priority;
use Adultdate\FilamentBooking\ValueObjects\CalendarEvent;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property string $title
 * @property string|null $description
 * @property Priority $priority
 * @property \Carbon\CarbonImmutable $starts_at
 * @property \Carbon\CarbonImmutable $ends_at
 * @property \Carbon\CarbonImmutable|null $created_at
 * @property \Carbon\CarbonImmutable|null $updated_at
 *
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingSprint newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingSprint newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingSprint query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingSprint whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingSprint whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingSprint whereEndsAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingSprint whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingSprint wherePriority($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingSprint whereStartsAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingSprint whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingSprint whereUpdatedAt($value)
 *
 * @mixin \Eloquent
 */
class BookingSprint extends Model implements Eventable
{
    /** @use HasFactory<\Database\Factories\SprintFactory> */
    use HasFactory;

    /**
     * @var array<int, string>
     */
    protected $fillable = [
        'title',
        'description',
        'priority',
        'starts_at',
        'ends_at',
    ];

    public function toCalendarEvent(): CalendarEvent
    {
        return CalendarEvent::make($this)
            ->title($this->title)
            ->start($this->starts_at)
            ->end($this->ends_at)
            ->extendedProps([
                'title' => $this->title,
                'priority' => $this->priority->getLabel(),
            ]);
    }

    protected function casts(): array
    {
        return [
            'priority' => Priority::class,
            'starts_at' => 'datetime',
            'ends_at' => 'datetime',
        ];
    }
}
