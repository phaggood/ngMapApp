angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$cordovaDevice,$cordovaGeolocation) {
        $scope.cpos = {}
        $scope.device = $cordovaDevice.getDevice();
        $scope.uuid = $cordovaDevice.getUUID();
        $cordovaGeolocation.getCurrentPosition().then(function(position) {
            // Position here: position.coords.latitude, position.coords.longitude
            $scope.cpos = position;
        }, function(err) {
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
