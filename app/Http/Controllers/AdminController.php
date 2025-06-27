<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Image;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function __construct()
    {

        \Log::info('Current user ID: ' . Auth::id());
        \Log::info('Current user is admin: ' . (Auth::user() ? (Auth::user()->is_admin ? 'true' : 'false') : 'no user'));

        \Log::info('AdminController constructor called for user: ' . Auth::id());
        \Log::info('User is admin: ' . (Auth::user() ? (Auth::user()->is_admin ? 'true' : 'false') : 'no user'));
    
        $this->middleware('auth');
        $this->middleware('can:admin');
    }

    /**
     * Show the admin dashboard with user management and image upload logs.
     */
    public function index()
    {
        $users = User::all();
        $images = Image::with('user')->orderBy('created_at', 'desc')->get();

        return Inertia::render('Admin/Dashboard', [
            'users' => $users,
            'images' => $images,
        ]);
    }

    /**
     * Change user password.
     */
    public function changePassword(Request $request, User $user)
    {
        $request->validate([
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);

        $user->password = Hash::make($request->password);
        $user->save();

        return redirect()->back()->with('status', 'Password updated successfully.');
    }

    /**
     * Block or unblock a user.
     */
    public function toggleBlock(User $user)
    {
        $user->is_blocked = !$user->is_blocked;
        $user->save();

        return redirect()->back()->with('status', 'User block status updated.');
    }
}
