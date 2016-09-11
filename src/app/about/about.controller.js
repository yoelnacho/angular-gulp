(function() {
  'use strict';

    angular
      .module('angularGulp')
      .controller('AboutController', MainController);

    /** @ngInject */
    function MainController($timeout) {
        var vm = this;

        vm.creationDate = 1472925417453;

        activate();

        function activate() {
            $timeout(function() {
                vm.msg = 'Excelente!';
            }, 3000);
        }
    }
})();
