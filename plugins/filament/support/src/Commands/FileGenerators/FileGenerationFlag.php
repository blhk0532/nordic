<?php

declare(strict_types=1);

namespace Filament\Support\Commands\FileGenerators;

class FileGenerationFlag
{
    public const EMBEDDED_PANEL_RESOURCE_SCHEMAS = 'embedded_panel_resource_schemas';

    public const EMBEDDED_PANEL_RESOURCE_TABLES = 'embedded_panel_resource_tables';

    public const PANEL_CLUSTER_CLASSES_OUTSIDE_DIRECTORIES = 'panel_cluster_classes_outside_directories';

    public const PANEL_RESOURCE_CLASSES_OUTSIDE_DIRECTORIES = 'panel_resource_classes_outside_directories';

    public const PARTIAL_IMPORTS = 'partial_imports';
}
