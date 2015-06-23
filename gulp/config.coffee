#==================================================
# config
#==================================================

src  = './src/'
dest = './'

module.exports =
  slim:
    src: src + 'slim/*.slim'
    dest: dest
    slim_option:
      pretty: false
  coffee:
    src: src + 'coffee/**/*.coffee'
    dest: dest + 'assets/javascripts/'
  sass:
    src: src + 'sass/*.s[ac]ss'
    dest: dest + 'assets/stylesheets/'
    compass:
      css: '.sass-cache/compass-cache'
      sass: src + 'sass/'
  browserSync:
    documentRoot: dest
