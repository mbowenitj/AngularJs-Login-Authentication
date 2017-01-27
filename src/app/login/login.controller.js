'use strict';

angular.module('tangentLoginProject')
  .controller('LoginCtrl', function ($scope, $http,$rootScope, $location,AuthenticationService) {
        // reset login status
        AuthenticationService.ClearCredentials();


        $scope.login = function () {
            $scope.dataLoading = true;
            AuthenticationService.Login($scope.username, $scope.password, function (response) {
                if(response.success){
                    AuthenticationService.SetCredentials($scope.username, $scope.password);
                    $location.path('projects');
                    console.log("response: ",response);
                } else {

                    console.log("response: ",response);
                    $scope.loginError = response;
                    $scope.dataLoading = false;
                }
            });
        }
});
