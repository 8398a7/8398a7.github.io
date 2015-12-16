var Abilitysheet,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Abilitysheet = (function(_super) {
  __extends(Abilitysheet, _super);

  function Abilitysheet() {
    this.onChangeUsers = __bind(this.onChangeUsers, this);
    this.state = {
      users: 'loading now...'
    };
  }

  Abilitysheet.prototype.onChangeUsers = function() {
    return this.setState({
      users: AbilitysheetStore.getUsersCount()
    });
  };

  Abilitysheet.prototype.componentWillMount = function() {
    return AbilitysheetStore.addChangeListener(this.onChangeUsers);
  };

  Abilitysheet.prototype.componentDidMount = function() {
    return AbilitysheetActionCreators.getCount();
  };

  Abilitysheet.prototype.componentWillUnmount = function() {
    return AbilitysheetStore.removeChangeListener(this.onChangeUsers);
  };

  Abilitysheet.prototype.render = function() {
    return React.createElement("li", null, React.createElement("a", {
      "href": 'https://github.com/8398a7/abilitysheet'
    }, React.createElement("i", {
      "className": 'fa fa-github'
    })), "[Ruby on Rails] IIDX\u260612\u53c2\u8003\u8868", React.createElement("a", {
      "className": 'btn btn-default btn-xs',
      "href": 'https://iidx12.tk/abilitysheet',
      "target": '_blank'
    }, React.createElement("i", {
      "className": 'fa fa-external-link'
    }), "\u00a0Web site"), "-\x3E \u4e0a\u8a18\u62e1\u5f35\u7248\uff0c2014\x2F11 \u516c\u958b\u958b\u59cb\uff0c\u5229\u7528\u8005", React.createElement("span", {
      "key": 'users'
    }, this.state.users), "\u540d");
  };

  return Abilitysheet;

})(React.Component);

Abilitysheet.displayName = 'Abilitysheet';

ReactDOM.render(React.createElement(Abilitysheet, null), $('#iidx12')[0]);
