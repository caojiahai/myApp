/**
 * Created by cjh on 2017/3/10.
 */
app.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
  //tab 置底
  $ionicConfigProvider.platform.ios.tabs.style('standard');
  $ionicConfigProvider.platform.ios.tabs.position('bottom');
  $ionicConfigProvider.platform.android.tabs.style('standard');
  $ionicConfigProvider.platform.android.tabs.position('bottom');
  $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
  $ionicConfigProvider.platform.android.navBar.alignTitle('center');
  $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
  $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');
  $ionicConfigProvider.platform.ios.views.transition('ios');
  $ionicConfigProvider.platform.android.views.transition('android');

  //路由
  $stateProvider
    //底部tab页
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

    //首页
    .state('tab.home', {
      url: '/home',
      views: {
        'tab-dash': {
          templateUrl: 'templates/home/tab-home.html',
          controller: 'HomeCtrl'
        }
      }
    })

    //聊天列表
    .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    //聊天详情
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })
    //设置
    .state('tab.account', {
      url: '/account',
      views: {
        'tab-account': {
          templateUrl: 'templates/account/tab-account.html',
          controller: 'AccountCtrl'
        }
      }
    })
    //个人中心
    .state('tab.mine', {
      url: '/mine',
      views: {
        'tab-mine': {
          templateUrl: 'templates/mine/tab-mine.html',
          controller: 'MineCtrl'
        }
      }
    })
    //登录
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login/login.html',
      controller: 'LoginCtrl'
    })
    //注册
    .state('register', {
      url: '/register',
      templateUrl: 'templates/register/register.html',
      controller: 'RegisterCtrl'
    })

  $urlRouterProvider.otherwise('/tab/home');

});
