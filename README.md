# jekyll-grunt-tasks
Shared repo of Grunt tasks for use with building and deploying Jekyll sites.

### Usage

Assuming node is installed:

 - Clone or download the repo & `cd` into the cloned folder
 - run `npm install`
 - Go to the project that you want to use the grunt tasks on
 - run `npm install -D load-grunt-config`
 - Define a Gruntfile.js similar to:
 
```
module.exports = function(grunt) {
  var path = require('path');
  // The path where you cloned this repo relative to the poject you are working in
  var gruntTasksPath = '../grunt-tasks/';

  require('load-grunt-config')(grunt, {
    configPath: path.join(process.cwd(), gruntTasksPath + '/tasks'),

    loadGruntTasks: {
      config: require(gruntTasksPath + '/package.json'),
    },

    data: {
      sources: {
        javascript: [
          ...
        ],
        sass: [
          ...
        ],
        css: [
          ...
        ],
        fonts: [
          ...
        ]
      }
    }
  });
};
```

 - Run `grunt <<task>>` from your project where `<<task>>` is any item that is defined in [`tasks/aliases.yaml`](https://github.com/adampetrie/jekyll-grunt-tasks/blob/master/tasks/aliases.yaml).
