var app = angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngCordova'])
var appCtrl = angular.module('starter.controllers', [])
var appService = angular.module('starter.services', [])
var API_URL = 'http://115.29.149.164/mobile-API/';
var paths = ['/tab/home'];
//var API_URL = 'http://192.168.1.235:80/mobile-API/';
app.run(function($ionicPlatform, $rootScope, Toast, $location) {
		$ionicPlatform.ready(function() {
				if(window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
						cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
						cordova.plugins.Keyboard.disableScroll(true);
				}
				if(window.StatusBar) {
				// org.apache.cordova.statusbar required
						StatusBar.styleDefault();
				}
		});

		$ionicPlatform.registerBackButtonAction(function(e) {
				e.preventDefault();
				var path = $location.path();
				var isPath = false;
            angular.forEach(paths, function (data) {
                if (data.indexOf(path) != -1)
                    isPath = true;
            });
            if (isPath) {
            	if($rootScope.backButtonPressedOnceToExit) {
									ionic.Platform.exitApp();
							} else {
									$rootScope.backButtonPressedOnceToExit = true;
									Toast.show('再按一次退出系统');
									setTimeout(function() {
											$rootScope.backButtonPressedOnceToExit = false;
									}, 2000);
							}
            }
				
		}, 101);
})