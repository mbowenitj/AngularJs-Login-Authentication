(function() {
  'use strict';

  angular
    .module('comfortCaptivePortal')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController'
      })
      .state('submitted', {
        url: '/submitted',
        templateUrl: 'app/submitted/submitted.html',
        controller: 'SubmittedController'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
