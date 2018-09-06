module.exports = {
    copy_files: {
          files: [
            // all the lib files
            {expand: true, flatten: true, src: ['src/js/lib/*'], dest: 'build/js/lib/'},
      
            // App & Main & Index
            {expand: true, flatten: true, src: ['src/index.html'], dest: 'build/'},
            {expand: true, flatten: true, src: ['src/js/app.js'], dest: 'build/js/'},
            {expand: true, flatten: true, src: ['src/js/main-prod.js'], dest: 'build/js/', 
                //function to rename file
                rename: function(dest, src) {
                    return dest + src.replace('-prod','');
                  }
            },
            // Images
            {expand: true, cwd: 'src', src: ['img/**'], dest: 'build/'},

            //Templates
            {expand: true, cwd: 'src', src: ['js/views/templates/*'], dest: 'build/'},
          ],
    }
    
}