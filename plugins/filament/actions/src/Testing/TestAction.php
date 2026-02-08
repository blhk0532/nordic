<?php

declare(strict_types=1);

namespace Filament\Actions\Testing;

use Closure;
use Filament\Support\ArrayRecord;
use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Database\Eloquent\Model;

class TestAction implements Arrayable
{
    /** @var array<string, mixed> | Closure | null */
    private array|Closure|null $arguments = null;

    /** @var array<string, mixed> */
    private array $context = [];

    private string|bool|null $schemaComponent = null;

    private ?string $schema = null;

    private mixed $table = null;

    private bool $isBulk = false;

    public function __construct(
        private string $name,
    ) {}

    public static function make(string $name): static
    {
        return app(self::class, ['name' => $name]);
    }

    /**
     * @param  array<string, mixed> | Closure | null  $arguments
     */
    public function arguments(array|Closure|null $arguments): static
    {
        $this->arguments = $arguments;

        return $this;
    }

    public function schemaComponent(string|bool|null $component = true, ?string $schema = null): static
    {
        $this->schemaComponent = $component;
        $this->schema = $schema;

        return $this;
    }

    public function table(mixed $record = true): static
    {
        $this->table = $record;

        return $this;
    }

    public function bulk(bool $condition = true): static
    {
        $this->isBulk = $condition;

        return $this;
    }

    /**
     * @param  array<string, mixed>  $actualArguments
     */
    public function checkArguments(array $actualArguments): bool
    {
        if (! ($this->arguments instanceof Closure)) {
            return true;
        }

        return ($this->arguments)($actualArguments);
    }

    /**
     * @return array<string, mixed>
     */
    public function toArray(?string $defaultSchema = null): array
    {
        $schema = $this->schema ?? $defaultSchema;

        $schemaComponentContext = match (true) {
            is_string($this->schemaComponent) => (filled($schema) ? "{$schema}." : '').$this->schemaComponent,
            $this->schemaComponent === true => $schema,
            default => null,
        };

        $array = [
            'name' => $this->name,
            ...((is_array($this->arguments)) ? ['arguments' => $this->arguments] : []),
            'context' => [
                ...($this->isBulk ? ['bulk' => true] : []),
                ...(filled($schemaComponentContext) ? ['schemaComponent' => $schemaComponentContext] : []),
                ...$this->context,
            ],
        ];

        if (blank($this->table) || ($this->table === false)) {
            return $array;
        }

        $array['context']['table'] = true;

        if ($this->table === true) {
            return $array;
        }

        if ($this->table instanceof Model) {
            $array['context']['recordKey'] = $this->table->getKey();
        } elseif (is_array($this->table)) {
            $array['context']['recordKey'] = $this->table[ArrayRecord::getKeyName()] ?? null;
        } else {
            $array['context']['recordKey'] = $this->table;
        }

        return $array;
    }
}
