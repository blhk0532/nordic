<?php

declare(strict_types=1);

use function Pest\Laravel\get;

it('renders the FlowForge page in admin panel', function () {
    $response = get('/nds/app/flowforge-page');
    $response->assertStatus(200);
    $response->assertSee('FlowForge Integration');
});
