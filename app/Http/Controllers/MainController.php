<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MainController extends Controller
{
    //get view
    public function index()
    {
        return view('main');
    }
}
