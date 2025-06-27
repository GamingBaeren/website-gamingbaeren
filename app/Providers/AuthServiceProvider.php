<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;
use App\Models\User;
use Illuminate\Support\Facades\Log;

class AuthServiceProvider extends ServiceProvider
{
    protected $policies = [];

    public function boot(): void
    {
        $this->registerPolicies();

        Gate::define('admin', function (User $user) {
            Log::info('Checking admin gate for user: ' . $user->id . ', is_admin: ' . $user->is_admin);
            return $user->is_admin === true;
        });
    }
}