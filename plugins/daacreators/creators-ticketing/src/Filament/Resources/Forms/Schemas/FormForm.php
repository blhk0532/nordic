<?php

declare(strict_types=1);

namespace daacreators\CreatorsTicketing\Filament\Resources\Forms\Schemas;

use Filament\Schemas\Schema;

final class FormForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                //
            ]);
    }
}
