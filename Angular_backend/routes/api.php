<?php

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

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:api');

Route::get('/employees', function () {
    return response()->json(["employee" => App\Employee::all()]);
});

Route::get('/departments', function () {
    return response()->json(["department" => App\Department::all()]);
});

Route::get('/departments/{id}', function ($id) {
    return response()->json(["department" => App\Department::find($id)]);
});
