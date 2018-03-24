'use strict';

/**
 * @ngdoc overview
 * @name anandApp
 * @description
 * # anandApp
 *
 * Main module of the application.
 */
angular
  .module('anandApp', [
    'ngResource',
    'ngRoute',
    'ui.bootstrap','ngAnimate'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'CarouselDemoCtrl1'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/ayurveda', {
        templateUrl: 'views/ayurveda.html',
        controller: 'CarouselDemoCtrl',
      })
      .when('/prices', {
        templateUrl: 'views/prices.html'
      })
      .when('/facilities', {
        templateUrl: 'views/facilities.html'
      })
      .when('/attractions', {
        templateUrl: 'views/attractions.html'
      })
      .when('/contactus', {
        templateUrl: 'views/contactus.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).controller('CarouselDemoCtrl', function($scope) {
   $scope.myInterval = 3000;
   $scope.slides = [
    {
      image: 'images/ayu1.jpg'
    },
    {
      image: 'images/ayu2.jpg'
    }
  ];
}).controller('CarouselDemoCtrl1', function($scope) {
   $scope.myInterval = 3000;
   $scope.slides = [
    {
      image: 'images/carosal1.jpg'
    },
    {
      image: 'images/carosal2.jpg'
    },
    {
      image: 'images/carosal3.jpg'
    },
    {
      image: 'images/carosal4.jpg'
    }
  ];
});

 
  