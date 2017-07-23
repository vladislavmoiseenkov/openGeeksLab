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