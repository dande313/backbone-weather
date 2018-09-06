module.exports = {
    build_css: {
        files: {
          'build/css/main.less': ['src/css/main.less', 'src/css/normalize.min.css'],  
        }
    },
    build_js_master: {
        files: {
          'build/js/scripts.js': ['src/js/views/*.js', 'src/js/models/*.js', 'src/js/collections/*.js']  
        }
    }

}