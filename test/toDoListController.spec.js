describe('ToDoListController', function() {

  beforeEach(module('ToDoLists'));
  var ctrl;
  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoListController');
  }));

  tasks = [
    { name: 'Weekend challenge',
      description: 'Creating todoList using AngularJS',
      complete: false
    },
    { name: 'Calling my mom',
      description: 'Asking her well-being',
      complete: false
    }
  ]

  it('displays a task', function() {
    ctrl.taskName = 'Weekend challenge'
    ctrl.taskDescription = 'Creating todoList using AngularJS'
    expect(ctrl.getTasks()).toEqual([tasks[0]]);
  })

  it('can add more tasks', function() {
    ctrl.taskName = 'Weekend challenge';
    ctrl.taskDescription = 'Creating todoList using AngularJS';
    ctrl.getTasks();
    ctrl.taskName = 'Calling my mom';
    ctrl.taskDescription = 'Asking her well-being';
    ctrl.getTasks();
    expect(ctrl.tasks).toEqual(tasks)
  })

  it('changes complete status from false to true', function() {
    ctrl.taskName = 'Weekend challenge'
    ctrl.taskDescription = 'Creating todoList using AngularJS'
    ctrl.addTask();
    ctrl.tasks[0].complete = true;
    expect(ctrl.className(0)).toBe('completed');
    ctrl.tasks[0].complete = false;
    expect(ctrl.className(0)).toBe(undefined);
  })

  it('clear input box contents', function() {
    ctrl.taskName = 'Weekend challenge';
    ctrl.taskDescription = 'Creating todoList using AngularJS';
    ctrl.clearInputBox();
    expect(ctrl.taskName).toBeNull();
    expect(ctrl.taskDescription).toBeNull();
  })

  it('can delete a task', function() {
    ctrl.taskName = 'Weekend challenge';
    ctrl.taskDescription = 'Creating todoList using AngularJS';
    ctrl.getTasks();
    ctrl.deleteTask(0);
    expect(ctrl.tasks).toEqual([]);
  })

  it('can display all items', function() {
    ctrl.taskName = 'Weekend challenge';
    ctrl.taskDescription = 'Creating todoList using AngularJS';
    ctrl.getTasks();
    ctrl.taskName = 'Calling my mom';
    ctrl.taskDescription = 'Asking her well-being';
    ctrl.getTasks();
    expect(ctrl.filterTasks()).toEqual(tasks)
  })

  it('can filter active tasks', function() {
    ctrl.taskName = 'Weekend challenge';
    ctrl.taskDescription = 'Creating todoList using AngularJS';
    ctrl.getTasks();
    ctrl.taskName = 'Calling my mom';
    ctrl.taskDescription = 'Asking her well-being';
    ctrl.getTasks();
    ctrl.tasks[0].complete = true;
    expect(ctrl.filterTasks(false)).toEqual([tasks[1]])
  })

  it('can filter completed tasks', function() {
    ctrl.taskName = 'Weekend challenge';
    ctrl.taskDescription = 'Creating todoList using AngularJS';
    ctrl.getTasks();
    ctrl.taskName = 'Calling my mom';
    ctrl.taskDescription = 'Asking her well-being';
    ctrl.getTasks();
    ctrl.tasks[0].complete = true;
    expect(ctrl.filterTasks(true)).toEqual([  { name: 'Weekend challenge',
        description: 'Creating todoList using AngularJS',
        complete: true
      }])
  })
});
