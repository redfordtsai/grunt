/*global config:true, task:true*/
config.init({
  meta: {
    name: 'grunt',
    version: '0.1.0',
    description: 'A command line build tool for JavaScript projects..',
    homepage: 'http://github.com/cowboy/grunt',
    author: '"Cowboy" Ben Alman',
    license: ['MIT', 'GPL'],
    copyright: 'Copyright (c) 2011 "Cowboy" Ben Alman',
    repository: 'git://github.com/cowboy/grunt.git'
  },
  concat: {},
  min: {},
  test: {
    files: ['test/**/*.js']
  },
  lint: {
    files: ['grunt.js', 'lib/**/*.js', 'test/**/*.js', 'template/**/*.js']
  },
  watch: {
    files: '<config:lint.files>',
    tasks: 'default'
  },
  jshint: {
    options: {
      curly: true,
      eqeqeq: true,
      immed: true,
      latedef: true,
      newcap: true,
      noarg: true,
      sub: true,
      undef: true,
      eqnull: true,
      node: true
    },
    globals: {
      setTimeout: true, // temp hack for https://github.com/jshint/jshint/issues/292
      grequire: true,
      urequire: true,
      _: true,
      task: true,
      file: true,
      fail: true,
      config: true,
      option: true,
      log: true,
      verbose: true
    }
  },
  uglify: {}
});

// Default task.
task.registerTask('default', 'lint:files test:files');
