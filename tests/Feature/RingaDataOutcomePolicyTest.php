<?php

declare(strict_types=1);

use App\Models\User;
use App\Policies\RingaDataOutcomePolicy;

it('accepts the application user model for viewAny', function (): void {
    $policy = new RingaDataOutcomePolicy;
    $user = new User;

    $result = $policy->viewAny($user);

    expect($result)->toBeBool();
});
