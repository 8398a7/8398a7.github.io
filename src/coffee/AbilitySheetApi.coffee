class @AbilitySheetApi
  @server = 'https://iidx12.tk/'
  @apiPath = 'api/v1/'

  constructor: ->

  @AjaxCall: (api, option = null) ->
    option = {} unless option?
    option.type = 'GET' unless option.type?
    option.params = {} unless option.params?

    $.ajax
      type: option.type
      url: AbilitySheetApi.server + AbilitySheetApi.apiPath + api
      data: option.params
      beforeSend: ->
        option.before() if option.before?
      success: (result, type) ->
        option.callback(result) if option.callback?
      error: (XMLHttpRequest, textStatus, errorThrown) ->
        console.error('Unknown API call error')

  getUserData: (before, callback) ->
    AbilitySheetApi.AjaxCall 'users',
      type: 'GET'
      before: before
      callback: callback
