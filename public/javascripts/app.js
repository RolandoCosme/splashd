angular.module('wheresJohnny', ['ui.router','ngTable', 'ngMap'])
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',function($stateProvider, $urlRouterProvider, $locationProvider) {
$urlRouterProvider.otherwise('/');

$stateProvider
.state('location', {
  url: '/location',
  templateUrl: '/locationsPartial.html',
  controller: 'locationController'

});

$locationProvider.html5Mode(true);

}]);