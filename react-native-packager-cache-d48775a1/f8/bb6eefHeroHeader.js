Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeroHeader = undefined;

var _class,
    _temp,
    _jsxFileName = '/home/az/dev/projects/vuazz-mobile/node_modules/@shoutem/animation/src/animations/HeroHeader.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _ZoomOut = require('./ZoomOut');

var _Parallax = require('./Parallax');

var _DriverShape = require('../drivers/DriverShape');

var HeroHeader = exports.HeroHeader = (_temp = _class = function (_Component) {
  babelHelpers.inherits(HeroHeader, _Component);

  function HeroHeader(props) {
    babelHelpers.classCallCheck(this, HeroHeader);

    var _this = babelHelpers.possibleConstructorReturn(this, (HeroHeader.__proto__ || Object.getPrototypeOf(HeroHeader)).call(this, props));

    _this.onLayout = _this.onLayout.bind(_this);
    _this.state = {
      height: 240
    };
    return _this;
  }

  babelHelpers.createClass(HeroHeader, [{
    key: 'onLayout',
    value: function onLayout(event) {
      var height = event.nativeEvent.layout.height;

      this.setState({ height: height });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          driver = _props.driver,
          children = _props.children;


      return _react2.default.createElement(
        _reactNative.View,
        { onLayout: this.onLayout, __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          }
        },
        _react2.default.createElement(
          _ZoomOut.ZoomOut,
          {
            driver: driver,
            inputRange: [-(0.9 * this.state.height), 0],
            maxFactor: 3,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 56
            }
          },
          _react2.default.createElement(
            _Parallax.Parallax,
            {
              driver: driver,
              scrollSpeed: 0.5,
              insideScroll: true,
              header: true,
              extrapolation: { extrapolateLeft: 'clamp' },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 61
              }
            },
            children
          )
        )
      );
    }
  }]);
  return HeroHeader;
}(_react.Component), _class.propTypes = {
  driver: _DriverShape.DriverShape.isRequired,

  children: _react2.default.PropTypes.node
}, _temp);