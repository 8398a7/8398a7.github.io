this.AbilitysheetActionCreators = (function() {
  function AbilitysheetActionCreators() {}

  AbilitysheetActionCreators.getCount = function() {
    return $.ajax({
      type: 'GET',
      url: AppConstants.API_SERVER + '/users/count',
      dataType: 'json'
    }).done(function(object) {
      return AppDispatcher.dispatch({
        action: AppConstants.RECEIVED_USER_COUNT,
        users: object.users
      });
    });
  };

  return AbilitysheetActionCreators;

})();
