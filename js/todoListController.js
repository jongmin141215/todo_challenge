toDoList.controller('ToDoListController', [function() {
  var self = this;
  self.tasks = []
  self.filtered = self.tasks;
  self.getTasks = function() {
    self.addTask(self.taskName, self.taskDescription);
    return self.tasks
  }

  self.addTask = function(taskName, taskDescription) {
    if (taskName) {
      self.tasks.push({
        name: taskName,
        description: taskDescription,
        complete: false
      })
    }
  }

  self.className = function(task) {
    if (task.complete) {
      return 'completed'
    }
  }

  self.clearInputBox = function() {
    self.taskName = null;
    self.taskDescription = null;
  }

  self.deleteTask = function(task) {
    var index = self.tasks.indexOf(task);
    var findex = self.filtered.indexOf(task);
    if (self.tasks === self.filtered) {
      self.tasks.splice(index, 1);
    } else {
      self.tasks.splice(index, 1);
      self.filtered.splice(findex, 1);
    }
  }

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

  self.countTasks = function() {
    arr = [];
    for(var i=0; i < self.tasks.length; i++) {
      if (!self.tasks[i].complete) {
        arr.push(self.tasks[i])
      }
    }
    if (arr.length === 1) {
      return arr.length + ' task left';
    } else {
      return arr.length + ' tasks left';
    }
  }


}]);
