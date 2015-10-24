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

  self.completeTask = function(index) {
    self.tasks[index].complete = true;
  }

  self.className = function(index) {
    if (self.tasks[index].complete) {
      return 'completed'
    }
  }
  // self.addCompleteClass = function() {
  //   $(self).addClass('complete');
  // }
}]);
