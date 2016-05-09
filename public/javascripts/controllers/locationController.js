
angular.module('wheresJohnny',['ngMap'])
  .controller('locationController', function(NgMap) {
    var vm = this;
    NgMap.getMap().then(function(map) {
      vm.map = map;
    });
    vm.callbackFunc = function(param) {
      console.log('You are at' + vm.map.getCenter());
    };
  });