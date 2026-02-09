<?php

declare(strict_types=1);

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class ForceLocalhost
{
    /**
     * Redirect 127.0.0.1 requests to localhost to keep cookie domain consistent.
     *
     * @param Closure(Request): Response $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if ($request->getHost() === '127.0.0.1') {
            $scheme = $request->getScheme();
            $port = $request->getPort();
            $portPart = in_array($port, [80, 443], true) ? '' : ':' . $port;
            $url = $scheme . '://localhost' . $portPart . $request->getRequestUri();

            return new RedirectResponse($url, 301);
        }

        return $next($request);
    }
}
