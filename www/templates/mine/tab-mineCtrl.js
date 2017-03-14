/**
 * Created by cjh on 2017/3/10.
 */
appCtrl.controller('MineCtrl', function($scope,$localStorage,loading) {
	$scope.userInfo = {};
	
	$scope.$on('$ionicView.beforeEnter',function(){
		$scope.isLogin = $localStorage.get('isLogin')=='true'?true:false;
		if(!$scope.isLogin){
			$scope.userInfo = JSON.parse($localStorage.getObject('userInfo')); 
		}
	});
	
	$scope.loginOut = function(){
		$scope.isLogin = false;
		$localStorage.set('isLogin',false)
	}
})
