<?php

namespace App\Widgets;

use App\Contest;
use TCG\Voyager\Widgets\BaseDimmer;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class ContestDimmer extends BaseDimmer
{
    /**
     * The configuration array.
     *
     * @var array
     */
    protected $config = [];

    /**
     * Treat this method as a controller action.
     * Return view() or other content to display.
     */
    public function run()
    {
        $count = Contest::count();
        $string = trans_choice('dimmer.contest', $count);

        return view('voyager::dimmer', array_merge($this->config, [
            'icon'   => 'voyager-code',
            'title'  => "{$count} {$string}",
            'text'   => __('dimmer.contest_text', ['count' => $count, 'string' => Str::lower($string)]),
            'button' => [
                'text' => __('dimmer.contest_link_text'),
                'link' => route('voyager.contests.index'),
            ],
            'image' => asset('storage/widget-backgrounds/contest-bg.jpeg'),
        ]));
    }

    /**
     * Determine if the widget should be displayed.
     *
     * @return bool
     */
    public function shouldBeDisplayed()
    {
        return Auth::user()->can('browse', app(Contest::class));
    }
}
