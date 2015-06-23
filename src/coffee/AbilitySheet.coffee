class AbilitySheet
  constructor: ->
    @before = ->
      $('#iidx12').html("loading now...")
    @callback = (d) ->
      $('#iidx12').empty()
      $('#iidx12').text(d.users)
  getUserData: ->
    new AbilitySheetApi().getUserData(@before, @callback)

user = new AbilitySheet()
user.getUserData()
