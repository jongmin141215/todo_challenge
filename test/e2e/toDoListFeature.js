describe('TodoList', function() {


  var taskInput = element(by.model('listCtrl.taskName'))
  // var descriptionInput = element(by.model('listCtrl.taskDescription'))
  var button = element(by.className('btn'))
  var tasks = element.all(by.repeater('task in listCtrl.tasks'))
  beforeEach(function() {
    browser.get('http://localhost:8080');
  })
  it('displays a task', function() {

    taskInput.sendKeys('Weekend challenge');
    // descriptionInput.sendKeys('Creating todoList using AngularJS');
    button.click();


    expect(tasks.first().getText()).toEqual('Weekend challenge');
  })

  it('displays more than one tasks', function() {
    taskInput.sendKeys('Weekend challenge');
    // descriptionInput.sendKeys('Creating todoList using AngularJS');
    button.click();
    taskInput.clear();
    taskInput.sendKeys('Calling my mom');
    button.click();
    expect(tasks.getText()).toEqual(['Weekend challenge', 'Calling my mom'])

  })
})
