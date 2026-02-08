<?php

declare(strict_types=1);

namespace Filament\Forms\Components\RichEditor;

use Filament\Actions\Action;

abstract class RichContentCustomBlock
{
    abstract public static function getId(): string;

    final public static function getLabel(): string
    {
        return (string) str(static::getId())
            ->kebab()
            ->replace('-', ' ')
            ->ucwords();
    }

    /**
     * @param  array<string, mixed>  $config
     * @param  array<string, mixed>  $data
     */
    final public static function toHtml(array $config, array $data): ?string
    {
        return null;
    }

    /**
     * @param  array<string, mixed>  $config
     */
    final public static function getPreviewLabel(array $config): string
    {
        return static::getLabel();
    }

    /**
     * @param  array<string, mixed>  $config
     */
    final public static function toPreviewHtml(array $config): ?string
    {
        return null;
    }

    final public static function configureEditorAction(Action $action): Action
    {
        return $action->modalHidden();
    }
}
