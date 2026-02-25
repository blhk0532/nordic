<?php

declare(strict_types=1);

use AdultDate\FilamentWirechat\Filament\Pages\ChatPage;
use AdultDate\FilamentWirechat\Models\Conversation;

it('re-runs mount when conversation parameter updates in SPA navigation', function () {
    $conversation = \Mockery::mock(Conversation::class);
    $page = \Mockery::mock(ChatPage::class)->makePartial();

    $page->shouldReceive('mount')
        ->once()
        ->with($conversation);

    $page->updatedConversation($conversation);
});
