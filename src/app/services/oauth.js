'use strict';

angular.module('starter')
  .service('OAuth', function($window, LoopBackAuth, KBUser, UserIdentity, $state, $ionicLoading, LoopBackResource, $ionicPopup) {
    this.login = function(service) {
      // var win = $window.open('http://localhost:3000/auth/' + service, '_blank', 'location=no,clearsessioncache=yes,clearcache=yes');
      var win = $window.open('http://karanbeef.herokuapp.com/auth/' + service, '_blank', 'location=no,clearsessioncache=yes,clearcache=yes,hidden=yes');

      var setData = function(res) {
        LoopBackAuth.setUser(res.access_token, res.userId, {});

        var user = KBUser.getCurrent(function(data) {
          LoopBackAuth.rememberMe = true;
          LoopBackAuth.setUser(res.access_token, res.userId, data);
          LoopBackAuth.save();

          UserIdentity.findOne({
            filter: {
              where: {
                userId: res.userId
              }
            }
          }, function(identity) {
            ga('set', '&uid', res.userId);
            ga('send', 'event', 'app register', 'OAuth register completed');

            user.fullName = identity.profile.displayName;
            user.provider = 'OAuth';
            user.$save();

            $ionicLoading.hide();
            $state.go('dashboard');
          });
        });

        win.close();
      };

      win.addEventListener('loadstop', function(event) {
        win.show();
      });

      win.addEventListener('loadstart', function(event) {
        if((event.url).indexOf('auth/data') !== -1) {
          var url = decodeURIComponent(event.url);
          var string = url.match(/{(.*)}/)[0];
          var data = JSON.parse(string);

          setData(data);
        }
      });

      win.addEventListener('exit', function() {
        $ionicLoading.hide();
      });

      win.addEventListener('loaderror', function(event) {
        $ionicLoading.hide();

        $ionicPopup.alert({
          title: 'Error!',
          template: event.message
        });
      });

      $window.addEventListener('message', function receiveMessage(event) {
        if (typeof(event.data) === 'object') {
          setData(event.data);
        }
      }, false);
    };
  });
