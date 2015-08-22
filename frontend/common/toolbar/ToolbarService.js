var toolbarModule = angular.module('module.toolbar', []);

toolbarModule.factory('Toolbar', function($state) {

  var gui = require('nw.gui');
  var win = gui.Window.get();
  var file = new gui.Menu();
  var admin = new gui.Menu();

  file.append(new gui.MenuItem({ label: 'Close', click:function(){
    win.close();
  }}));

  admin.append(new gui.MenuItem({ label: 'Manage Projects',click: function() {
        $state.go('project');
  }}));

  admin.append(new gui.MenuItem({ label: 'Manage Users',enabled: false }));
  admin.append(new gui.MenuItem({ type: 'separator' }));
  admin.append(new gui.MenuItem({ label: 'Privacy' }));

  var menubar = new gui.Menu({ type: 'menubar' });

   menubar.append(new gui.MenuItem({ label: 'File', submenu: file}));
   menubar.append(new gui.MenuItem({ label: 'Administration', submenu: admin}));

   win.menu = menubar;


return {

      Window: function() {
        return win;
      }
  }

});
/*

toolbarModule.controller('LoginController', function($scope,$rootScope,$state) {
  var gui = require('nw.gui');
  var win = gui.Window.get();

// Create an empty menu
var menu = new gui.Menu();

// Add some items
menu.append(new gui.MenuItem({ label: 'Item A' }));
menu.append(new gui.MenuItem({ label: 'Item B' }));
menu.append(new gui.MenuItem({ type: 'separator' }));
menu.append(new gui.MenuItem({ label: 'Item C' }));

var menubar = new gui.Menu({ type: 'menubar' });
 menubar.append(new gui.MenuItem({ label: 'File', submenu: menu}));
 win.menu = menubar;


$rootScope.user = {
  loggedin: false,
  object: {}
};

$scope.form = {
  username : 'admin',
  password: '0000'
};

$scope.logIn = function() {

    Auth.getUser($scope.form, function(user){
        if(user!=null){
          $rootScope.user.loggedin = true;
          $rootScope.user.object = user;
          $state.go('user');
        }
    });
};

});
*/
