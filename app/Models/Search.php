<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Search newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Search newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Search query()
 *
 * @mixin \Eloquent
 */
class Search extends Model
{
    /** @use HasFactory<\Database\Factories\SearchFactory> */
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'value',
    ];

    /**
     * Get the attributes that should be cast.
     */
    protected function casts(): array
    {
        return [
            'value' => 'string',
        ];
    }
}
