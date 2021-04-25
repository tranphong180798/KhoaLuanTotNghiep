<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Similarity extends Model
{
    protected $table = 'similarity';
    protected $primaryKey = 'id';
    public $incrementing = true;
    public $timestamps = false;

}
