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