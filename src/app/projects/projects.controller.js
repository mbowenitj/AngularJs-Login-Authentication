'use strict';

// var projects;
angular.module('tangentLoginProject')
  .controller('ProjectsCtrl', ['$scope','$http', function($scope,$http) {

    $scope.projects = [];

        $http({
          method: 'GET',
            url: 'http://projectservice.staging.tangentmicroservices.com/api-explorer/#!/api/Project_0',
            headers: {
                      'Authorization': 'Token b7ec34e136bb6d28a4421e422e852b99cc834d17'
                     }
        }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available

              console.log("success, ",response);
              $scope.projects = response;


          }, function errorCallback(response) {


            console.log("failure, ",response);
            // called asynchronously if an error occurs
            // or server returns response with an error status.
          });

}]);



      //  $http({
      //        method:'GET',
      //          url: 'http://projectservice.staging.tangentmicroservices.com/api-explorer/#!/api/Task',
      //            headers: {
      //              'Authorization': 'Token b7ec34e136bb6d28a4421e422e852b99cc834d17'
      //            }
      //    }).success(function (err) {
      //        console.log(err);
       //
      //    });
      //  }]);

      //  $scope.selectedOutlet = '';

      //  $scope.updateOutlet = function() {
      //    console.log('outlet selection:', $scope.selectedOutlet);
      //    if ($scope.selectedOutlet == null) {
      //      $scope.selectedOutlet = '';
      //    }
      //  }
      //
      //  $scope.updateProject = function() {
      //   console.log('region selection:', $scope.selectedProject);
      //   if ($scope.selectedProject == null) {
      //     $scope.selectedProject = '';
      //     $scope.selectedOutlet = '';
      //   }
      // }
      //
      //   $scope.resetFields = function() {
      //   $scope.dateStart = {};
      //   $scope.dateEnd = {};
      //   //$window.location.reload();
      //
      //   $scope.selectedOutlet = '';
      //   $scope.selectedRegion = '';
      //   $scope.users = angular.copy(usersFromFB);
      // }
/*
.controller('ProjectsCtrl', function($scope, $state, $rootScope, $timeout, $interval, $ionicLoading, $ionicViewService, Recipe, projects, ac, utils) {

 $scope.showWelcomeMessage = false;

  var projects;

  $scope.newRecipeCount = 0;

  $ionicLoading.show({template: 'Fetching projects for you...'});

  projects.find(function(response){
    console.log(response);
    projects = _.shuffle(response);
    // occasions = occasions.slice(0,10);

    _.forEach(projects, function(projects){
      projects.desc = randomDescription(projects);
    });

    $scope.projects = projects;
    $ionicLoading.hide();

    console.log($scope.projects);

  }, function(error){
    $ionicLoading.hide();
    console.log(error);
  })

  var countFilter = {
    where: {
      dateAdded: {gt: $rootScope.usage.date}
    }
  }

  Recipe.count(countFilter, function(response){
    console.log(response);
    $scope.newRecipeCount = response.count;
  });

  function randomDescription(projects){
    if(occasion.descriptions){
      return desc = projects.descriptions[utils.randomInt(0, projects.descriptions.length-1)];
    }
  }

})
*/
