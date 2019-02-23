<?php

namespace App\Http\Controllers;

use App\Contest;
use App\Question;
use App\Tag;
use App\User;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        $cards = [
            [
                'title' => 'All Users',
                'type' => 'value',
                'value' => User::count()
            ],
            [
                'title' => 'All Contests',
                'type' => 'value',
                'value' => Contest::count()
            ],
            [
                'title' => 'All Questions',
                'type' => 'value',
                'value' => Question::count()
            ],
            [
                'title' => 'All Tags',
                'type' => 'value',
                'value' => Tag::count()
            ]
        ];
        return response()
            ->json(['cards' => $cards]);
    }
}
