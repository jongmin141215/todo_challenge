toDoList.controller('ToDoListController', [function() {
  var self = this;
  self.getTasks = function() {
    return self.tasks = [{
      name: self.taskName
      // description: self.taskDescription
    }]
  }
}]);
