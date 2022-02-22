/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route';

Route.group(() => {
  Route.get('me', 'AuthController.me');
  Route.resource('users', 'UsersController').except(['store', 'destroy', 'index']);
  Route.patch('questions/:id/answers', 'AnswersController.reorderAnswers');
  Route.resource('questions', 'QuestionsController').only(['index', 'store', 'show', 'update', 'destroy']);
  Route.resource('answers', 'AnswersController').only(['store', 'update', 'destroy']);
  Route.resource('tags', 'TagsController').only(['index']);
  Route.resource('documents', 'DocumentsController').only(['store', 'destroy']);
}).middleware('auth:api');

Route.post('users', 'UsersController.store');
Route.get('users', 'UsersController.index');
Route.post('login', 'AuthController.login');
Route.post('logout', 'AuthController.logout');
