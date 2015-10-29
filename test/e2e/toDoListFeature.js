describe('TodoList', function() {

  var taskInput = element(by.model('listCtrl.taskName'))
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
    browser.executeScript('window.localStorage.clear();');
    taskInput.sendKeys('Weekend challenge');
    button.click();
  })

  it('displays a task', function() {
    expect(tasks.first().getText()).toEqual('Weekend challenge');
    browser.executeScript('window.localStorage.clear();');
  })

  it('displays multiple tasks', function() {
    taskInput.sendKeys('Calling my mom');
    button.click();
    expect(tasks.getText()).toEqual(['Weekend challenge', 'Calling my mom'])
    browser.executeScript('window.localStorage.clear();');
  })

  it('displays whether the task is finished using checkbox', function() {
    checkBox.click();
    expect(tasks.getAttribute('class')).toMatch('completed');
    browser.executeScript('window.localStorage.clear();');
  })

  it('can delete a task', function() {
    deleteButton.click();
    expect(tasks.getText()).toEqual([]);
    browser.executeScript('window.localStorage.clear();');
  })

  it('filteres tasks', function() {
    taskInput.sendKeys('Calling my mom');
    button.click();
    taskInput.sendKeys('Buying mangos');
    button.click();
    taskInput.sendKeys('Buying bodywash');
    button.click();
    checkBox1.click();
    checkBox2.click();
    allButton.click();
    expect(tasks.getText()).toEqual(['Weekend challenge', 'Calling my mom', 'Buying mangos','Buying bodywash'])
    activeButton.click();
    expect(tasks.getText()).toEqual(['Weekend challenge', 'Buying bodywash'])
    completedButton.click();
    expect(tasks.getText()).toEqual(['Calling my mom', 'Buying mangos'])
    browser.executeScript('window.localStorage.clear();');
  })

  describe('deleting tasks when filtered', function() {
    beforeEach(function() {
      taskInput.sendKeys('Calling my mom');
      button.click();
      taskInput.sendKeys('Buying mangos');
      button.click();
      taskInput.sendKeys('Buying bodywash');
      button.click();
      checkBox1.click();
      checkBox2.click();
    })

    afterEach(function() {
      browser.executeScript('window.localStorage.clear();');
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
    afterEach(function() {
      browser.executeScript('window.localStorage.clear();');
    })

    it('displays 1 when there is one task remaining', function() {
      expect(remainingTasks.getText()).toEqual('1 task left')
    })

    it('displays "tasks" when remaning task is not 1', function() {
      deleteButton.click();
      expect(remainingTasks.getText()).toEqual('0 tasks left');
    })

    it('does not accept an empty task', function() {
      deleteButton.click();
      button.click();
      expect(remainingTasks.getText()).toEqual('0 tasks left');
    })
  })
})
