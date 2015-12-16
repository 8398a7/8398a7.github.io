abilitysheet = {}

@AbilitysheetStore = new EventEmitter2()
$.extend @AbilitysheetStore,
  emitChange: ->
    @emit(AppConstants.CHANGE_EVENT)

  addChangeListener: (callback) ->
    @on(AppConstants.CHANGE_EVENT, callback)

  removeChangeListener: (callback) ->
    @removeListener(AppConstants.CHANGE_EVENT, callback)

  getUsersCount: ->
    return null unless abilitysheet.users?
    abilitysheet.users

@AbilitysheetStore.dispatchToken = AppDispatcher.register (payload) ->
  action = payload.action

  switch action
    when AppConstants.RECEIVED_USER_COUNT
      abilitysheet.users = payload.users
      AbilitysheetStore.emitChange()
