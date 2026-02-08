<?php

declare(strict_types=1);

namespace Filament\Support;

use Illuminate\Contracts\Support\Htmlable;
use Illuminate\Support\Str;
use Stringable;

class Markdown implements Htmlable, Stringable
{
    public function __construct(
        private string $text,
        private bool $isInline = false,
    ) {}

    public function __toString(): string
    {
        return $this->toHtml();
    }

    public static function inline(string $text): static
    {
        return new self($text, isInline: true);
    }

    public static function block(string $text): static
    {
        return new static($text);
    }

    public function toHtml(): string
    {
        return $this->isInline
            ? Str::inlineMarkdown($this->text)
            : Str::markdown($this->text);
    }
}
