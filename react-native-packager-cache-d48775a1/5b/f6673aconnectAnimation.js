Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/az/dev/projects/vuazz-mobile/node_modules/@shoutem/animation/src/components/connectAnimation.js';
exports.connectAnimation = connectAnimation;

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _hoistNonReactStatics = require('hoist-non-react-statics');

var _hoistNonReactStatics2 = babelHelpers.interopRequireDefault(_hoistNonReactStatics);

var _lodash = require('lodash');

var _ = babelHelpers.interopRequireWildcard(_lodash);

var _DriverShape = require('../drivers/DriverShape');

var ANIMATION_SUFFIX = 'Animation';

function isComponentAnimated(props) {
  return props.animation || props.animationName;
}

function removeAnimationsFromStyle(style) {
  return _.omitBy(style, function (value, key) {
    return _.isFunction(value) && _.endsWith(key, ANIMATION_SUFFIX);
  });
}

function transferAnimatedValues(styleValue, animatedStyleValue, key) {
  if (_.isFunction(animatedStyleValue.interpolate) || _.isUndefined(styleValue)) {
    return animatedStyleValue;
  }
}

function resolveAnimatedStyle(_ref) {
  var props = _ref.props,
      driver = _ref.driver,
      animations = _ref.animations,
      _ref$layout = _ref.layout,
      layout = _ref$layout === undefined ? {} : _ref$layout,
      _ref$componentName = _ref.componentName,
      componentName = _ref$componentName === undefined ? 'component' : _ref$componentName;
  var style = props.style,
      animation = props.animation,
      animationName = props.animationName,
      animationOptions = props.animationOptions;


  if (!isComponentAnimated(props)) {
    return removeAnimationsFromStyle(style);
  }

  var createAnimatedStyle = animation || animations['' + animationName + ANIMATION_SUFFIX] || style['' + animationName + ANIMATION_SUFFIX];

  if (!_.isFunction(createAnimatedStyle)) {
    throw new Error('Animation with name: ' + animationName + ', you tried to assign to ' + ('to the ' + componentName + ' doesn\'t exist. Check ' + componentName + '\'s style or its declaration, ') + 'to find an exact error');
  }

  if (!driver) {
    throw new Error('You tried to animate ' + componentName + ' with animation named ' + animationName + ' ' + ('but you didn\'t pass driver to ' + componentName + '.'));
  }

  var animatedStyle = createAnimatedStyle(driver, { layout: layout, animationOptions: animationOptions });

  return _.mergeWith(removeAnimationsFromStyle(style), animatedStyle, transferAnimatedValues);
}

var defaultOptions = {
  createAnimatedComponent: true
};

function connectAnimation(WrappedComponent) {
  var _class, _temp;

  var animations = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultOptions;

  var AnimatedWrappedComponent = options.createAnimatedComponent ? _reactNative.Animated.createAnimatedComponent(WrappedComponent) : WrappedComponent;

  var AnimatedComponent = (_temp = _class = function (_Component) {
    babelHelpers.inherits(AnimatedComponent, _Component);

    function AnimatedComponent(props, context) {
      babelHelpers.classCallCheck(this, AnimatedComponent);

      var _this = babelHelpers.possibleConstructorReturn(this, (AnimatedComponent.__proto__ || Object.getPrototypeOf(AnimatedComponent)).call(this, props, context));

      _this.onLayout = _this.onLayout.bind(_this);
      _this.resolveStyle = _this.resolveStyle.bind(_this);
      _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);
      _this.state = {
        layout: {
          height: 0,
          width: 0,
          x: 0,
          y: 0
        },
        resolvedStyle: removeAnimationsFromStyle(props.style)
      };
      return _this;
    }

    babelHelpers.createClass(AnimatedComponent, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps, nextContext) {
        this.resolveStyle(nextProps, this.getDriver(nextProps, nextContext));
      }
    }, {
      key: 'onLayout',
      value: function onLayout(event) {
        var _this2 = this;

        var layout = event.nativeEvent.layout;

        var driver = this.getDriver();
        if (!_.isEqual(layout, this.state.layout)) {
          this.setState({ layout: layout }, function () {
            return _this2.resolveStyle(_this2.props, driver);
          });
        }
      }
    }, {
      key: 'getDriver',
      value: function getDriver() {
        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.context;

        return props.driver || context.animationDriver;
      }
    }, {
      key: 'resolveStyle',
      value: function resolveStyle(props, driver) {
        this.setState({
          resolvedStyle: resolveAnimatedStyle({
            props: props,
            driver: driver,
            animations: animations,
            layout: this.state.layout,
            componentName: WrappedComponent.displayName || WrappedComponent.name
          })
        });
      }
    }, {
      key: 'setNativeProps',
      value: function setNativeProps(nativeProps) {
        if (this.wrappedInstance.setNativeProps) {
          this.wrappedInstance.setNativeProps(nativeProps);
        }
      }
    }, {
      key: 'setWrappedInstance',
      value: function setWrappedInstance(component) {
        this.wrappedInstance = component;
      }
    }, {
      key: 'render',
      value: function render() {
        var resolvedStyle = this.state.resolvedStyle;

        var ConnectedComponent = isComponentAnimated(this.props) ? AnimatedWrappedComponent : WrappedComponent;

        return _react2.default.createElement(ConnectedComponent, babelHelpers.extends({
          onLayout: this.onLayout
        }, this.props, {
          style: resolvedStyle,
          ref: this.setWrappedInstance,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 205
          }
        }));
      }
    }]);
    return AnimatedComponent;
  }(_react.Component), _class.propTypes = {
    driver: _DriverShape.DriverShape,

    style: _react2.default.PropTypes.object,

    animationName: _react2.default.PropTypes.string,

    animationOptions: _react2.default.PropTypes.object,

    animation: _react2.default.PropTypes.func
  }, _class.defaultProps = {
    animationOptions: {}
  }, _class.contextTypes = {
    animationDriver: _DriverShape.DriverShape
  }, _temp);


  return (0, _hoistNonReactStatics2.default)(AnimatedComponent, WrappedComponent);
};