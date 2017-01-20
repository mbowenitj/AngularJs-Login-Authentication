(function() {
  'use strict';

  angular
    .module('tangentLoginProject')
    .controller('LoginController', MainController);

    LoginController.$inject = ['$location', 'AuthenticationService', 'FlashService'];
      function LoginController($location, AuthenticationService, FlashService) {
          var usr = this;

          usr.login = login;

          (function initController() {
              // reset login status
              AuthenticationService.ClearCredentials();
          })();

          function login() {
              usr.dataLoading = true;
              AuthenticationService.Login(usr.username, usr.password, function (response) {
                  if (response.success) {
                      AuthenticationService.SetCredentials(usr.username, usr.password);
                      $location.path('/');
                  } else {
                      FlashService.Error(response.message);
                      usr.dataLoading = false;
                  }
              });
          };
      }




});
