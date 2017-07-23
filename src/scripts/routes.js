myApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'view/main.html',
            controller: 'mainCtrl'
        })
        .when('/cart', {
            templateUrl: 'view/cart.html',
            controller: 'cartCtrl'
        })
        .when('/edit', {
            templateUrl: 'view/edit.html',
            controller: 'editCtrl'
        })
        .when('/add', {
            templateUrl: 'view/add.html',
            controller: 'addCtrl'
        })
        .otherwise({
            redirectTo: '/'
        })
});