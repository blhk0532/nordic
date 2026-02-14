<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int $type_id
 * @property string $type_name
 * @property \Carbon\CarbonImmutable|null $created_at
 * @property \Carbon\CarbonImmutable|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Client> $clients
 * @property-read int|null $clients_count
 *
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ClientType newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ClientType newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ClientType query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ClientType whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ClientType whereTypeId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ClientType whereTypeName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ClientType whereUpdatedAt($value)
 *
 * @mixin \Eloquent
 */
class ClientType extends Model
{
    use HasFactory;

    protected $table = 'client_type';

    protected $primaryKey = 'type_id';

    protected $fillable = ['type_name'];

    public function clients()
    {
        return $this->belongsToMany(Client::class, 'client_types_relation', 'type_id', 'client_id');
    }
}
