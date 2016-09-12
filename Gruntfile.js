module.exports = function(grunt) {

//looks into node_modeuls folder  to load grunt task which is needed
require('load-grunt-tasks')(grunt);

var config = grunt.file.readYAML('Gruntfile.yml');
grunt.initConfig({
   sass:{
        dist: {
            src:config.scssDir+'style.scss',
            dest:config.cssDir+'style.css'

            }
        },
    concat : {
         dist : {
            src:config.jsSrcDir+'*.js',
            dest:config.jsConcatDir+'app.js'
         }
     },
    jshint : {
        all:['Gruntfile.js',config.jsSrcDir+"*.js"]
    }

});
grunt.registerTask('default',[
'jshint',
    'sass','concat']);
};

