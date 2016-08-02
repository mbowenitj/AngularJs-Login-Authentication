(function() {
  'use strict';

  angular
    .module('comfortCaptivePortal')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
