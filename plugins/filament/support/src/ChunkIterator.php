<?php

declare(strict_types=1);

namespace Filament\Support;

use Generator;
use Iterator;

class ChunkIterator
{
    public function __construct(
        private Iterator $iterator,
        private int $chunkSize,
    ) {}

    public function get(): Generator
    {
        $this->iterator->rewind();

        $chunk = [];

        for ($i = 0; $this->iterator->valid(); $i++) {
            $chunk[] = $this->iterator->current();

            $this->iterator->next();

            if (count($chunk) !== $this->chunkSize) {
                continue;
            }

            yield $chunk;

            $chunk = [];
        }

        if (count($chunk)) {
            yield $chunk;
        }
    }
}
