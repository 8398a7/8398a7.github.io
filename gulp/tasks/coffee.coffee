#==================================================
# library
#==================================================

config      = require '../config.coffee'
gulp        = require 'gulp'
coffee      = require 'gulp-coffee-react'
browserSync = require 'browser-sync'

#==================================================
# task
#==================================================

gulp.task 'coffee', ->
  gulp.src config.coffee.src
    .pipe coffee(bare: true)
    .pipe gulp.dest config.coffee.dest
    .pipe browserSync.stream()
