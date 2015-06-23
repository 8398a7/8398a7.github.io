before = ->
  $('#iidx12').html("loading now...")
callback = (d) ->
  $('#iidx12').empty()
  $('#iidx12').text(d.users)
new AbilitySheetApi().getUserData(before, callback)
