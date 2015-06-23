(function() {
  var AbilitySheet, user;

  AbilitySheet = (function() {
    function AbilitySheet() {
      this.before = function() {
        return $('#iidx12').html("loading now...");
      };
      this.callback = function(d) {
        $('#iidx12').empty();
        return $('#iidx12').text(d.users);
      };
    }

    AbilitySheet.prototype.getUserData = function() {
      return new AbilitySheetApi().getUserData(this.before, this.callback);
    };

    return AbilitySheet;

  })();

  user = new AbilitySheet();

  user.getUserData();

}).call(this);
