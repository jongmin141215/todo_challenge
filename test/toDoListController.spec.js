describe('ToDoListController', function() {

  beforeEach(module('ToDoLists'));
  var ctrl;
  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoListController');
  }));

  var task = { name: 'Weekend challenge',
    description: 'Creating todoList using AngularJS',
    complete: false
  }
  var task2 = { name: 'Calling my mom',
    description: 'Asking her well-being',
    complete: false
  }

  it('initializes with an empty todo list', function() {
    expect(ctrl.task).toBeUndefined();
  })

  it('displays a task', function() {
    ctrl.taskName = 'Weekend challenge'
    ctrl.taskDescription = 'Creating todoList using AngularJS'
    expect(ctrl.getTasks()).toEqual([task]);
  })

  it('can add more tasks', function() {
    ctrl.taskName = 'Weekend challenge';
    ctrl.taskDescription = 'Creating todoList using AngularJS';
    ctrl.getTasks();
    ctrl.taskName = 'Calling my mom';
    ctrl.taskDescription = 'Asking her well-being';
    ctrl.getTasks();
    expect(ctrl.tasks).toEqual([task, task2])
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
});
