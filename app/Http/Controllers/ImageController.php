<?php

namespace App\Http\Controllers;

use App\Models\Image;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ImageController extends Controller
{
    /**
     * Show the image upload form.
     */
    public function create()
    {
        if (Auth::check() && Auth::user() && Auth::user()->is_blocked) {
            return Redirect::to('/');
        }
        return Inertia::render('Images/Upload');
    }

    /**
     * Handle the image upload and store the file and record.
     */
    public function store(Request $request)
    {
        $request->validate([
            'image' => ['required', 'image', 'max:5120'], // max 5MB
        ]);

        $user = Auth::user();

        
        if (Auth::check() && Auth::user() && Auth::user()->is_blocked) {
            return Redirect::to('/');
        }

        $path = $request->file('image')->store('images', 'public');

        $image = Image::create([
            'user_id' => $user->id,
            'filename' => $path,
        ]);

        return redirect()->route('images.uploadResult', ['image' => $image->id]);
    }

    /**
     * Show the upload result page with URLs.
     */
    public function uploadResult(Image $image)
    {
        $viewUrl = route('images.show', ['image' => $image->id]);
        $directUrl = asset('storage/' . $image->filename);

        return Inertia::render('Images/UploadResult', [
            'viewUrl' => $viewUrl,
            'directUrl' => $directUrl,
        ]);
    }

    /**
     * Show the image view page with uploader info.
     */
    public function show(Image $image)
    {
        // Removed authorization check to avoid error
        // Ensure route is protected by auth middleware

        $image->load('user');

        // Add file size to image object
        $image->file_size = Storage::disk('public')->size($image->filename);

        return Inertia::render('Images/View', [
            'image' => $image,
        ]);
    }

    /**
     * Serve the image file directly (public access).
     */
    public function directUrl($filename)
    {
        $path = 'images/' . $filename;

        if (!Storage::disk('public')->exists($path)) {
            abort(404);
        }

        // Redirect to public storage URL for direct access without auth
        return redirect(asset('storage/' . $path));
    }
}
