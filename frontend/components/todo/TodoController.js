
var todoModule = angular.module('module.todo', []);

todoModule.controller('todoController', function($scope,$rootScope,todoService) {

  $scope.todos  = [];

  todoService.getAlltodos(function(lvs) {
    $scope.todos = lvs;
    $scope.$apply();
  });
$scope.confirmDeletion = function(todo) {
  $scope.toDeletetodo = todo;
}

$scope.upsert = function(todo){
  todoService.upserttodo(todo,function(lv) {
    console.log('todo saved/updated' + lv);
  });
};

$scope.delete = function (todo) {
  todoService.removetodo(todo,function(nbrRM) {
    if(nbrRM==1){
        todoService.getAlltodos(function(lvs) {
          $scope.todos = lvs;
          $scope.$apply();
        });
    }else {
          $scope.todos.pop();
          $scope.$apply();
    }
  });
};

$scope.deleteLastLine = function () {
 $scope.todos.pop();
};

$scope.insertNewLine = function() {
    $scope.addedtodo = {
      _id: '',
      title : '',
      description: '',
      dueDate :'',
      gitCommit :'',
      priority: '',
      isFinished : false
    };

   $scope.todos.push($scope.addedtodo);
};

$scope.loadtodo = function(todo) {
  $scope.clickedtodo = todo;
};

});
