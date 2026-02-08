<?php

declare(strict_types=1);

namespace App\Events;

use App\Models\Postnummer;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

final class PostNummerStatusUpdated
{
    use Dispatchable;
    use SerializesModels;

    public function __construct(public Postnummer $postNummer) {}
}
