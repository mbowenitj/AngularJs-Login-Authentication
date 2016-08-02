(function() {
  'use strict';

  angular
    .module('comfortCaptivePortal')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $firebaseArray, $state) {

    $scope.submit = function() {
      console.log('submitted form');

      $scope.users.$add({
        name: $scope.name,
        surname: $scope.surname,
        email: $scope.email,
        phone: $scope.phone
      }).then(function(ref) {
        console.log('added record:', ref);
        $state.go('submitted');
      });

    }

    var config = {
      apiKey: "AIzaSyDz23vm3iu511XbIfld6H7B8qa3-UJJiYw",
      authDomain: "comfort-wifi-82123.firebaseapp.com",
      databaseURL: "https://comfort-wifi-82123.firebaseio.com",
      storageBucket: "comfort-wifi-82123.appspot.com",
    };
    firebase.initializeApp(config);

    var fb = firebase.database().ref();

    $scope.users = $firebaseArray(fb);


  }
})();
