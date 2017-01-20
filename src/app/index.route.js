(function() {
  'use strict';

  angular
    .module('tangentLoginProject')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login', {
        url: '/',
        templateUrl: 'app/login/login.html',
        controller: 'LoginController'
      });
      // .state('projects', {
      //   url: '/projects',
      //   templateUrl: 'app/projects/projects.html',
      //   controller: 'SubmittedController'
      // });

    $urlRouterProvider.otherwise('/');
  }

})();
