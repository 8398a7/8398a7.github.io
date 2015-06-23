#==================================================
# library
#==================================================

gulp        = require 'gulp'
browserSync = require 'browser-sync'

#==================================================
# task
#==================================================

gulp.task 'browser-sync', ->
  browserSync.init
    port: 8000
    server:
      port: 8000
      baseDir: './'
