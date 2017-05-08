Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _class, _temp;

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _Theme = require('./Theme');

var _Theme2 = babelHelpers.interopRequireDefault(_Theme);

var _normalizeStyle = require('./StyleNormalizer/normalizeStyle');

var _normalizeStyle2 = babelHelpers.interopRequireDefault(_normalizeStyle);

var StyleProvider = (_temp = _class = function (_React$Component) {
  babelHelpers.inherits(StyleProvider, _React$Component);

  function StyleProvider(props, context) {
    babelHelpers.classCallCheck(this, StyleProvider);

    var _this = babelHelpers.possibleConstructorReturn(this, (StyleProvider.__proto__ || Object.getPrototypeOf(StyleProvider)).call(this, props, context));

    _this.state = {
      theme: _this.createTheme(props)
    };
    return _this;
  }

  babelHelpers.createClass(StyleProvider, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        theme: this.state.theme
      };
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.style !== this.props.style) {
        this.setState({
          theme: this.createTheme(nextProps)
        });
      }
    }
  }, {
    key: 'createTheme',
    value: function createTheme(props) {
      return new _Theme2.default(props.style);
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;


      return _react.Children.only(children);
    }
  }]);
  return StyleProvider;
}(_react2.default.Component), _class.propTypes = {
  children: _react.PropTypes.element.isRequired,
  style: _react2.default.PropTypes.object
}, _class.defaultProps = {
  style: {}
}, _class.childContextTypes = {
  theme: _Theme.ThemeShape.isRequired
}, _temp);
exports.default = StyleProvider;