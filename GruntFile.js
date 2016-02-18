module.exports=function(grunt){
    grunt.initConfig({
        browserify:{
            dist:{
                options:{
                    transform:[['babelify',{'presets':"es2015"}]]
                },
                files: {
                    './dist/bundle.js':['./src/main.js']
                }
            }
        },
        watch:{
            scripts:{
                files:['./src/*.js'],
                tasks:['browserify']
            }
        },

        eslint: {
            target: ['src/*listView.js']
        },

        connect:{
          server:{
            options: {
              port: 8080,
              keepalive: true,
              open:{
                target: 'http://localhost:<%= connect.server.options.port %>', // target url to open
                callback: function() {console.log("Application is running in browser")} // called when the app has opened
              }
            },
          }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks("grunt-eslint");

    grunt.registerTask('default',["browserify"]);
    grunt.registerTask('validate',["eslint"]);

};
