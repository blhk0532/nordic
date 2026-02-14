<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property int $type_id
 * @property string $lang_code
 * @property string $type_name
 * @property \Carbon\CarbonImmutable|null $created_at
 * @property \Carbon\CarbonImmutable|null $updated_at
 *
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ClientTypeTranslation newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ClientTypeTranslation newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ClientTypeTranslation query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ClientTypeTranslation whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ClientTypeTranslation whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ClientTypeTranslation whereLangCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ClientTypeTranslation whereTypeId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ClientTypeTranslation whereTypeName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ClientTypeTranslation whereUpdatedAt($value)
 *
 * @mixin \Eloquent
 */
class ClientTypeTranslation extends Model
{
    //
}
