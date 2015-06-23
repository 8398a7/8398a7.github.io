#==================================================
# library
#==================================================

config     = require '../config.coffee'
gulp       = require 'gulp'
notify     = require 'gulp-notify'

#==================================================
# task
#==================================================

gulp.task 'watch', ->
  gulp.watch config.slim.src, ['slim']
  gulp.watch config.coffee.src, ['coffee']
  gulp.watch config.sass.src, ['sass']
  gulp.src 'gulpfile.coffee'
    .pipe notify 'start watch!'
