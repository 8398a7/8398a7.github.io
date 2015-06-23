class Util
  constructor: ->

  clickMove: ->
    $('a[href^=#]').click ->
      speed = 500
      href = $(this).attr('href')
      target = $(if href == '#' or href == '' then 'html' else href)
      position = target.offset().top
      $('html, body').animate { scrollTop: position }, speed, 'swing'
      false
      return
util = new Util()
util.clickMove()
