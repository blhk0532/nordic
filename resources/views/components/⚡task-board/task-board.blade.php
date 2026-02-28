
@php
    /** @var \Relaticle\Flowforge\Models\Board $board */
    $board = $this->board(new \Relaticle\Flowforge\Models\Board());
    $columns = $board->getColumns();
    $config = [
        'recordTitleAttribute' => 'name',
        'columnIdentifierAttribute' => 'status',
        'cardLabel' => 'Task',
        'pluralCardLabel' => 'Tasks',
    ];
@endphp

@include('flowforge::index', ['columns' => $columns, 'config' => $config])