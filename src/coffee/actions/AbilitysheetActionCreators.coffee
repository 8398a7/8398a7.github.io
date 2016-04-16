class @AbilitysheetActionCreators
  @getCount: ->
    $.ajax
      type: 'GET'
      url: AppConstants.API_SERVER + '/users/count'
      dataType: 'json'
    .done (object) ->
      AppDispatcher.dispatch
        action: AppConstants.RECEIVED_USER_COUNT
        users: object.users
