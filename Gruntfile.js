module.exports = function(grunt) {

  // TODO : 
  //  - Add Compass/Less setup

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    'http-server': {
        'dev': {
            // the server root directory
            root: 'www',

            port: 8282,
            host: "127.0.0.1",
            showDir : true,
            autoIndex: true,
            defaultExt: "html",

            // run in parallel with other tasks
            runInBackground: false
        }
    },
    jshint: {
      all: ['Gruntfile.js', 'www/js/*.js']
    }
  });

  //grunt.loadNpmTasks('grunt-contrib-copy');
  //grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-http-server');

  // Default task(s).
  grunt.registerTask('default', ['jshint','http-server:dev']);
};