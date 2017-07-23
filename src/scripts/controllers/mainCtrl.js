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