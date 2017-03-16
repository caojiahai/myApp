/**
 * Created by cjh on 2017/3/10.
 */
appCtrl.controller('MineCtrl', function($scope,$localStorage,loading,qiniuFact,Toast) {
	$scope.headImg = 'img/icon.png';

	$scope.$on('$ionicView.beforeEnter',function(){
		$scope.isLogin = $localStorage.get('isLogin')=='true'?true:false;
		if($scope.isLogin){
			$scope.userInfo = JSON.parse($localStorage.getObject('userInfo')); 
		}
	});
	
	$scope.loginOut = function(){
		$scope.isLogin = false;
		$localStorage.set('isLogin',false);
		$scope.userInfo = {}
	}
	
	$scope.$on('imageSelectorChange', function (e, data) {
		if(data){
			angular.forEach(data, function (f) {
				var name = 'guider/head/'+new Date().getTime()+'.jpg';
				qiniuFact.up2QiNiuFile(name,f).then(function(res){
					$scope.userInfo.headUrl = res;
					db.transaction(function (tx) {
						tx.executeSql('select * from user where tel="'+$scope.userInfo.tel+'"', [], function (tx, results) {			    	
						    var len = results.rows.length,i;
						    if(len == 0){
								log = "该用户不存在!";
						    }else{
						    	tx.executeSql('update user set headUrl="'+res+'" WHERE tel="'+$scope.userInfo.tel+'"');	
						    	log = "上传成功!";
						    }
						    Toast.show(log);
					    }, null);
					});	
				},function(err){
					Toast.show('上传7牛失败!')
				})
			})
			
		}
	})
})
