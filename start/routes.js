'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.group(() => {

  // !Registrar
  Route.post('add-user', 'AuthUserController.registerUser');
  Route.post('set-password', 'AuthUserController.setPassword');

  // !Iniciar Session
  Route.post('api-login', 'AuthUserController.loginApiUser');
  Route.post('user-login', 'AuthUserController.loginUser');

  // !Agregar y listar productos
  Route.post('add-product', 'ProductController.addProduct');
  Route.post('list-user-products', 'ProductController.myProducts');

  // !Cerrar sesion
  Route.post('user-logout', 'AuthUserController.logOut');

  Route.get('get-user-data', 'AuthUserController.getUserData');
  Route.get('tipo-personas', 'TipoPersonaController.index')
  Route.post('tipo-personas', 'TipoPersonaController.post')


  // ! Obtener llaves
  Route.post('get-llaves', 'AuthUserController.getLLaves');


  //* ESP Controler 

  Route.get('logs', 'LogController.index')
  Route.post('logs', 'LogController.store')


}).prefix('api/v1/');
