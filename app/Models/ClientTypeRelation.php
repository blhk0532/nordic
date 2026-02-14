<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property int|null $client_id
 * @property int|null $type_id
 * @property \Carbon\CarbonImmutable $created_at
 *
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ClientTypeRelation newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ClientTypeRelation newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ClientTypeRelation query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ClientTypeRelation whereClientId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ClientTypeRelation whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ClientTypeRelation whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ClientTypeRelation whereTypeId($value)
 *
 * @mixin \Eloquent
 */
class ClientTypeRelation extends Model
{
    protected $table = 'client_types_relation';

    protected $primaryKey = 'id';

    protected $fillable = [
        'client_id', 'type_id', 'created_at',
    ];
}
