<?php

declare(strict_types=1);

namespace Filament\Notifications\Testing;

use Filament\Notifications\Notification;

/**
 * @return TestCall | TestCase | mixed
 */
function assertNotified(Notification|string|null $notification = null)
{
    Notification::assertNotified($notification);

    return test();
}
