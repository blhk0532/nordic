<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property int $id
 * @property int $user_id
 * @property \Carbon\CarbonImmutable $stats_date
 * @property int $total_calls
 * @property int $answered_calls
 * @property int $voicemail_calls
 * @property int $no_answer_calls
 * @property int $busy_calls
 * @property int $failed_calls
 * @property int $other_calls
 * @property int $booked_meetings_count
 * @property int $total_duration
 * @property \Carbon\CarbonImmutable|null $created_at
 * @property \Carbon\CarbonImmutable|null $updated_at
 * @property-read \App\Models\User $user
 *
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingUserStat newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingUserStat newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingUserStat query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingUserStat whereAnsweredCalls($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingUserStat whereBookedMeetingsCount($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingUserStat whereBusyCalls($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingUserStat whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingUserStat whereFailedCalls($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingUserStat whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingUserStat whereNoAnswerCalls($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingUserStat whereOtherCalls($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingUserStat whereStatsDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingUserStat whereTotalCalls($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingUserStat whereTotalDuration($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingUserStat whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingUserStat whereUserId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingUserStat whereVoicemailCalls($value)
 *
 * @mixin \Eloquent
 */
class BookingUserStat extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'stats_date',
        'total_calls',
        'answered_calls',
        'voicemail_calls',
        'no_answer_calls',
        'busy_calls',
        'failed_calls',
        'other_calls',
        'booked_meetings_count',
        'total_duration',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    protected function casts(): array
    {
        return [
            'stats_date' => 'date',
            'total_calls' => 'integer',
            'answered_calls' => 'integer',
            'voicemail_calls' => 'integer',
            'no_answer_calls' => 'integer',
            'busy_calls' => 'integer',
            'failed_calls' => 'integer',
            'other_calls' => 'integer',
            'booked_meetings_count' => 'integer',
            'total_duration' => 'integer',
        ];
    }
}
