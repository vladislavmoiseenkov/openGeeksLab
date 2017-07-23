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