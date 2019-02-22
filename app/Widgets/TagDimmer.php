<?php

namespace App\Widgets;

use App\Tag;
use TCG\Voyager\Widgets\BaseDimmer;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class TagDimmer extends BaseDimmer
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
        $count = Tag::count();
        $string = trans_choice('dimmer.tag', $count);

        return view('voyager::dimmer', array_merge($this->config, [
            'icon'   => 'voyager-tag',
            'title'  => "{$count} {$string}",
            'text'   => __('dimmer.tag_text', ['count' => $count, 'string' => Str::lower($string)]),
            'button' => [
                'text' => __('dimmer.tag_link_text'),
                'link' => route('voyager.tags.index'),
            ],
            'image' => asset('storage/widget-backgrounds/tag-bg.jpeg'),
        ]));
    }

    /**
     * Determine if the widget should be displayed.
     *
     * @return bool
     */
    public function shouldBeDisplayed()
    {
        return Auth::user()->can('browse', app(Tag::class));
    }
}
