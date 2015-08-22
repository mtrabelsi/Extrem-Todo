var userModule = angular.module('module.user', []);

userModule.controller('userController', function($scope, Toolbar ,userService) {
    Toolbar.Window().maximize();

    $scope.users = [];
    $scope.roles = ['Project Manager', 'Engineer', 'Intern'];

    // LevelService.getAllLevels(function(lvs) {
    //     $scope.levels = lvs;
    //     $scope.$apply();
    // });

    userService.getAllusers(function(sts) {
        $scope.users = sts;
        $scope.$apply();
    });
    $scope.confirmDeletion = function(user) {
        $scope.toDeleteuser = user;
    }

    $scope.upsert = function(user) {

        userService.upsertuser(user, function(st) {
            console.log('user added');
        });

    };
    $scope.update = function(user) {

        userService.upsertuser(user, function(st) {
            console.log('user added');
        });

    };

    $scope.delete = function(user) {

        userService.removeuser(user, function(nbrRM) {
            if (nbrRM == 1) {
                userService.getAllusers(function(lvs) {
                    $scope.users = lvs;
                    $scope.$apply();
                });
            } else {
                $scope.users.pop();
                $scope.$apply();
            }
        });
    };

    $scope.deleteLastLine = function() {
        $scope.users.pop();
    };

    $scope.insertNewLine = function() {
        $scope.addeduser = {
            username: '',
            password: '',
            email: '',
            role :''
        };

        $scope.users.push($scope.addeduser);
    };

    $scope.loadUser = function(user) {
        $scope.clickeduser = user;
    };

});
