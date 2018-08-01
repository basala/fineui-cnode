module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        concat: {
            options: {
                separator: ""
            },
            bundleJs: {
                src: [
                    "src/entry.js",
                    "src/modules/**/*.js",
                    "src/config.js",
                    // "src/injections.js",
                    "src/start.js"
                ],
                dest: "dist/bundle.js"
            },
            bundleCss: {
                src: ["src/css/**/*.css"],
                dest: "dist/bundle.css"
            }
        },

        less: {
            main: {
                expand: true,
                cwd: "src/modules",
                src: ["**/*.less"],
                dest: "src/css/",
                ext: ".css"
            },
            dev: {
                options: {
                    compress: true,
                    yuicompress: false
                }
            }
        },

        uglify: {
            options: {
                banner: "/*! <%= pkg.name %> <%= grunt.template.today(\"dd-mm-yyyy\") %> */\n"
            },
            dist: {
                files: {
                    "dist/bundle.min.js": ["<%= concat.bundleJs.dest %>"]
                }
            }
        },

        cssmin: {
            bundleCss: {
                src: "<%= concat.bundleCss.dest %>",

                dest: "dist/bundle.min.css"
            }
        },

        jshint: {
            files: ["src/**/*.js"],
            options: {
                globals: {
                    $: true,
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                },
                browser: true,
                expr: true
            }
        },
        watch: {
            scripts: {
                files: ["src/**/*.js", "src/**/*.less"],
                tasks: ["less", "concat"],
                options: {
                    spanw: true,
                    interrupt: true
                }
            },
            livereload: {
                options: {
                    livereload: "<%= connect.options.livereload %>"
                },
                files: ["src/**/*.js", "src/**/*.less"]
            }
        },
        connect: {
            options: {
                port: 8000,
                open: true,
                livereload: 35729,
                // Change this to '0.0.0.0' to access the server from outside
                hostname: "localhost"
            },
            server: {
                options: {
                    port: 8080,
                    base: "./"
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-connect");

    grunt.registerTask("default", [
        "jshint",
        "less",
        "concat",
        "connect",
        "watch"
    ]);
    grunt.registerTask("min", ["less", "concat", "uglify", "cssmin"]);
};