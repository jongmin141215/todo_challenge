describe('TodoList', function() {

  var taskInput = element(by.model('listCtrl.taskName'))
  var descriptionInput = element(by.model('listCtrl.taskDescription'))
  var button = element(by.className('save'))
  var tasks = element.all(by.repeater('task in listCtrl.filtered'))
  var checkBox = element(by.id('checkbox0'))
  var checkBox1 = element(by.id('checkbox1'))
  var checkBox2 = element(by.id('checkbox2'))
  var deleteButton = element(by.id('delete0'))
  var deleteButton1 = element(by.id('delete1'))
  var deleteButton2 = element(by.id('delete2'))
  var deleteButton3 = element(by.id('delete3'))
  var activeButton = element(by.id('active'))
  var completedButton = element(by.id('completed'))
  var allButton = element(by.id('all'))
  var remainingTasks = element(by.id('remainingTasks'))
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

  describe('filtering tasks', function() {
    beforeEach(function() {
      browser.get('http://localhost:8080');
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

    it('displays all tasks', function() {
      allButton.click();
      expect(tasks.getText()).toEqual(['Weekend challenge', 'Calling my mom', 'Buying mangos','Buying bodywash'])
    })

    it('can only display not-completed tasks', function() {
      activeButton.click();
      expect(tasks.getText()).toEqual(['Weekend challenge', 'Buying bodywash'])
    })

    it('can only display completed tasks', function() {
      completedButton.click();
      expect(tasks.getText()).toEqual(['Calling my mom', 'Buying mangos'])
    })
  })

  describe('deleting tasks when filtered', function() {
    beforeEach(function() {
      browser.get('http://localhost:8080');
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

    it('deletes specific tasks when there are no filters', function() {
      deleteButton3.click();
      deleteButton2.click();
      expect(tasks.getText()).toEqual(['Weekend challenge', 'Calling my mom']);
    })

    it('deletes specific tasks when there is the active filter', function() {
      activeButton.click()
      deleteButton1.click();
      expect(tasks.getText()).toEqual(['Weekend challenge']);
    })
  })

  describe('displaying the number of active tasks', function() {
    beforeEach(function() {
      browser.get('http://localhost:8080');
    })

    it('displays 1 when there is one task remaining', function() {
      taskInput.sendKeys('Weekend challenge');
      button.click();
      expect(remainingTasks.getText()).toEqual('1 task left')
    })

    it('displays "tasks" when remaning task is not 1', function() {
      expect(remainingTasks.getText()).toEqual('0 tasks left');
    })
  })
})
