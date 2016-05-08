angular.module('wheresJohnny')
  .controller('userTestController', function($scope, $interval, NgMap, $http) {
    $scope.getRooms = function(){
      $http.get('/userjson').then(function(response){
       console.log(response);
      });
    };



  });