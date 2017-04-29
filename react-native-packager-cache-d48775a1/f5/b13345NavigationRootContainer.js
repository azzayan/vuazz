
'use strict';

var _class, _temp;

var AsyncStorage = require('react-native').AsyncStorage;
var Linking = require('react-native').Linking;
var NavigationPropTypes = require('./NavigationPropTypes');
var NavigationStateUtils = require('./NavigationStateUtils');
var Platform = require('react-native').Platform;
var React = require('react');

function getBackAction() {
  return { type: 'BackAction' };
}

var PropTypes = React.PropTypes;
var NavigationRootContainer = (_temp = _class = function (_React$Component) {
  babelHelpers.inherits(NavigationRootContainer, _React$Component);

  function NavigationRootContainer(props) {
    babelHelpers.classCallCheck(this, NavigationRootContainer);

    var _this = babelHelpers.possibleConstructorReturn(this, (NavigationRootContainer.__proto__ || Object.getPrototypeOf(NavigationRootContainer)).call(this, props));

    var navState = null;
    if (!_this.props.persistenceKey) {
      navState = NavigationStateUtils.getParent(_this.props.reducer(null, props.initialAction));
    }
    _this.state = { navState: navState };
    return _this;
  }

  babelHelpers.createClass(NavigationRootContainer, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.handleNavigation = this.handleNavigation.bind(this);
      this._handleOpenURLEvent = this._handleOpenURLEvent.bind(this);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      if (this.props.linkingActionMap) {
        Linking.getInitialURL().then(this._handleOpenURL.bind(this));
        Platform.OS === 'ios' && Linking.addEventListener('url', this._handleOpenURLEvent);
      }
      if (this.props.persistenceKey) {
        AsyncStorage.getItem(this.props.persistenceKey, function (err, storedString) {
          if (err || !storedString) {
            _this2.setState({
              navState: _this2.props.reducer(null, _this2.props.initialAction)
            });
            return;
          }
          _this2.setState({
            navState: JSON.parse(storedString)
          });
        });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (Platform.OS === 'ios') {
        Linking.removeEventListener('url', this._handleOpenURLEvent);
      }
    }
  }, {
    key: '_handleOpenURLEvent',
    value: function _handleOpenURLEvent(event) {
      this._handleOpenURL(event.url);
    }
  }, {
    key: '_handleOpenURL',
    value: function _handleOpenURL(url) {
      if (!this.props.linkingActionMap) {
        return;
      }
      var action = this.props.linkingActionMap(url);
      if (action) {
        this.handleNavigation(action);
      }
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        onNavigate: this.handleNavigation
      };
    }
  }, {
    key: 'handleNavigation',
    value: function handleNavigation(action) {
      var navState = this.props.reducer(this.state.navState, action);
      if (navState === this.state.navState) {
        return false;
      }
      this.setState({
        navState: navState
      });

      if (this.props.persistenceKey) {
        AsyncStorage.setItem(this.props.persistenceKey, JSON.stringify(navState));
      }

      return true;
    }
  }, {
    key: 'render',
    value: function render() {
      var navigation = this.props.renderNavigation(this.state.navState, this.handleNavigation);
      return navigation;
    }
  }]);
  return NavigationRootContainer;
}(React.Component), _class.propTypes = {
  initialAction: NavigationPropTypes.action.isRequired,
  linkingActionMap: PropTypes.func,
  persistenceKey: PropTypes.string,
  reducer: PropTypes.func.isRequired,
  renderNavigation: PropTypes.func.isRequired
}, _class.defaultProps = {
  initialAction: { type: 'RootContainerInitialAction' }
}, _class.childContextTypes = {
  onNavigate: PropTypes.func
}, _class.getBackAction = getBackAction, _temp);


module.exports = NavigationRootContainer;