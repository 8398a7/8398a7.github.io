#==================================================
# library
#==================================================

config      = require '../config.coffee'
gulp        = require 'gulp'
coffee      = require 'gulp-coffee'
browserSync = require 'browser-sync'

#==================================================
# task
#==================================================

gulp.task 'coffee', ->
  gulp.src config.coffee.src
    .pipe coffee()
    .pipe gulp.dest config.coffee.dest
    .pipe browserSync.stream()
