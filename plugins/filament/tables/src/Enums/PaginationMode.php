<?php

declare(strict_types=1);

namespace Filament\Tables\Enums;

enum PaginationMode
{
    case Default;

    case Simple;

    case Cursor;
}
