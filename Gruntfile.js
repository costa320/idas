/** @format */
var path = require('path');

module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    bump: {
      options: {
        files: ['package.json'],
        updateConfigs: [],
        commit: false, // dont commit
        commitMessage: 'Release v%VERSION%',
        commitFiles: ['package.json'],
        createTag: true,
        tagName: 'v%VERSION%',
        tagMessage: 'Version %VERSION%',
        push: false, // dont push
        pushTo: '',
        gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d',
        globalReplace: false,
        prereleaseName: false,
        metadata: '',
        regExp: false,
      },
    },
    move: {},
    copy: {
      // includes files within path and its sub-directories
      buildToScripts: { nonull: true, expand: true, cwd: 'build', src: ['**'], dest: '../Scripts/react-build/' },
    },
    clean: {
      /* removes all files inside Scripts/react-build folder */
      dist: [path.join(__dirname, './es/*')],
      Scripts_uselessFiles: [
        '../Scripts/react-build/index.html',
        '../Scripts/react-build/webpackStats.json',
        '../Scripts/react-build/**/*.LICENSE.txt',
        '../Scripts/react-build/**/*.map',
        '../Scripts/react-build/*.css',
      ].map((pathName) => path.join(__dirname, pathName)),
    },
    rename: {},
  });

  /* loading external module */
  grunt.loadNpmTasks('grunt-bump');
  /*   grunt.loadNpmTasks("grunt-move");*/
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  /* grunt.loadNpmTasks("grunt-contrib-rename");  */
  // Default task(s).
  /*   grunt.registerTask("default", ["move:distVersionUpdate"]); */
};

/* grunt bump
  >> Version bumped to 0.0.2
  
  grunt bump:patch
  >> Version bumped to 0.0.3
  
  grunt bump:minor
  >> Version bumped to 0.1.0
  
  grunt bump
  >> Version bumped to 0.1.1
  
  grunt bump:major
  >> Version bumped to 1.0.0 */
