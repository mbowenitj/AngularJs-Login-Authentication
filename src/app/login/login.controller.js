'use strict';

angular.module('tangentLoginProject')
  .controller('LoginCtrl',
    ['$scope', '$rootScope', '$location', 'AuthenticationService',
    function ($scope, $http,$rootScope, $location, $state,AuthenticationService,$state,$localStorage) {
        // reset login status
        AuthenticationService.ClearCredentials();

        $scope.login = function () {
            $scope.dataLoading = true;
            AuthenticationService.Login($scope.username, $scope.password, function (response) {
                if(response.success){
                    AuthenticationService.SetCredentials($scope.username, $scope.password);
                    $state.go('projects');
                } else {
                    $scope.error = response.message;
                    $scope.dataLoading = false;
                }
            });

            $scope.resetFields = function() {
            $scope.username = {};
            $scope.password = {};
          }
        }

}]);

//   angular.module('tangentLoginProject')
//
//   .controller('LoginCtrl', function($scope, $rootScope, $stateParams, $state, LoginService) {
//     $rootScope.title = "Tangent Projects Login";
//
//     $scope.login.form = function() {
//       if(LoginService.login($scope.username, $scope.password)) {
//         $scope.error = '';
//         $scope.username = '';
//         $scope.password = '';
//         $state.go('projects');
//       } else {
//         $scope.error = "Incorrect username/password !";
//       }
//     };
//
//   });
//
//   .run(function($rootScope, $location, $state, LoginService) {
//     $rootScope.$on('$stateChangeStart',
//       function(event, toState, toParams, fromState, fromParams){
//           console.log('Changed state to: ' + toState);
//       });
//
//       if(!LoginService.isAuthenticated()) {
//         $state.transitionTo('login');
//       }
//   });
//
//
//
//
//
//
// ();
