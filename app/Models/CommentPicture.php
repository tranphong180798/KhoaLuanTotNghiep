<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CommentPicture extends Model
{
    protected $table = 'comment_pictures';
    protected $primaryKey = 'Id';
    public $incrementing = true;
    public $timestamps = false;
    protected $fillable = ['Url','CommentId','IsFoody'];

    public function comment(){
        return $this->belongsTo('App\Models\Comment','CommentId','Id');
    }

}
