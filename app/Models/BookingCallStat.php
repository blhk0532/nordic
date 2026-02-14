<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property int $id
 * @property int $user_id
 * @property int|null $lead_id
 * @property int|null $booking_id
 * @property string $outcome
 * @property int $duration
 * @property string|null $notes
 * @property bool $booked_meeting
 * @property \Carbon\CarbonImmutable $call_date
 * @property \Carbon\CarbonImmutable|null $created_at
 * @property \Carbon\CarbonImmutable|null $updated_at
 * @property-read \App\Models\Booking\Booking|null $booking
 * @property-read \App\Models\BookingDataLead|null $lead
 * @property-read \App\Models\User $user
 *
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingCallStat newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingCallStat newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingCallStat query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingCallStat whereBookedMeeting($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingCallStat whereBookingId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingCallStat whereCallDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingCallStat whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingCallStat whereDuration($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingCallStat whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingCallStat whereLeadId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingCallStat whereNotes($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingCallStat whereOutcome($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingCallStat whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingCallStat whereUserId($value)
 *
 * @mixin \Eloquent
 */
class BookingCallStat extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'lead_id',
        'booking_id',
        'outcome',
        'duration',
        'notes',
        'booked_meeting',
        'call_date',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function lead(): BelongsTo
    {
        return $this->belongsTo(BookingDataLead::class, 'lead_id');
    }

    public function booking(): BelongsTo
    {
        return $this->belongsTo(Booking\Booking::class, 'booking_id');
    }

    protected function casts(): array
    {
        return [
            'call_date' => 'datetime',
            'booked_meeting' => 'boolean',
        ];
    }
}
