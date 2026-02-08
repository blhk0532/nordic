<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

final class ClientType extends Model
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
