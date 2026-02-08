<?php

declare(strict_types=1);

namespace Filament\Schemas;

use Illuminate\Contracts\Support\Htmlable;
use Illuminate\Support\Js;

class JsContent implements Htmlable
{
    private string $content;

    public function __construct(string $content)
    {
        $this->content = $content;
    }

    public static function make(string $content): static
    {
        return app(self::class, ['content' => $content]);
    }

    public function toHtml(): string
    {
        $content = Js::from($this->content);

        return <<<HTML
            <span x-text="() => eval({$content})"></span>
        HTML;
    }
}
