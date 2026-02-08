<?php

declare(strict_types=1);

namespace daacreators\CreatorsTicketing\Filament\Resources\Departments\Schemas;

use Filament\Schemas\Schema;

final class DepartmentForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                //
            ]);
    }
}
