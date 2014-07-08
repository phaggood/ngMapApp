angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$cordovaDevice,$cordovaGeolocation) {
        $scope.cpos = {};
        $scope.msg = "default";
        $scope.device = $cordovaDevice.getDevice();
        $scope.uuid = $cordovaDevice.getUUID();
        $cordovaGeolocation.getCurrentPosition().then(function(position) {
            // Position here: position.coords.latitude, position.coords.longitude
            $scope.cpos = position;
            $scope.msg = "location found";
        }, function(err) {
            $scope.msg = "unable to locate " + err.message;
            // error
        });


})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
