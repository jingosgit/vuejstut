<?php 

namespace App\Repositories;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\File;

trait ImageUpload
{
    public function UploadAListImage($query) // Taking input image as parameter
    {
        // 0. Create a directory
       if (! File::exists("images/uploads")) {
           File::makeDirectory("images/uploads");
       }

        $images = Collection::wrap(request()->file($query));

        $images->each(function($image){
            // 1. Assign image a name.
            $image_name = strtolower($image->getClientOriginalName()).time();

            // 2. Creating Sub directory in Public folder to put image.
            $upload_path = public_path('/');   

            // 3. Move the image
           // $success = $query->move($upload_path,$image_name);
            $success = $image->move($upload_path,$image_name,$image->getClientOriginalExtension());
        });

        // 4. Just return image
        return $images; 
    }
}

 ?>