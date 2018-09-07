module.exports = {
    fix_html: {
        src: ['src/index.html'],
        dest: 'build/',
        replacements: [{
            //We don't want Index.html to reference css separately, so we combined them.
            from: '<link rel="stylesheet" href="css/normalize.min.css">',
            to: ''
        }]
    }
}