/**
 * Created by cjh on 2017/3/10.
 */
appCtrl.controller('HomeCtrl', function($scope,$cordovaGeolocation,Toast ,$cordovaContacts,
	$cordovaCamera,$cordovaNetwork,$rootScope,$cordovaVibration) {
	
//	var posOptions = {
//		timeout: 10000,
//		enableHighAccuracy: false
//	};
	
	//获取地理位置--ok
//	$cordovaGeolocation
//		.getCurrentPosition(posOptions)
//		.then(function(position) {
//			var lat = position.coords.latitude
//			var long = position.coords.longitude
//			Toast.show('获取地理位置成功')
//		}, function(err) {
//		    switch(err.code){
//		        case err.TIMEOUT :
//		        	log = " 连接超时，请重试 ";
//		            break;
//		        case err.PERMISSION_DENIED :
//		        	log = " 您拒绝了使用位置共享服务，查询已取消 ";
//		            break;
//		        case err.POSITION_UNAVAILABLE :  
//		        	log = " 亲爱的火星网友，非常抱歉，我们暂时无法为您所在的星球提供位置服务 ";
//		            break;
//		    }
//		    Toast.show(log,3000)
//		});
		
	//获取手机联系人--未通过
//	$cordovaContacts.find().then(function(allContacts) { //omitting parameter to .find() causes all contacts to be returned
//    	console.log(allContacts)
// 	})


//相机--ok
//  var options = {
//    quality: 50,
//    destinationType: Camera.DestinationType.DATA_URL,
//    sourceType: Camera.PictureSourceType.CAMERA,
//    allowEdit: true,
//    encodingType: Camera.EncodingType.JPEG,
//    targetWidth: 100,
//    targetHeight: 100,
//    popoverOptions: CameraPopoverOptions,
//    saveToPhotoAlbum: false,
//    correctOrientation:true
//  };
//
//  $cordovaCamera.getPicture(options).then(function(imageData) {
//    console.log(imageData)
//  }, function(err) {
//    console.log(err)
//  });


//  // 监听手机网络在线事件--ok
//  $rootScope.$on('$cordovaNetwork:online', function(event, networkState){
//    var onlineState = networkState;
//    console.log(onlineState)
//  })
//
//  // 监听手机网络离线事件--ok
//  $rootScope.$on('$cordovaNetwork:offline', function(event, networkState){
//    var offlineState = networkState;
//    console.log(offlineState)
//  })

//震动--ok
//	$cordovaVibration.vibrate(100);

})