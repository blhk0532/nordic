<?php

declare(strict_types=1);

namespace Filament\Tables\Columns\Layout;

class View extends Component
{
    /**
     * @param  view-string  $view
     */
    public function __construct(string $view)
    {
        $this->view($view);
    }

    /**
     * @param  view-string  $view
     */
    public static function make(string $view): static
    {
        $static = app(self::class, ['view' => $view]);
        $static->configure();

        return $static;
    }
}
