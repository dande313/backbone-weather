module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      uglify: {
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
      compress: {
          src: 'src/**/*.js',
          dest: 'build/<%= pkg.name %>.min.js'
        }
      },
      concat: require('./.grunt/concat'),
      copy: require('./.grunt/copy')
    });
  
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
  
    // Default task(s).
    grunt.registerTask('default', ['copy:copy_files','concat:build_css' , 'concat:build_js_master']);
  
  };