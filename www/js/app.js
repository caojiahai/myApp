// Ionic Starter App
var app = angular.module('starter', ['ionic', 'ngCordova', 'starter.controllers', 'starter.services'])
var appCtrl = angular.module('starter.controllers', [])
var appService = angular.module('starter.services', [])
var API_URL = 'http://115.29.149.164/mobile-API/';
//var API_URL = 'http://192.168.1.235:80/mobile-API/';
app.run(function($ionicPlatform) {
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
})