#==================================================
# library
#==================================================

config       = require '../config.coffee'
gulp         = require 'gulp'
compass      = require 'gulp-compass'
autoprefixer = require 'gulp-autoprefixer'
browserSync  = require 'browser-sync'

#==================================================
# task
#==================================================

gulp.task 'sass', ->
  gulp.src config.sass.src
    .pipe compass config.sass.compass
    .pipe autoprefixer()
    .pipe gulp.dest config.sass.dest
    .pipe browserSync.stream()
