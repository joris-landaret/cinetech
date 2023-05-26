<?php

use App\Controller\AuthController;

require_once 'vendor/autoload.php';

$router = new AltoRouter();

$router->map('GET', '/', function () {
    require_once 'src/View/home.php';
}, 'home');

$router->map('GET', '/env', function () {
    $authController = new AuthController;
    $authController->env();
}, 'view');

$router->map('GET', '/movies', function () {
    require_once 'src/view/movies.php';
}, 'display-movies');

$match = $router->match();

if (is_array($match) && is_callable($match['target'])) {
    call_user_func_array($match['target'], $match['params']);
} else {
    // no route was matched
    header($_SERVER["SERVER_PROTOCOL"] . ' 404 Not Found');
}
