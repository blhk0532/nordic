<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property string $lang_code
 * @property int $outcome_id
 * @property string $description
 * @property int $is_deleted
 * @property \Carbon\CarbonImmutable|null $created_at
 * @property \Carbon\CarbonImmutable|null $updated_at
 *
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OutcomeTranslation newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OutcomeTranslation newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OutcomeTranslation query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OutcomeTranslation whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OutcomeTranslation whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OutcomeTranslation whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OutcomeTranslation whereIsDeleted($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OutcomeTranslation whereLangCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OutcomeTranslation whereOutcomeId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OutcomeTranslation whereUpdatedAt($value)
 *
 * @mixin \Eloquent
 */
class OutcomeTranslation extends Model
{
    //
}
