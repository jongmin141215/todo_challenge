toDoList.controller('ToDoListController', [function() {
  var self = this;
  self.tasks = []
  self.getTasks = function() {
    self.addTask();
    return self.tasks

  }

  self.addTask = function() {
    self.tasks.push({
      name: self.taskName,
      description: self.taskDescription
    })
  }
}]);
