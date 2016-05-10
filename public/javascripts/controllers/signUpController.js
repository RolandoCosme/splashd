angular.module('wheresJohnny')
  .controller('signUpController', function($scope, $http, $location) {
    $scope.signup = function(){
      var newUser = {
        email: $scope.email,
        password: $scope.password,
        username: $scope.username,
      };

    $http.post('/register', newUser).then(function(){
        $scope.email = '';
        $scope.password = '';
        $scope.username = '';

        // $location.path('/');
      });
  };



});