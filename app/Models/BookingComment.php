<?php

declare(strict_types=1);

namespace App\Models;

use App\Models\Booking\Customer;
use Database\Factories\CommentFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\MorphTo;

/**
 * @property int $id
 * @property int|null $customer_id
 * @property string $commentable_type
 * @property int $commentable_id
 * @property string|null $title
 * @property string|null $content
 * @property bool $is_visible
 * @property \Carbon\CarbonImmutable|null $created_at
 * @property \Carbon\CarbonImmutable|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Model $commentable
 * @property-read Customer|null $customer
 *
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingComment newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingComment newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingComment query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingComment whereCommentableId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingComment whereCommentableType($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingComment whereContent($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingComment whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingComment whereCustomerId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingComment whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingComment whereIsVisible($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingComment whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingComment whereUpdatedAt($value)
 *
 * @mixin \Eloquent
 */
class BookingComment extends Model
{
    /** @use HasFactory<CommentFactory> */
    use HasFactory;

    protected $table = 'booking_comments';

    protected $guarded = [];

    protected $casts = [
        'is_visible' => 'boolean',
    ];

    /** @return BelongsTo<Customer, $this> */
    public function customer(): BelongsTo
    {
        return $this->belongsTo(Customer::class);
    }

    /** @return MorphTo<Model, $this> */
    public function commentable(): MorphTo
    {
        return $this->morphTo();
    }
}
