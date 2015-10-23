describe('TodoList', function() {

  it('displays a task', function() {
    browser.get('http://localhost:8080');
    var taskInput = element(by.model('listCtrl.taskName'))
    // var descriptionInput = element(by.model('listCtrl.taskDescription'))
    var button = element(by.className('btn'))
    taskInput.sendKeys('Weekend challenge');
    // descriptionInput.sendKeys('Creating todoList using AngularJS');
    button.click();

    var tasks = element.all(by.repeater('task in listCtrl.tasks'))

    expect(tasks.first().getText()).toEqual('Weekend challenge');
  })
})
