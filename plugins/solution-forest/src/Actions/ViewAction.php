<?php

declare(strict_types=1);

namespace SolutionForest\FilamentTree\Actions;

use Filament\Actions\ViewAction as BaseViewAction;
use SolutionForest\FilamentTree\Concern\Actions\TreeActionTrait;

final class ViewAction extends BaseViewAction
{
    use TreeActionTrait;
}
