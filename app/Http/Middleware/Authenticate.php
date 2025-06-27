<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class Authenticate
{

    /**
     * Handle an incoming request.
     */
    public function handle(Request $request, Closure $next)
    {
        if (Auth::check()) {
        
            Log::info('Authenticated user ID: ' . Auth::id());
            
            if (Auth::user() && Auth::user()->is_blocked) {
                return redirect('')->with('error','You have not admin access');
            }

        } else {
            Log::info('No authenticated user.');
        }

        if (!Auth::check()) {
            Log::info('No authenticated usffer.');
            return redirect()->route('login');
        }

        return $next($request);
    }
}