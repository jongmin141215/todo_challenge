describe('ToDoListController', function() {

  beforeEach(module('ToDoLists'));
  var ctrl;
  beforeEach(inject(function($controller) {
    window.localStorage.clear()
    ctrl = $controller('ToDoListController');

  }));
  tasks = [
    { 'name': 'Weekend challenge',
      'description': 'Creating todoList using AngularJS',
      'complete': false
    },
    { 'name': 'Calling my mom',
      'description': 'Asking her well-being',
      'complete': false
    }
  ]

  describe('adding tasks', function() {

    beforeEach(function() {
      ctrl.taskName = 'Weekend challenge'
      ctrl.taskDescription = 'Creating todoList using AngularJS'
      ctrl.addTask();
    })

    it('displays a task', function() {
      expect(ctrl.tasks).toEqual([tasks[0]]);
    })

    it('can add more tasks', function() {
      ctrl.taskName = 'Calling my mom'
      ctrl.taskDescription = 'Asking her well-being'
      ctrl.addTask();
      expect(ctrl.tasks).toEqual(tasks)
    })
  })

  it('does not accept an empty task', function() {
    ctrl.addTask();
    expect(ctrl.tasks).toEqual([]);
  })

  it('changes complete status from false to true', function() {
    ctrl.taskName = 'Weekend challenge'
    ctrl.taskDescription = 'Creating todoList using AngularJS'
    ctrl.addTask();
    ctrl.tasks[0].complete = true;
    expect(ctrl.className(ctrl.tasks[0])).toBe('completed');
    ctrl.tasks[0].complete = false;
    expect(ctrl.className(0)).toBe(undefined);
  })

  it('clear input box contents', function() {
    ctrl.taskName = 'Weekend challenge'
    ctrl.taskDescription = 'Creating todoList using AngularJS'
    ctrl.addTask();
    ctrl.clearInputBox();
    expect(ctrl.taskName).toBeNull();
    expect(ctrl.taskDescription).toBeNull();
  })

  it('can delete a task', function() {
    ctrl.taskName = 'Weekend challenge'
    ctrl.taskDescription = 'Creating todoList using AngularJS'
    ctrl.addTask();
    ctrl.deleteTask(0);
    expect(ctrl.tasks).toEqual([]);
  })

  describe('filtering tasks', function() {

    beforeEach(function() {
      ctrl.taskName = 'Weekend challenge'
      ctrl.taskDescription = 'Creating todoList using AngularJS'
      ctrl.addTask();
      ctrl.taskName = 'Calling my mom'
      ctrl.taskDescription = 'Asking her well-being'
      ctrl.addTask();
    })

    it('can display all items', function() {
      expect(ctrl.filterTasks()).toEqual(tasks)
    })

    it('can filter active tasks', function() {
      ctrl.tasks[0].complete = true;
      expect(ctrl.filterTasks(false)).toEqual([tasks[1]])
    })

    it('can filter completed tasks', function() {
      ctrl.tasks[0].complete = true;
      expect(ctrl.filterTasks(true)).toEqual([  { name: 'Weekend challenge',
          description: 'Creating todoList using AngularJS',
          complete: true
        }])
    })
  })

  describe('counting tasks', function() {
    it('returns 1 when there is one task left', function() {
      ctrl.taskName = 'Weekend challenge'
      ctrl.taskDescription = 'Creating todoList using AngularJS'
      ctrl.addTask();
      expect(ctrl.countTasks()).toEqual('1 task left');
    })

    it('returns "0 tasks left" when there are no tasks left', function() {
      expect(ctrl.countTasks()).toEqual('0 tasks left');
    })
  })

});
