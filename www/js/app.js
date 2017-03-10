// Ionic Starter App
var app = angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])
var appCtrl = angular.module('starter.controllers', [])
var appService = angular.module('starter.services', [])
app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})


