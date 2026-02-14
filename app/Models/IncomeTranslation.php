<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property string $lang_code
 * @property int $income_id
 * @property string $description
 * @property int $is_deleted
 * @property \Carbon\CarbonImmutable|null $created_at
 * @property \Carbon\CarbonImmutable|null $updated_at
 *
 * @method static \Illuminate\Database\Eloquent\Builder<static>|IncomeTranslation newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|IncomeTranslation newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|IncomeTranslation query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|IncomeTranslation whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|IncomeTranslation whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|IncomeTranslation whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|IncomeTranslation whereIncomeId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|IncomeTranslation whereIsDeleted($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|IncomeTranslation whereLangCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|IncomeTranslation whereUpdatedAt($value)
 *
 * @mixin \Eloquent
 */
class IncomeTranslation extends Model
{
    //
}
