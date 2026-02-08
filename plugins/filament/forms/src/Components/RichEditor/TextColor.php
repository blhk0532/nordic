<?php

declare(strict_types=1);

namespace Filament\Forms\Components\RichEditor;

use Filament\Support\Colors\Color;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;

class TextColor
{
    public function __construct(
        private ?string $label = null,
        private ?string $color = null,
        private ?string $darkColor = null,
    ) {}

    public static function make(?string $label = null, ?string $color = null, ?string $darkColor = null): static
    {
        return app(self::class, [
            'label' => $label,
            'color' => $color,
            'darkColor' => $darkColor,
        ]);
    }

    /**
     * @return array<string, TextColor>
     */
    public static function getDefaults(): array
    {
        return Arr::mapWithKeys(
            Color::all(),
            fn (array $color, string $name): array => [$name => TextColor::make(Str::ucwords($name), $color['600'], $color['400'] ?? null)],
        );
    }

    public function getLabel(): ?string
    {
        return $this->label;
    }

    public function getSafeLabelHtml(): string
    {
        return e($this->getLabel());
    }

    public function getColor(): ?string
    {
        return $this->color;
    }

    public function getDarkColor(): ?string
    {
        return $this->darkColor ?? $this->getColor();
    }
}
