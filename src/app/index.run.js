(function() {
  'use strict';

  angular
    .module('tangentLoginProject')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
