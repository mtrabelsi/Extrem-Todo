
var projectModule = angular.module('module.project', []);

projectModule.controller('projectController', function($scope,$rootScope,projectService) {

  $scope.projects  = [];

  projectService.getAllprojects(function(lvs) {
    $scope.projects = lvs;
    $scope.$apply();
  });
$scope.confirmDeletion = function(project) {
  $scope.toDeleteproject = project;
}

$scope.upsert = function(project){
  projectService.upsertproject(project,function(lv) {
    console.log('project saved/updated' + lv);
  });
};

$scope.delete = function (project) {
  projectService.removeproject(project,function(nbrRM) {
    if(nbrRM==1){
        projectService.getAllprojects(function(lvs) {
          $scope.projects = lvs;
          $scope.$apply();
        });
    }else {
          $scope.projects.pop();
          $scope.$apply();
    }
  });
};

$scope.deleteLastLine = function () {
 $scope.projects.pop();
};

$scope.insertNewLine = function() {
    $scope.addedproject = {
      _id: '',
      name : '',
      description: '',
      dueDate :'',
      gitHost: '',
      gitUsername : '',
      gitProjectName : '',
      isFinished : false
    };

   $scope.projects.push($scope.addedproject);
};

$scope.loadproject = function(project) {
  $scope.clickedproject = project;
};

});
