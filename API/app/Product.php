<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    //
    public function stadisct()
    {
        return $this->hasMany('App\Statistics');
    }
}
