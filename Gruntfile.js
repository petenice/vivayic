module.exports = function(grunt){

    grunt.initConfig({
        less: {
		    development: {
				options: {
					  sourceMap: true,
            sourceMapFilename: 'web/css/style.css.map',
            sourceMapURL: 'http://local-new.vivayic.com/css/style.css.map'
					       },
	          files : {
	                   'web/css/style.css' : 'web/less/style.less'
	                  }
			          }
        },

	    watch: {
	      files: ['web/less/*.less'],
	      tasks: ['less']
	    }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['less','watch']);
}
