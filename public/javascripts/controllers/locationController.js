
angular.module('wheresJohnny')
  .controller('locationController', function($scope, $interval, NgMap) {
    var vm = this;
    NgMap.getMap().then(function(map) {
      vm.map = map;
    });

    vm.autoRotate = function() {
      if (vm.map.getTilt() !== 0) {
        $interval(function() {
          var heading = vm.map.getHeading() || 0;
          vm.map.setHeading(heading + 90);
        }, 3000);
      }
    };
  



  });