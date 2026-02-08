<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

final class ClientTypeRelation extends Model
{
    protected $table = 'client_types_relation';

    protected $primaryKey = 'id';

    protected $fillable = [
        'client_id', 'type_id', 'created_at',
    ];
}
