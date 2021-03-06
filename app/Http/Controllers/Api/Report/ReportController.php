<?php

namespace App\Http\Controllers\Api\Report;

use App\Models\Comment;
use App\Models\CommentLike;
use App\Models\CommentPicture;
use App\Models\Customer;
use App\Http\Controllers\Controller;
use App\Http\Requests\Account\ChangePasswordRequest;
use App\Http\Requests\Account\LoginRequest;
use App\Http\Requests\Account\RegisterRequest;
use App\Http\Requests\Comment\CreateCommentRequest;
use App\Models\Report;
use App\Models\Restaurant;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Laravel\Socialite\Facades\Socialite;
use Mockery\Exception;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;

class ReportController extends Controller
{
   public function create(Request $request){
       $data = $request->all();
       $data['create_at'] = time();
       Report::create($data);
       return [
           'success'=>true,
           'message'=>__('success')
       ];
   }
}
