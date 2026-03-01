<?php

use App\Models\Task;
use Livewire\Component;
use Relaticle\Flowforge\Components\Column;
use Relaticle\Flowforge\Concerns\InteractsWithBoard;
use Relaticle\Flowforge\Contracts\HasBoard;
use Relaticle\Flowforge\Models\Board;

return new class extends Component implements HasBoard
{
    use InteractsWithBoard;

    public function board(Board $board): Board
    {
        return $board
            ->query(Task::query())
            ->columnIdentifier('status')
            ->positionIdentifier('position')
            ->columns([
                Column::make('todo')->label('To Do')->color('gray'),
                Column::make('in_progress')->label('In Progress')->color('blue'),
                Column::make('completed')->label('Completed')->color('green'),
            ]);
    }

    public function render()
    {
        return view('components.⚡task-board.task-board');
    }
};
