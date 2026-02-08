<?php

declare(strict_types=1);

namespace SolutionForest\FilamentTree\Actions;

use Filament\Actions\EditAction as BaseEditAction;
use SolutionForest\FilamentTree\Concern\Actions\TreeActionTrait;

final class EditAction extends BaseEditAction
{
    use TreeActionTrait;
}
