/**
 * Created by cjh on 2017/3/10.
 */
appCtrl.controller('AccountCtrl', function($scope,$cordovaDevice) {
  $scope.settings = {
    enableFriends: true
  };
  
     var device = $cordovaDevice.getDevice();

    var cordova = $cordovaDevice.getCordova();

    var model = $cordovaDevice.getModel();

    var platform = $cordovaDevice.getPlatform();

    var uuid = $cordovaDevice.getUUID();

    var version = $cordovaDevice.getVersion();
    
    console.log(device,cordova,model,platform,uuid,version)
});
