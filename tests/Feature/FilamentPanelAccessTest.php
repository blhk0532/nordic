<?php

declare(strict_types=1);

use AdultDate\FilamentWirechat\Models\Conversation;
use App\Http\Middleware\FilamentPanelAccess;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

test('authenticated users can access app panel without panel access records', function () {
    $user = new User([
        'role' => 'user',
    ]);

    $user->id = 1;
    Auth::setUser($user);

    $request = Request::create('/nds/app/team/acme', 'GET');

    $response = app(FilamentPanelAccess::class)->handle($request, fn () => response('ok'));

    expect($response->getContent())->toBe('ok');
});

test('guests are redirected to login for app panel routes', function () {
    $request = Request::create('/nds/app/team/acme', 'GET');

    $response = app(FilamentPanelAccess::class)->handle($request, fn () => response('ok'));

    expect($response->isRedirect())->toBeTrue();
    expect($response->getTargetUrl())->toContain('/login');
});

test('user get unread count supports explicit conversation argument', function () {
    $user = new User;
    $user->id = 1;

    $conversation = Mockery::mock(Conversation::class);
    $conversation->shouldReceive('getUnreadCountFor')
        ->once()
        ->with($user)
        ->andReturn(7);

    expect($user->getUnreadCount($conversation))->toBe(7);
});
