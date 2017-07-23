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