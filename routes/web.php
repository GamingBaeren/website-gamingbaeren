<?php
use App\Http\Controllers\AdminController;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware('auth')->group(function () {
    Route::get('/images/upload', [ImageController::class, 'create'])->name('images.upload');
    Route::post('/images/upload', [ImageController::class, 'store'])->name('images.store');
    Route::get('/images/{image}', [ImageController::class, 'show'])->name('images.show');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/images/upload/result/{image}', [ImageController::class, 'uploadResult'])->name('images.uploadResult');

Route::get('/images/file/{filename}', [ImageController::class, 'directUrl'])->name('images.direct');

Route::get('/download/launcher', function () {
    return Inertia::render('download');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/auth.php';

Route::middleware(['auth', 'can:admin'])->prefix('admin')->group(function () {
    

    Route::get('/dashboard', [AdminController::class, 'index'])->name('admin.dashboard');
    Route::post('/users/{user}/change-password', [AdminController::class, 'changePassword'])->name('admin.users.changePassword');
    Route::post('/users/{user}/toggle-block', [AdminController::class, 'toggleBlock'])->name('admin.users.toggleBlock');
});
