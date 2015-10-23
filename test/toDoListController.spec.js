describe('ToDoListController', function() {

  beforeEach(module('ToDoLists'));
  var ctrl;
  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoListController');
  }));

  it('initializes with an empty todo list', function() {
    expect(ctrl.task).toBeUndefined();
  })

  it('displays a task', function() {
    ctrl.taskName = 'Weekend challenge'
    ctrl.taskDescription = 'Creating todoList using AngularJS'

    var task = { name: 'Weekend challenge',
      // description: 'Creating todoList using AngularJS'
    }

    expect(ctrl.getTasks()[0]).toEqual(task);
  })
});
