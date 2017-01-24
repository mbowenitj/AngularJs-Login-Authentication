'use strict';

var projects;
angular.module('tangentLoginProject')

.controller('ProjectsController',
    ['$scope','AuthenticationService'
    function ($scope,AuthenticationService,$http) {

      $http({
          method:'GET',
            url: 'http://projectservice.staging.tangentmicroservices.com/api-explorer/#!/api/Project',
              headers: {
                'Authorization': 'Token b7ec34e136bb6d28a4421e422e852b99cc834d17'
              }
        }).success(function (data, status, headers, config) {
          $scope.data = projects;
          console.log(response);
       })

       $http({
             method:'GET',
               url: 'http://projectservice.staging.tangentmicroservices.com/api-explorer/#!/api/Task',
                 headers: {
                   'Authorization': 'Token b7ec34e136bb6d28a4421e422e852b99cc834d17'
                 }
         }).success(function (data, status, headers, config) {
             console.log(response);

         }])
       };
