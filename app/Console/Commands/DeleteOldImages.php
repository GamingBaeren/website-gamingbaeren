<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Image;
use Illuminate\Support\Facades\Storage;
use Carbon\Carbon;

class DeleteOldImages extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'images:delete-old';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Delete images older than 30 days from storage and database, excluding those uploaded by admins';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $thresholdDate = Carbon::now()->subDays(30);

        // Exclude images uploaded by admin users
        $oldImages = Image::where('created_at', '<', $thresholdDate)
            ->whereHas('user', function ($query) {
                $query->where('is_admin', false);
            })
            ->get();

        foreach ($oldImages as $image) {
            if (Storage::disk('public')->exists($image->filename)) {
                Storage::disk('public')->delete($image->filename);
                $this->info("Deleted file: {$image->filename}");
            }
            $image->delete();
            $this->info("Deleted database record for image ID: {$image->id}");
        }

        $this->info('Old images cleanup completed.');
    }
}