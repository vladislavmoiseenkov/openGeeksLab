var myApp = angular.module('myApp', ['ngRoute', 'ngTouch', 'ngStorage']);
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
myApp.run(function($localStorage) {
    $localStorage.list = $localStorage.list || [
        {
            name: 'Milk 1l',
            cartBtn: false,
            homeBtn: false,
            addToCart: false
        },
        {
            name: 'Eggs Medium 12 pack',
            cartBtn: false,
            homeBtn: false,
            addToCart: false
        },
        {
            name: 'Fresh Basil',
            cartBtn: false,
            homeBtn: false,
            addToCart: false
        },
        {
            name: 'Wholegrain Bread 1 pkg',
            cartBtn: false,
            homeBtn: false,
            addToCart: false
        },
        {
            name: 'Ground Coffee 200g',
            cartBtn: false,
            homeBtn: false,
            addToCart: false
        },
        {
            name: 'Red Wine',
            cartBtn: false,
            homeBtn: false,
            addToCart: false
        },
        {
            name: 'Mozzarella Cheese 150g',
            cartBtn: false,
            homeBtn: false,
            addToCart: false
        },
        {
            name: 'Orange Juice 1l',
            cartBtn: false,
            homeBtn: false,
            addToCart: false
        },
        {
            name: 'Tomatoes',
            cartBtn: false,
            homeBtn: false,
            addToCart: false
        }
    ];
    $localStorage.cart = $localStorage.cart || [];
});
myApp.controller('addCtrl', function ($scope, $localStorage, $location) {
    $scope.maxLength = 27;

    $scope.newItem = {
        name: '',
        cartBtn: false,
        homeBtn: false,
        addToCart: false
    };

    $scope.cancel = function () {
        $location.path('/')
    };

    $scope.done = function () {
        if( $scope.name !== '' ) {
            $localStorage.list.push($scope.newItem);
        }
    };
});
myApp.controller('cartCtrl', function ($scope, $localStorage) {
    $scope.cart = $localStorage.cart;

    for(var i = 0; i < $scope.cart.length; i++) {
        $scope.cart[i].isDel = false;
    }

    $scope.showDelBtn = function (index) {
        $scope.cart[index].isDel = true;
    };

    $scope.hideDelBtn = function (index) {
        $scope.cart[index].isDel = false;
    };

    $scope.deleteCartItem = function (index) {
        $scope.cart.splice(index, 1);
        $localStorage.cart = $scope.cart;
    };
});
myApp.controller('editCtrl', function ($scope, $localStorage, $location) {
    $scope.list = $localStorage.list;
    for( var i = 0; i < $scope.list.length; i++ ) {
        $scope.list[i].edit = true;
    }

    $scope.remove = function (index) {
        $scope.list.splice(index, 1);
    };

    $scope.done = function () {
        $localStorage.list = $scope.list;
        $location.path('/');
    }

});
myApp.controller('mainCtrl', function ($scope, $localStorage) {
    $scope.list = $localStorage.list;

    $scope.swipeRight = function (index) {
        if($scope.list[index].homeBtn === true) {
            $scope.list[index].homeBtn = false;
            $localStorage.list = $scope.list;
        } else {
            $scope.list[index].cartBtn = true;
            $localStorage.list = $scope.list;
        }
    };

    $scope.swipeLeft = function(index) {
        if($scope.list[index].cartBtn === true) {
            $scope.list[index].cartBtn = false;
            $localStorage.list = $scope.list;
        } else {
            $scope.list[index].homeBtn = true;
            $localStorage.list = $scope.list;
        }
    };

    $scope.addToCart = function (index) {
        $localStorage.cart.push($scope.list[index]);

        $scope.list[index].cartBtn = false;
        $localStorage.list = $scope.list;
    };
});
myApp.controller('navCtrl', function($scope, $timeout) {
    $scope.vm = {
        timeNow: new Date()
    };
    setInterval(function () {
        $timeout(function () {
            $scope.vm.timeNow = new Date();
        });
    }, 1000);

    $scope.$watch($scope.vm.timeNow);
});