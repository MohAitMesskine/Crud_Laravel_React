<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (auth()->attempt($credentials)) {
            // Authentication passed
            $user = auth()->user();

            // Return the authenticated user or any other response you need
            return response()->json(['user' => $user]);
        }

        // Authentication failed
        return response()->json(['message' => 'Invalid credentials'], 401);
    }
}
