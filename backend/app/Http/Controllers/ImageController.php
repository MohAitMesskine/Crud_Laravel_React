<?php

namespace App\Http\Controllers;

use App\Models\Image;
use Illuminate\Http\Request;

class ImageController extends Controller
{
    public function store(Request $request)
    {
        if ($request->hasFile('file')) {
            $file = $request->file('file');
            $filename = time() . '.' . $file->getClientOriginalExtension();
            $file->move(public_path('uploads'), $filename);

            $image = new Image();
            $image->file_path = $filename;
            $image->save();

            return response()->json(['message' => 'Image uploaded successfully.']);
        }

        return response()->json(['message' => 'No image uploaded.'], 400);
    }

    public function index()
    {
        $images = Image::all();

        return response()->json($images);
    }
}
