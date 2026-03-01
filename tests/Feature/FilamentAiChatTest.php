<?php

use Illuminate\Support\Facades\Route;

it('renders ai chat view when api route exists', function () {
    // ensure the route is defined for this test
    Route::post('/ai/chat', fn () => 'ok')->name('api.ai.chat');

    $html = view('filament.app.global-ai-search-trigger')->render();

    expect($html)->toContain('AI Assistant');
    expect($html)->toContain(route('api.ai.chat'));
});

it('renders gracefully when api route is missing', function () {
    // Mock Route::has to return false, simulating missing route
    Route::shouldReceive('has')->with('api.ai.chat')->andReturn(false);

    // render the view; no exception should be thrown
    $html = view('filament.app.global-ai-search-trigger')->render();

    expect($html)->toContain('AI Assistant'); // button still present? might be hidden by provider not registered
    expect($html)->not->toContain('api.ai.chat');
    // the script should still exist; at the very least it should still
    // be attempting to call `fetch`, and we don't care about the URL since
    // the route is missing.
    expect($html)->toContain('await fetch(');
});
