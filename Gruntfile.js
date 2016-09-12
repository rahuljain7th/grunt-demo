module.exports = function(grunt) {

//looks into node_modeuls folder  to load grunt task which is needed
require('load-grunt-tasks')(grunt);


grunt.initConfig({
   sass:{
        dist: {
            src:'src/sass/style.scss',
            dest:'dist/css/style.css'

            }
        },
    concat : {
         dist : {
            src:'src/js/*.js',
            dest:'dist/js/app.js'
         }
    }
});
grunt.registerTask('default',['sass','concat']);
}

