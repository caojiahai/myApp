/**
 * Created by cjh on 2017/3/10.
 */
appCtrl.controller('HomeCtrl', function($scope, $cordovaGeolocation, Toast) {
	
	var posOptions = {
		timeout: 10000,
		enableHighAccuracy: false
	};
	
	$cordovaGeolocation
		.getCurrentPosition(posOptions)
		.then(function(position) {
			var lat = position.coords.latitude
			var long = position.coords.longitude
			Toast.show('获取地理位置成功')
		}, function(err) {
		    switch(err.code){
		        case err.TIMEOUT :
		        	log = " 连接超时，请重试 ";
		            break;
		        case err.PERMISSION_DENIED :
		        	log = " 您拒绝了使用位置共享服务，查询已取消 ";
		            break;
		        case err.POSITION_UNAVAILABLE :  
		        	log = " 亲爱的火星网友，非常抱歉，我们暂时无法为您所在的星球提供位置服务 ";
		            break;
		    }
		    Toast.show(log,3000)
		});

})