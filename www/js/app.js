// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ngCordova' ,'starter.controllers', 'starter.services','starter.filters', 'nl2br', 'monospaced.elastic', 'ngSanitize', 'ngStorage', 'ngCookies', 'ngCordovaOauth', 'ui.rCalendar'])
.run(function($ionicPlatform, AuthService, $state,$ionicLoading) {
  $ionicPlatform.ready(function() {
	 
	  AuthService.userIsLoggedIn().then(function(response)
	  {
		  if (response === true)
		  {
		  console.log(response);
          // success 
		  $state.go('home',{}, {reload:true});
      $ionicLoading.hide();
		  }
		  else
		  {
	  $state.go('login');
      $ionicLoading.hide();  
		  }
    });
	  
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
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

.config(function($stateProvider, $urlRouterProvider, $compileProvider, $ionicConfigProvider) {
	
	$ionicConfigProvider.tabs.position('bottom');
	 $compileProvider.directive('compile', function ($compile) {
        // directive factory creates a link function
        return function (scope, element, attrs) {
          scope.$watch(
              function (scope) {
                // watch the 'compile' expression for changes
                return scope.$eval(attrs.compile);
              },
              function (value) {
                // when the 'compile' expression changes
                // assign it into the current DOM
                element.html(value);

                // compile the new DOM and link it to the current
                // scope.
                // NOTE: we only compile .childNodes so that
                // we don't get into infinite loop compiling ourselves
                $compile(element.contents())(scope);
              }
          );
        };
      });
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  
  $stateProvider

  // login screen
  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'AuthCtrl'
  })

  // register screen
  .state('register', {
    url: '/register',
    templateUrl: 'templates/register.html',
    controller: 'AuthCtrl'
  })

  // Home screen
  .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html',
    controller: 'HomeCtrl'
  })
  
  .state('addevent', {
    url: '/newevent',
    templateUrl: 'templates/addevent.html',
    controller: 'AddEventCtrl',
	  params: {
        obj: null
    }
  })

  /*
  .state('twitterFeed', {
    url: "/twitterFeed",
    templateUrl: "templates/twitterFeed.html",
     controller: 'TwitterFeedCtrl'
  })
  
  // Categories screen
  .state('categories', {
    url: '/categories',
    templateUrl: 'templates/categories.html',
    controller: 'CategoriesCtrl'
  })

  // Recent posts
  .state('recent_posts', {
    url: '/recent-posts',
    templateUrl: 'templates/recent-posts.html',
    controller: 'HomeCtrl'
  })

  // Wall post
  .state('wall_posts', {
    url: '/wall-posts',
    templateUrl: 'templates/wall-posts.html',
    controller: 'HomeCtrl'
  })

  // View post detail
  .state('post', {
    url: '/post/:postId',
    templateUrl: 'templates/post.html',
    controller: 'PostCtrl'
  })

  // Chat list
  .state('chats', {
    url: '/chats',
    templateUrl: 'templates/chats.html',
    controller: 'ChatCtrl'
  })

  .state('chat-detail', {
    url: '/chats/:chatId',
    templateUrl: 'templates/chat-detail.html',
    controller: 'ChatDetailCtrl'
  })
  .state('chats-celeb', {
    url: '/chats-celeb',
    templateUrl: 'templates/chats-celeb.html',
    controller: 'ChatCelebCtrl'
  })
  .state('chat-detail-celeb', {
    url: '/chats-celeb/:chatId',
    templateUrl: 'templates/chat-detail-celeb.html',
    controller: 'ChatDetailCelebCtrl'
  })

  // List of notifications
  .state('notifications', {
    url: '/notifications',
    templateUrl: 'templates/notifications.html',
    controller: 'NotificationsCtrl'
  })

  // Contact list
  .state('contacts', {
    url: '/contacts',
    templateUrl: 'templates/contacts.html',
    controller: 'ContactsCtrl'
  })
  .state('fb', {
    url: '/fb',
    templateUrl: 'templates/facebook.html',
    controller: 'AuthCtrl'
  })
*/
  // User profile
  .state('user', {
    url: '/user/:userId',
    templateUrl: 'templates/user.html',
    controller: 'UserCtrl'
  })
  /*
  .state('credits', {
    url: '/credits',
    templateUrl: 'templates/credits.html',
    controller: 'CreditCtrl'
  })
  
   .state('user.twitter', {
    url: '/user/twitter/:userId',
    templateUrl: 'templates/twitterFeed.html',
    controller: 'UserCtrl'
  })

  // Setting page
  .state('setting', {
    url: '/setting',
    templateUrl: 'templates/setting.html',
    controller: 'SettingCtrl'
  });
*/
    // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home');

});
