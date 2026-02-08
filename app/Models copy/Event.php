<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

final class Event extends Model
{
    protected $table = 'events';

    protected $primaryKey = 'event_id';
}
