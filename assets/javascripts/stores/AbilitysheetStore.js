var abilitysheet;

abilitysheet = {};

this.AbilitysheetStore = new EventEmitter2();

$.extend(this.AbilitysheetStore, {
  emitChange: function() {
    return this.emit(AppConstants.CHANGE_EVENT);
  },
  addChangeListener: function(callback) {
    return this.on(AppConstants.CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback) {
    return this.removeListener(AppConstants.CHANGE_EVENT, callback);
  },
  getUsersCount: function() {
    if (abilitysheet.users == null) {
      return null;
    }
    return abilitysheet.users;
  }
});

this.AbilitysheetStore.dispatchToken = AppDispatcher.register(function(payload) {
  var action;
  action = payload.action;
  switch (action) {
    case AppConstants.RECEIVED_USER_COUNT:
      abilitysheet.users = payload.users;
      return AbilitysheetStore.emitChange();
  }
});
