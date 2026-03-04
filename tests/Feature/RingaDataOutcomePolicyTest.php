<?php

declare(strict_types=1);

use App\Models\User;
use App\Policies\RingaDataOutcomePolicy;

it('accepts the application user model for viewAny', function (): void {
    $policy = new RingaDataOutcomePolicy;
    $user = new class extends User
    {
        public function can($abilities, $arguments = []): bool
        {
            return false;
        }
    };

    $result = $policy->viewAny($user);

    expect($result)->toBeBool();
});
