<?php

declare(strict_types=1);

namespace Filament\Notifications;

use Illuminate\Support\Collection as BaseCollection;
use Livewire\Wireable;

class Collection extends BaseCollection implements Wireable
{
    /**
     * @param  array<array<string, mixed>>  $items
     */
    public function __construct($items = [])
    {
        parent::__construct($items);
    }

    /**
     * @param  array<array<string, mixed>>  $value
     */
    public static function fromLivewire($value): static
    {
        return app(self::class, ['items' => $value])->transform(
            fn (array $notification): Notification => Notification::fromArray($notification),
        );
    }

    /**
     * @return array<array<string, mixed>>
     */
    public function toLivewire(): array
    {
        return $this->toArray();
    }
}
