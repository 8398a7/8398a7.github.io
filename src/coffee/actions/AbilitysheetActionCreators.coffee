class @AbilitysheetActionCreators
  @getCount: ->
    fetch(AppConstants.API_SERVER + '/users/count')
      .then (response) -> response.json()
      .then (object) ->
        AppDispatcher.dispatch
          action: AppConstants.RECEIVED_USER_COUNT
          users: object.users
