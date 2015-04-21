module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        autoprefixer: {
            options: {
            // Task-specific options go here.
                diff: true,
            },
            multiple_files: {
            // Target-specific file lists and/or options go here.
                expand: true,
                flatten: true,
                files: {
                    '.tmp/css/print.css': ['project/css/print.css'],
                    '.tmp/css/style.css': ['project/css/style.css'],
                    '.tmp/views/styles/style.css': ['project/views/styles/style.css']
                }
            },
        },

        concat: {
            js: {
                files: {
                    '.tmp/js/main.js': ['project/js/helper.js', 'project/js/resumeBuilder.js', 'project/js/fr.js', 'project/js/en.js']
                }
            }/*,

            css: {
                //  Source is .tmp, autoprefixer will run before concat for CSS files
                files: {
                    '.tmp/css/styles.css': ['.tmp/css/print.css', '.tmp/css/style.css']
                }
            },*/
        },

        cssmin: {
            target: {
                files: {
                    'dist/css/style.css': ['project/css/style.css']
                }
            }
        },

        jshint: {
            files: ['project/js/*.js'],

            options: {
                curly: true,
                eqeqeq: true,
                eqnull: true,
                browser: true,
                globals: {
                    jQuery: true
                },
            }
        },

        uglify: {
            dist: {
                files: {
                    'dist/js/main.js': ['.tmp/js/main.js'],
                    'dist/js/en.js': ['project/js/en.js'],
                    'dist/js/fr.js': ['project/js/fr.js']
                }
            }
        },

        processhtml: {
            dist: {
                files: {
                    '.tmp/index.html': ['project/index.html']
                }
            }
        },

        htmlmin: {                                     // Task
            dist: {                                      // Target
              options: {                                 // Target options
                removeComments: true,
                collapseWhitespace: true
              },

              files: {                                   // Dictionary of files
                'dist/index.html': ['.tmp/index.html']
              }
            }
        },

        imagemin: {
            png: {
                options: {
                    optimizationLevel: 7,
        svgoPlugins: [{ removeViewBox: false }]
                },
                files: [
                    {
                        expand: true,

                        cwd: 'project/images/min',
                        src: ['**/*.png'],

                        dest: 'dist/images/',
                        ext: '.png'
                    }]
            },

            jpg: {
                options: {
                    progressive: true,
                    optimizationLevel: 7,
        svgoPlugins: [{ removeViewBox: false }]
                },

                files: [
                    {
                        expand: true,

                        cwd: 'project/images/min',
                        src: ['**/*.jpg'],

                        dest: 'dist/images/',
                        ext: '.jpg'
                    }]
            }
        },

        image: {
          all: {
            options: {
              pngquant: true,
              optipng: true,
              advpng: true,
              zopflipng: true,
              pngcrush: true,
              pngout: true,
              mozjpeg: true,
              jpegRecompress: true,
              jpegoptim: true,
              gifsicle: true,
              svgo: true
            },
            files: [{
              expand: true,
              cwd: 'project/images/min',
              src: ['**/*.{png,jpg,gif,svg}'],
              dest: 'dist/images'
            }]
          }
        },

        image_resize: {
            no_overwrite: {
                options: {
                    width: 100,
                },
                files: {
                    'project/images/min/': 'project/images/*.jpg',
                    'project/images/min/': 'project/images/*.png'
                }
            }
        },

        /*copy: {
            main: {
                files: [
                    // includes files within path and its sub-directories
                    {
                        expand: true,
                        src: ['project/project*.html'],
                        dest: 'dist/',
                        filter: 'isFile',
                        flatten: true
                    }
                ],
            },
        },
*/
        connect: {
            dist: { // give your task a name
                options: {
                    hostname: '127.0.0.1',
                    port: 3000, // configure your port here
                    base: './dist', // configure your site distribution path here
                    keepalive: true
                }
            },
            project: {
                options: {
                    hostname: '127.0.0.1',
                    port: 3000, // configure your port here
                    base: './project', // configure your site distribution path here
                    keepalive: true
                }
            }
        },

        watch: {
            options: {
                livereload: true
            },

            css: {
                files: ['project/css/**/*.css'],
                tasks: ['autoprefixer', 'concat', 'cssmin']
            },

            scripts: {
                files: ['<%= jshint.files %>'],
                tasks: ['jshint', 'concat', 'uglify']
            }
        },
    });

    grunt.loadNpmTasks('grunt-image');
    grunt.loadNpmTasks('grunt-image-resize');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-concat');

    //  Task setup
    grunt.registerTask('build', [
                                    'jshint',
                                    'autoprefixer',
                                    'concat',
                                    'cssmin',
                                    'uglify',
                                    'processhtml',
                                    'htmlmin',
                                    'imagemin',
                                    /*'copy'*/]);

    grunt.registerTask('default', [ //  List of tasks to execute.
                                    'jshint',
                                    'autoprefixer',
                                    'concat',
                                    'cssmin',
                                    'uglify',
                                    'processhtml',
                                    'htmlmin',
                                    'imagemin',
                                    'watch']);
};