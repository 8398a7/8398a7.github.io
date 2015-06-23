#==================================================
# library
#==================================================

config      = require '../config.coffee'
gulp        = require 'gulp'
slim        = require 'gulp-slim'
plumber     = require 'gulp-plumber'
browserSync = require 'browser-sync'

#==================================================
# task
#==================================================

gulp.task 'slim', ->
  gulp.src config.slim.src
    .pipe slim config.slim.option
    .pipe gulp.dest config.slim.dest
    .pipe plumber()
    .pipe browserSync.stream()
