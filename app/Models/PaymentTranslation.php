<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property string $lang_code
 * @property int $payment_id
 * @property string $description
 * @property int $is_deleted
 * @property \Carbon\CarbonImmutable|null $created_at
 * @property \Carbon\CarbonImmutable|null $updated_at
 *
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PaymentTranslation newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PaymentTranslation newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PaymentTranslation query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PaymentTranslation whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PaymentTranslation whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PaymentTranslation whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PaymentTranslation whereIsDeleted($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PaymentTranslation whereLangCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PaymentTranslation wherePaymentId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PaymentTranslation whereUpdatedAt($value)
 *
 * @mixin \Eloquent
 */
class PaymentTranslation extends Model
{
    //
}
