// Ionic Starter App - Side Menu

// angular.module is a global place
// for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example
// (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js

angular.module('idayIonic', ['ionic', 'idayIonic.controllers', 'idayIonic.services', 'idayIonic.filters'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

    .state('app.settings', {
      url: "/settings",
      views: {
        'menuContent' :{
          templateUrl: "templates/settings.html",
          controller: 'AppCtrl' //SettingsCtrl
        }
      }
    })

    .state('app.companies', {
      url: "/companies",
      views: {
        'menuContent' :{
          templateUrl: "templates/companyList.html",
          controller: 'CompanyListCtrl'
        }
      }
    })

    .state('app.single', {
      url: "/companies/:companyURLId",
      views: {
        'menuContent' :{
          templateUrl: "templates/companyDetail.html",
          controller: 'CompanyCtrl'
        }
      }
    })

    .state('app.map', {
      url: "/map",
      views: {
        'menuContent' :{
          templateUrl: "templates/map.html",
          controller: 'CompanyMapCtrl'
        }
      }
    })

    .state('app.singleBooth', {
      url: "/map/:companyMapId",
      views: {
        'menuContent' :{
          templateUrl: "templates/map.html",
          controller: 'CompanyMapCtrl'
        }
      }
    })




    .state('app.favorites', {
      url: "/favorites",
      views: {
        'menuContent' :{
          templateUrl: "templates/favorites.html"
        }
      }
    })

    .state('app.login', {
      url: "/login",
      views: {
        'menuContent' :{
          templateUrl: "templates/login.html"
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/companies');
});

