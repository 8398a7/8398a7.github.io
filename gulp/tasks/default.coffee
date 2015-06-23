#==================================================
# library
#==================================================

gulp        = require 'gulp'
runSequence = require 'run-sequence'

#==================================================
# task
#==================================================

gulp.task 'default', ->
  runSequence 'slim', 'browser-sync', 'watch', 'coffee', 'sass'
