Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Parallax = undefined;

var _class,
    _temp,
    _jsxFileName = '/home/az/dev/projects/vuazz-mobile/node_modules/@shoutem/animation/src/animations/Parallax.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactNative2 = babelHelpers.interopRequireDefault(_reactNative);

var _DriverShape = require('../drivers/DriverShape');

var findNodeHandle = _reactNative2.default.findNodeHandle;

var Parallax = exports.Parallax = (_temp = _class = function (_Component) {
  babelHelpers.inherits(Parallax, _Component);

  function Parallax(props) {
    babelHelpers.classCallCheck(this, Parallax);

    var _this = babelHelpers.possibleConstructorReturn(this, (Parallax.__proto__ || Object.getPrototypeOf(Parallax)).call(this, props));

    _this.translation = new _reactNative.Animated.Value(0);
    _this.calculateTranslation = _this.calculateTranslation.bind(_this);
    _this.measure = _this.measure.bind(_this);
    _this.handleMeasure = _this.handleMeasure.bind(_this);
    _this.state = {
      y: 0
    };
    return _this;
  }

  babelHelpers.createClass(Parallax, [{
    key: 'handleMeasure',
    value: function handleMeasure(x, y, width, height, pageX, pageY) {
      this.setState({ x: pageX, y: pageY });
    }
  }, {
    key: 'measure',
    value: function measure() {
      _reactNative.UIManager.measure(findNodeHandle(this), this.handleMeasure);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      requestAnimationFrame(this.measure);
    }
  }, {
    key: 'calculateTranslation',
    value: function calculateTranslation(scrollOffset) {
      var y = this.state.y;
      var driver = this.props.driver;

      var scrollHeight = driver.layout.height;
      this.translation.setValue(scrollOffset.value - (y - scrollHeight / 2));
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var driver = this.props.driver;

      this.animationListener = driver.value.addListener(this.calculateTranslation);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var driver = this.props.driver;

      driver.value.removeListener(this.animationListener);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          scrollSpeed = _props.scrollSpeed,
          children = _props.children,
          extrapolation = _props.extrapolation,
          insideScroll = _props.insideScroll,
          style = _props.style,
          driver = _props.driver,
          header = _props.header;

      var scrollVector = insideScroll ? -1 : 1;
      var scrollFactor = scrollVector * (scrollSpeed - 1);
      var animatedValue = header ? driver.value : this.translation;

      return _react2.default.createElement(
        _reactNative.Animated.View,
        {
          style: [style, {
            transform: [{
              translateY: animatedValue.interpolate(babelHelpers.extends({
                inputRange: [-100, 100],
                outputRange: [-scrollFactor * 100, scrollFactor * 100]
              }, extrapolation))
            }]
          }],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 127
          }
        },
        children
      );
    }
  }]);
  return Parallax;
}(_react.Component), _class.propTypes = {
  driver: _DriverShape.DriverShape.isRequired,

  children: _react2.default.PropTypes.node,

  extrapolation: _react2.default.PropTypes.object,

  scrollSpeed: _react2.default.PropTypes.number,

  insideScroll: _react2.default.PropTypes.bool,

  header: _react2.default.PropTypes.bool,

  style: _react2.default.PropTypes.object
}, _class.defaultProps = {
  insideScroll: true,
  header: false
}, _temp);