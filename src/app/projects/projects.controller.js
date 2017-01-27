'use strict';

// var projects;
angular.module('tangentLoginProject')
  .controller('ProjectsCtrl', ['$scope','$http','$localStorage','$state', function($scope,$http,$localStorage,$state) {

  var vm = this;
  vm.projects = [];

        $http({
          method: 'GET',
            url: 'http://projectservice.staging.tangentmicroservices.com/api/v1/projects/',
            headers: {
                      'Authorization': 'Token '+ $localStorage.getObject('token'),//'Token b7ec34e136bb6d28a4421e422e852b99cc834d17',
                      'Content-type': 'application/json'
                     }
        })
        .then(function successCallback(response) {
            // this callback will be called asynchronously when the response is available
              console.log("success, ",response);
              $scope.projects = response.data;

          }, function errorCallback(response) {
            $state.go('login');
            console.log("failure, ",response);
            // called asynchronously if an error occurs or server returns response with an error status.
          });

          $scope.deleteProject = function() {
            $http.delete({
                url: 'http://projectservice.staging.tangentmicroservices.com/api/v1/projects/id/',
                 headers: {
                          'Authorization': 'Token '+ $localStorage.getObject('token'),
                          'Content-type': 'application/json'
                         }
            })
            .then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                  console.log("success, ",response);

              }, function errorCallback(response) {

                console.log("failure, ",response);
                // called asynchronously if an error occurs
                // or server returns response with an error status.
              });
          }
}]);
