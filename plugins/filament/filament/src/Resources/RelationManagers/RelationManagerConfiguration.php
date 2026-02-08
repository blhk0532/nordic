<?php

declare(strict_types=1);

namespace Filament\Resources\RelationManagers;

class RelationManagerConfiguration
{
    /**
     * @param  class-string<RelationManager>  $relationManager
     * @param  array<string, mixed>  $properties
     */
    public function __construct(
        public readonly string $relationManager,
        private array $properties = [],
    ) {}

    /**
     * @return array<string, mixed>
     */
    public function getProperties(): array
    {
        return $this->properties;
    }
}
