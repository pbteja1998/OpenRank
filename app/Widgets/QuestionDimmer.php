<?php

namespace App\Widgets;

use App\Question;
use TCG\Voyager\Widgets\BaseDimmer;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class QuestionDimmer extends BaseDimmer
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
        $count = Question::count();
        $string = trans_choice('dimmer.question', $count);

        return view('voyager::dimmer', array_merge($this->config, [
            'icon'   => 'voyager-question',
            'title'  => "{$count} {$string}",
            'text'   => __('dimmer.question_text', ['count' => $count, 'string' => Str::lower($string)]),
            'button' => [
                'text' => __('dimmer.question_link_text'),
                'link' => route('voyager.questions.index'),
            ],
            'image' => asset('storage/widget-backgrounds/question-bg.jpeg'),
        ]));
    }

    /**
     * Determine if the widget should be displayed.
     *
     * @return bool
     */
    public function shouldBeDisplayed()
    {
        return Auth::user()->can('browse', app(Question::class));
    }
}
