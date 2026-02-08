<?php

declare(strict_types=1);

namespace Filament\Support\View\Components;

class ModalComponent
{
    public static bool $hasCloseButton = true;

    public static bool $isClosedByClickingAway = true;

    public static bool $isClosedByEscaping = true;

    public static bool $isAutofocused = true;

    public static function autofocus(bool $condition = true): void
    {
        self::$isAutofocused = $condition;
    }

    public static function closeButton(bool $condition = true): void
    {
        self::$hasCloseButton = $condition;
    }

    public static function closedByClickingAway(bool $condition = true): void
    {
        self::$isClosedByClickingAway = $condition;
    }

    public static function closedByEscaping(bool $condition = true): void
    {
        self::$isClosedByEscaping = $condition;
    }
}
