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
    }
  });

  //grunt.loadNpmTasks('grunt-contrib-copy');
  //grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-http-server');

  // Default task(s).
  grunt.registerTask('default', ['http-server:dev']);
};