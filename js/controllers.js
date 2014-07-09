angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$cordovaDevice) {
        $scope.cpos = {};
        $scope.msg = "default";
        $scope.device = $cordovaDevice.getDevice();
        $scope.uuid = $cordovaDevice.getUUID();

        navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationError);

        var geolocationSuccess = function(position) {
            $scope.cpos = position;
        };

        var geolocationError = function(err){
            $scope.msg = "unable to locate " + err.message;
        }
});
