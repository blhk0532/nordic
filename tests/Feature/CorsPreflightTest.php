<?php

declare(strict_types=1);

it('allows CORS preflight requests on non-api paths', function (): void {
    $response = $this->call('OPTIONS', '/', [], [], [], [
        'HTTP_ORIGIN' => 'chrome-extension://auoma-test',
        'HTTP_ACCESS_CONTROL_REQUEST_METHOD' => 'POST',
    ]);

    $response->assertHeader('Access-Control-Allow-Origin', '*');
    expect($response->getStatusCode())->toBeGreaterThanOrEqual(200)->toBeLessThan(300);
});
