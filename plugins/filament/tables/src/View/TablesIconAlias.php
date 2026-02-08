<?php

declare(strict_types=1);

namespace Filament\Tables\View;

use Filament\QueryBuilder\View\QueryBuilderIconAlias;

class TablesIconAlias
{
    public const ACTIONS_DISABLE_REORDERING = 'tables::actions.disable-reordering';

    public const ACTIONS_ENABLE_REORDERING = 'tables::actions.enable-reordering';

    public const ACTIONS_FILTER = 'tables::actions.filter';

    public const ACTIONS_GROUP = 'tables::actions.group';

    public const ACTIONS_OPEN_BULK_ACTIONS = 'tables::actions.open-bulk-actions';

    public const ACTIONS_COLUMN_MANAGER = 'tables::actions.column-manager';

    public const COLUMNS_COLLAPSE_BUTTON = 'tables::columns.collapse-button';

    public const COLUMNS_ICON_COLUMN_FALSE = 'tables::columns.icon-column.false';

    public const COLUMNS_ICON_COLUMN_TRUE = 'tables::columns.icon-column.true';

    public const EMPTY_STATE = 'tables::empty-state';

    public const FILTERS_QUERY_BUILDER_CONSTRAINTS_BOOLEAN = QueryBuilderIconAlias::CONSTRAINTS_BOOLEAN;

    public const FILTERS_QUERY_BUILDER_CONSTRAINTS_DATE = QueryBuilderIconAlias::CONSTRAINTS_DATE;

    public const FILTERS_QUERY_BUILDER_CONSTRAINTS_NUMBER = QueryBuilderIconAlias::CONSTRAINTS_NUMBER;

    public const FILTERS_QUERY_BUILDER_CONSTRAINTS_RELATIONSHIP = QueryBuilderIconAlias::CONSTRAINTS_RELATIONSHIP;

    public const FILTERS_QUERY_BUILDER_CONSTRAINTS_SELECT = QueryBuilderIconAlias::CONSTRAINTS_SELECT;

    public const FILTERS_QUERY_BUILDER_CONSTRAINTS_TEXT = QueryBuilderIconAlias::CONSTRAINTS_TEXT;

    public const FILTERS_REMOVE_ALL_BUTTON = 'tables::filters.remove-all-button';

    public const GROUPING_COLLAPSE_BUTTON = 'tables::grouping.collapse-button';

    public const HEADER_CELL_SORT_ASC_BUTTON = 'tables::header-cell.sort-asc-button';

    public const HEADER_CELL_SORT_BUTTON = 'tables::header-cell.sort-button';

    public const HEADER_CELL_SORT_DESC_BUTTON = 'tables::header-cell.sort-desc-button';

    public const REORDER_HANDLE = 'tables::reorder.handle';

    public const SEARCH_FIELD = 'tables::search-field';
}
