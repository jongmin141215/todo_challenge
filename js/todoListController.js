toDoList.controller('ToDoListController', [function() {
  var self = this;
  self.tasks = []

  self.getTasks = function() {
    self.addTask(self.taskName, self.taskDescription);
    return self.tasks
  }

  self.addTask = function(taskName, taskDescription) {
    self.tasks.push({
      name: taskName,
      description: taskDescription,
      complete: false
    })
  }

  self.className = function(index) {
    if (self.tasks[index].complete) {
      return 'completed'
    }
  }

  self.clearInputBox = function() {
    self.taskName = null;
    self.taskDescription = null;
  }

  self.deleteTask = function(index) {
    self.tasks.splice(index, 1);
  }

  self.filtered = self.tasks;

  self.filterTasks = function(filter) {
    if(filter === undefined) {
      self.filtered = self.tasks;
      return self.filtered
    }
    var arr = [];
    for(var i= 0; i < self.tasks.length; i++) {
      if (self.tasks[i].complete == filter) {
        arr.push(self.tasks[i]);
      }
    }
    return self.filtered = arr;
  }

}]);
