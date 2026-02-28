<?php

namespace App\Filament\Livewire;

use App\Models\Task;
use Livewire\Component;
use Relaticle\Flowforge\Board;
use Relaticle\Flowforge\Column;
use Relaticle\Flowforge\Concerns\InteractsWithBoard;
use Relaticle\Flowforge\Contracts\HasBoard;

class TaskBoard extends Component implements HasBoard
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

    public function getBoard(): Board
    {
        return $this->board($this->makeBoard());
    }

    protected function makeBoard(): Board
    {
        return new Board($this);
    }

    public function render()
    {
        return view('filament.livewire.task-board');
    }
}
