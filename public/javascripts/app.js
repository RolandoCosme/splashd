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
})
.state('bathrooms', {
  url: '/bathrooms',
  templateUrl: '/partial-bathrooms',
  controller: '/bathroomController'
})
.state('signup', {
  url: '/signup',
  templateUrl: '/partial-signUp',
  controller: '/signUpController' 
});


$locationProvider.html5Mode(true);

}]);