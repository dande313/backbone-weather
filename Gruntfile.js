module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      babel: require('./.grunt/babel'),
      uglify: require('./.grunt/uglify'),
      concat: require('./.grunt/concat'),
      copy: require('./.grunt/copy'),
      clean: require('./.grunt/clean'),
      replace: require('./.grunt/textreplace')
    });
  
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-babel')
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-text-replace');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');


    // Default task(s).
    grunt.registerTask('default', ['copy:copy_files', 'replace:fix_html','concat:build_css' , 'concat:build_js_master', 'babel:babelify_js_master', 'uglify:uglify_js_master', 'clean:clean_tmp']);
  
  };