<?php

declare(strict_types=1);

namespace Filament\Support;

class ArrayRecord
{
    private static string $keyName = '__key';

    public static function keyName(string $keyName): void
    {
        self::$keyName = $keyName;
    }

    public static function getKeyName(): string
    {
        return self::$keyName;
    }
}
