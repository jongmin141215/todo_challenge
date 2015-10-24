describe('TodoList', function() {

  var taskInput = element(by.model('listCtrl.taskName'))
  var descriptionInput = element(by.model('listCtrl.taskDescription'))
  var button = element(by.className('save'))
  var tasks = element.all(by.repeater('task in listCtrl.tasks'))
  var checkBox = element(by.id('checkbox0'))
  var checkBox1 = element(by.id('checkbox1'))
  var checkBox2 = element(by.id('checkbox2'))
  var deleteButton = element(by.id('delete0'))
  beforeEach(function() {
    browser.get('http://localhost:8080');
  })
  it('displays a task', function() {

    taskInput.sendKeys('Weekend challenge');
    // descriptionInput.sendKeys('Creating todoList using AngularJS');
    button.click();
    expect(tasks.first().getText()).toEqual('Weekend challenge');
  })

  it('displays multiple tasks', function() {
    taskInput.sendKeys('Weekend challenge');
    // descriptionInput.sendKeys('Creating todoList using AngularJS');
    button.click();
    taskInput.clear();
    taskInput.sendKeys('Calling my mom');
    button.click();
    expect(tasks.getText()).toEqual(['Weekend challenge', 'Calling my mom'])
  })

  it('displays whether the task is finished using checkbox', function() {
    taskInput.sendKeys('Weekend challenge');
    descriptionInput.sendKeys('Creating todoList using AngularJS');
    button.click();
    checkBox.click();
    expect(tasks.getAttribute('class')).toMatch('completed');
  })

  it('can delete a task', function() {
    taskInput.sendKeys('Weekend challenge');
    descriptionInput.sendKeys('Creating todoList using AngularJS');
    button.click();
    deleteButton.click();
    expect(tasks.getText()).toEqual([]);
  })

  it('can only display not-completed tasks', function() {
    taskInput.sendKeys('Weekend challenge');
    button.click();
    taskInput.sendKeys('Calling my mom');
    button.click();
    taskInput.sendKeys('Buying mangos');
    button.click();
    taskInput.sendKeys('Buying bodywash');
    button.click();
    checkBox1.click();
    checkBox2.click();


  })


})
