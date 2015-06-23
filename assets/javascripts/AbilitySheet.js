(function() {
  var before, callback;

  before = function() {
    return $('#iidx12').html("loading now...");
  };

  callback = function(d) {
    $('#iidx12').empty();
    return $('#iidx12').text(d.users);
  };

  new AbilitySheetApi().getUserData(before, callback);

}).call(this);
