/**
 * Created by cjh on 2017/3/10.
 */
appCtrl.controller('MineCtrl', function($scope,$localStorage) {
	$scope.$on('$ionicView.beforeEnter',function(){
		$scope.isLogin = $localStorage.get('isLogin')
	});
	
	$scope.loginOut = function(){
		$scope.isLogin = false;
		$localStorage.set('isLogin',false)
	}
})
