<?php

declare(strict_types=1);

namespace App\Http\Responses;

use App\Support\Filament\AppPanelRedirect;
use Illuminate\Http\JsonResponse;
use Laravel\Fortify\Contracts\LoginResponse as LoginResponseContract;

final class CustomLoginResponse implements LoginResponseContract
{
    public function toResponse($request)
    {
        return $request->wantsJson()
            ? new JsonResponse('', 204)
            : redirect()->to(AppPanelRedirect::urlFor($request->user()));
    }
}
