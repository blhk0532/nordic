<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property int $id
 * @property int $user_id
 * @property string|null $call_sid
 * @property string|null $target_number
 * @property string|null $target_name
 * @property int|null $duration_seconds
 * @property \Carbon\CarbonImmutable|null $started_at
 * @property \Carbon\CarbonImmutable|null $ended_at
 * @property string $status
 * @property string|null $recording_url
 * @property string|null $notes
 * @property \Carbon\CarbonImmutable|null $created_at
 * @property \Carbon\CarbonImmutable|null $updated_at
 * @property-read \App\Models\User $user
 *
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CallingLog newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CallingLog newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CallingLog query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CallingLog whereCallSid($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CallingLog whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CallingLog whereDurationSeconds($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CallingLog whereEndedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CallingLog whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CallingLog whereNotes($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CallingLog whereRecordingUrl($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CallingLog whereStartedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CallingLog whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CallingLog whereTargetName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CallingLog whereTargetNumber($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CallingLog whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CallingLog whereUserId($value)
 *
 * @mixin \Eloquent
 */
class CallingLog extends Model
{
    use HasFactory;

    protected $table = 'calling_logs';

    protected $fillable = [
        'user_id',
        'call_sid',
        'target_number',
        'target_name',
        'duration_seconds',
        'started_at',
        'ended_at',
        'status',
        'recording_url',
        'notes',
    ];

    protected $casts = [
        'started_at' => 'datetime',
        'ended_at' => 'datetime',
        'duration_seconds' => 'integer',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
