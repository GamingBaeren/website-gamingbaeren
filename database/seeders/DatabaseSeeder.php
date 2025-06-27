<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Create default admin user
        User::create([
            'firstname' => 'change',
            'lastname' => 'me',
            'username' => 'ADMIN',
            'email' => 'admin@example.com',
            'password' => Hash::make('changeme'),
            'is_admin' => true,
        ]);

        // You can add other seeders here
    }
}