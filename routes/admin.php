<?php

use App\Http\Controllers\Admin\RestaurantController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::group(['namespace'=>'Admin'],function (){
    Route::get('add_location',   [RestaurantController::class,'add_location'] )->name("admin.add_location");
    Route::post('add_location_post',[RestaurantController::class,'add_location_post'])->name("admin.add_location_post");

    Route::get('/',[RestaurantController::class,'list_location'])->name("admin.list_location");
    Route::get('list_location_get',[RestaurantController::class,'list_location_get'])->name("admin.list_location_get");
    Route::get('detail_location/{id}',[RestaurantController::class,'detail_location_get'])->name("admin.detail_location");
    Route::get('delete_location/{id}',[RestaurantController::class,'delete_location_get'])->name("admin.delete_location");
    Route::post('update_location_post/{id}',[RestaurantController::class,'update_location_post'])->name("admin.update_location_post");

    Route::get('list_user_get',[RestaurantController::class,'list_user_get'])->name("admin.list_user_get");
    Route::get('delete_user/{id}',[RestaurantController::class,'delete_user_get'])->name("admin.delete_user");
    Route::get('detail_user/{id}',[RestaurantController::class,'detail_user_get'])->name("admin.detail_user");
    Route::post('update_user_post/{id}',[RestaurantController::class,'update_user_post'])->name("admin.update_user_post");
    Route::get('add_user',[RestaurantController::class,'add_user'])->name("admin.add_user");
    Route::post('add_user_post',[RestaurantController::class,'add_user_post'])->name("admin.add_user_post");

    Route::get('list_admin_get',[RestaurantController::class,'list_admin_get'])->name("admin.list_admin_get");
    Route::get('delete_admin/{id}',[RestaurantController::class,'delete_admin_get'])->name("admin.delete_admin");
    Route::get('detail_admin/{id}',[RestaurantController::class,'detail_admin_get'])->name("admin.detail_admin");
    Route::post('update_admin_post/{id}',[RestaurantController::class,'update_admin_post'])->name("admin.update_admin_post");
    Route::get('add_admin',[RestaurantController::class,'add_admin'])->name("admin.add_admin");
    Route::post('add_admin_post',[RestaurantController::class,'add_admin_post'])->name("admin.add_admin_post");

    Route::get('list_location_approval',[RestaurantController::class,'list_location_approval'])->name("admin.list_location_approval");
    Route::get('list_location_approval_get',[RestaurantController::class,'list_location_approval_get'])->name("admin.list_location_approval_get");
    Route::get('detail_location_approval/{id}',[RestaurantController::class,'detail_location_approval_get'])->name("admin.detail_location_approval");
    Route::get('delete_location_approval/{id}',[RestaurantController::class,'delete_location_approval_get'])->name("admin.delete_location_approval");
    Route::post('update_location_approval_post/{id}',[RestaurantController::class,'update_location_approval_post'])->name("admin.update_location_approval_post");

    Route::get('statistic',[RestaurantController::class,'statistic'])->name("admin.statistic");
    Route::get('statistic_get',[RestaurantController::class,'statistic_get'])->name("admin.statistic_get");
});

