'use strict';

angular.module('tangentLoginProject')

.controller('LoginController',
    ['$scope', '$rootScope', '$location', 'AuthenticationService',
    function ($scope, $http,$rootScope, $location, AuthenticationService,$state,$localStorage) {
        // reset login status
        AuthenticationService.ClearCredentials();

        $scope.login = function () {
            $scope.dataLoading = true;
            AuthenticationService.Login($scope.username, $scope.password, function (response) {
                If (response.success){
                    AuthenticationService.SetCredentials($scope.username, $scope.password);
                    $state.go('projects');
                } else {
                    $scope.error = response.message;
                    $scope.dataLoading = false;
                }
            });
        };

    }]);
