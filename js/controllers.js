angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$cordovaDevice) {
        $scope.device = $cordovaDevice.getDevice();
        $scope.uuid = $cordovaDevice.getUUID();

})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
