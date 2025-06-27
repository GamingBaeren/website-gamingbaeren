<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class CreateUser extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'user:create';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create a new user with optional admin privileges';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $username = $this->ask('Enter username');
        $email = $this->ask('Enter email');
        $firstname = $this->ask('Enter first name');
        $lastname = $this->ask('Enter last name');
        $password = $this->secret('Enter password');
        $isAdmin = $this->confirm('Is this user an admin?', false);

        $user = User::create([
            'username' => $username,
            'email' => $email,
            'firstname' => $firstname,
            'lastname' => $lastname,
            'password' => Hash::make($password),
            'is_admin' => $isAdmin,
        ]);

        $this->info('User created successfully.');
        if ($isAdmin) {
            $this->info('User has admin privileges.');
        }
    }
}