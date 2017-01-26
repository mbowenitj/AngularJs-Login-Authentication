'use strict';

angular.module('tangentLoginProject')
  .controller('LoginCtrl', function ($scope, $http,$rootScope, $location, $state,AuthenticationService) {
        // reset login status
        AuthenticationService.ClearCredentials();

        $scope.login = function () {
            $scope.dataLoading = true;
            AuthenticationService.Login($scope.username, $scope.last_name, function (response) {
                if(response.success){
                    AuthenticationService.SetCredentials($scope.username, $scope.last_name);
                    $location.path('projects');
                } else {
                    $scope.error = response.message;
                    $scope.dataLoading = false;
                }
            });
        }

       $scope.clearFields = function() {
         $scope.username = '';
         $scope.last_name = '';

       };

});
