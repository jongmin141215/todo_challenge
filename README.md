# Todo Challenge

This is the 8th weekend challenge, which is to create a todo list application using AngularJS. You can add & delete your tasks, and they are stored in your browser's local storage!

![Image of Homepage](images/homepage.png)

Demo
----
Visit http://todo-list.s3-website-us-west-2.amazonaws.com/

Getting Started
-----
```
$ git clone git@github.com:jongmin141215/todo_challenge.git
$ cd todo_challenge
$ npm install
$ bower install
$ npm start
```

Visit http://localhost:8080


Running tests
------
To run Karma:
```
$ npm test
```
To run protractor
```
$ webdriver-manager start
$ npm start
$ npm run-script pro
```

Features
-----
* Users can add/delete tasks.
* Users can filter tasks on completion status.
* Tasks are safely stored in your browser's local storage.

Technologies
-----
* Frontend Framework: AngularJS
* Testing: Jasmine, Protractor, Karma
* Hosting: Amazon S3
* Persistence: Local storage
* Styling: Bootstrap
