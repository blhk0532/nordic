<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class RingaDataOutcome extends Model
{
    use HasFactory;

    protected $fillable = [
        'ringa_data_id',
        'user_id',
        'coutcome',
    ];

    public function ringaData(): BelongsTo
    {
        return $this->belongsTo(RingaData::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
