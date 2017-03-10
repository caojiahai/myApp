/**
 * Created by cjh on 2017/3/10.
 */
appCtrl.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

