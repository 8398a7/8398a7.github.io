this.AbilitysheetActionCreators = (function() {
  function AbilitysheetActionCreators() {}

  AbilitysheetActionCreators.getCount = function() {
    return fetch(AppConstants.API_SERVER + '/users/count').then(function(response) {
      return response.json();
    }).then(function(object) {
      return AppDispatcher.dispatch({
        action: AppConstants.RECEIVED_USER_COUNT,
        users: object.users
      });
    });
  };

  return AbilitysheetActionCreators;

})();
