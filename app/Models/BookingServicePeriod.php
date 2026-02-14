<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property \Carbon\CarbonImmutable $service_date
 * @property int $service_user_id
 * @property string|null $service_location
 * @property string|null $start_time
 * @property string|null $end_time
 * @property string|null $starts_at
 * @property string|null $ends_at
 * @property string|null $period_type
 * @property int|null $created_by
 * @property \Carbon\CarbonImmutable|null $created_at
 * @property \Carbon\CarbonImmutable|null $updated_at
 * @property string|null $color
 * @property-read \App\Models\User|null $creator
 * @property-read \App\Models\User $serviceUser
 *
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingServicePeriod newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingServicePeriod newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingServicePeriod query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingServicePeriod whereColor($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingServicePeriod whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingServicePeriod whereCreatedBy($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingServicePeriod whereEndTime($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingServicePeriod whereEndsAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingServicePeriod whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingServicePeriod wherePeriodType($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingServicePeriod whereServiceDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingServicePeriod whereServiceLocation($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingServicePeriod whereServiceUserId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingServicePeriod whereStartTime($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingServicePeriod whereStartsAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingServicePeriod whereUpdatedAt($value)
 *
 * @mixin \Eloquent
 */
class BookingServicePeriod extends Model
{
    use HasFactory;

    protected $table = 'booking_service_periods';

    // Prefer explicit fillable to avoid accidental mass-assignment
    protected $fillable = [
        'service_date',
        'service_user_id',
        'service_location',
        'start_time',
        'end_time',
        'period_type',
        'created_by',
        'color',
    ];

    /**
     * Casts
     */
    protected $casts = [
        'service_date' => 'date',
        'start_time' => 'string',
        'end_time' => 'string',
    ];

    /**
     * The user this service period belongs to.
     */
    public function serviceUser(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(User::class, 'service_user_id');
    }

    /**
     * The user who created this period.
     */
    public function creator(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(User::class, 'created_by');
    }
}
