<?php

declare(strict_types=1);

namespace Filament\Tables\View;

class TablesRenderHook
{
    public const SELECTION_INDICATOR_ACTIONS_AFTER = 'tables::selection.indicator.actions.after';

    public const SELECTION_INDICATOR_ACTIONS_BEFORE = 'tables::selection.indicator.actions.before';

    public const HEADER_AFTER = 'tables::header.after';

    public const HEADER_BEFORE = 'tables::header.before';

    public const TOOLBAR_AFTER = 'tables::toolbar.after';

    public const TOOLBAR_BEFORE = 'tables::toolbar.before';

    public const TOOLBAR_COLUMN_MANAGER_TRIGGER_AFTER = 'tables::toolbar.toggle-column-trigger.after';

    public const TOOLBAR_COLUMN_MANAGER_TRIGGER_BEFORE = 'tables::toolbar.toggle-column-trigger.before';

    public const TOOLBAR_END = 'tables::toolbar.end';

    public const TOOLBAR_GROUPING_SELECTOR_AFTER = 'tables::toolbar.grouping-selector.after';

    public const TOOLBAR_GROUPING_SELECTOR_BEFORE = 'tables::toolbar.grouping-selector.before';

    public const TOOLBAR_REORDER_TRIGGER_AFTER = 'tables::toolbar.reorder-trigger.after';

    public const TOOLBAR_REORDER_TRIGGER_BEFORE = 'tables::toolbar.reorder-trigger.before';

    public const TOOLBAR_SEARCH_AFTER = 'tables::toolbar.search.after';

    public const TOOLBAR_SEARCH_BEFORE = 'tables::toolbar.search.before';

    public const TOOLBAR_START = 'tables::toolbar.start';

    public const FILTER_INDICATORS = 'tables::filter.indicators';

    public const HEADER_CELL = 'tables::header.cell';

    /**
     * @deprecated Use `TOOLBAR_COLUMN_MANAGER_TRIGGER_AFTER` instead.
     */
    public const TOOLBAR_TOGGLE_COLUMN_TRIGGER_AFTER = self::TOOLBAR_COLUMN_MANAGER_TRIGGER_AFTER;

    /**
     * @deprecated Use `TOOLBAR_COLUMN_MANAGER_TRIGGER_BEFORE` instead.
     */
    public const TOOLBAR_TOGGLE_COLUMN_TRIGGER_BEFORE = self::TOOLBAR_COLUMN_MANAGER_TRIGGER_BEFORE;
}
