(function() {
  this.AbilitySheetApi = (function() {
    AbilitySheetApi.server = document.domain === 'localhost' ? 'http://localhost:3000/' : 'http://iidx12.tk/abilitysheet/';

    AbilitySheetApi.apiPath = 'api/v1/';

    function AbilitySheetApi() {}

    AbilitySheetApi.AjaxCall = function(api, option) {
      if (option == null) {
        option = null;
      }
      if (option == null) {
        option = {};
      }
      if (option.type == null) {
        option.type = 'GET';
      }
      if (option.params == null) {
        option.params = {};
      }
      return $.ajax({
        type: option.type,
        url: AbilitySheetApi.server + AbilitySheetApi.apiPath + api,
        data: option.params,
        beforeSend: function() {
          if (option.before != null) {
            return option.before();
          }
        },
        success: function(result, type) {
          if (option.callback != null) {
            return option.callback(result);
          }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
          return console.error('Unknown API call error');
        }
      });
    };

    AbilitySheetApi.prototype.getUserData = function(before, callback) {
      return AbilitySheetApi.AjaxCall('users', {
        type: 'GET',
        before: before,
        callback: callback
      });
    };

    return AbilitySheetApi;

  })();

}).call(this);
