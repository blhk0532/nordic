<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PanelAccess extends Model
{
    protected $fillable = [
        'panel_id',
        'role_access',
        'is_active',
    ];

    protected $casts = [
        'role_access' => 'array',
        'is_active' => 'boolean',
    ];
}
