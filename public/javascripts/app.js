angular.module('wheresJohnny', ['ui.router','ngTable', 'ngMap'])
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',function($stateProvider, $urlRouterProvider, $locationProvider) {
$urlRouterProvider.otherwise('/');

$stateProvider
.state('location', {
  url: '/location',
  templateUrl: '/locationsPartial.html',
  controller: 'locationController'

})
.state('userjson', {
  url: '/userjson',
  templateUrl: '/userTest.html',
  controller: 'userTestController'
});


$locationProvider.html5Mode(true);

}]);