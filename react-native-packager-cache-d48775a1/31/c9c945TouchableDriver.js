Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TouchableDriver = undefined;

var _reactNative = require('react-native');

function defaultAnimation(value, toValue, animationOptions) {
  return _reactNative.Animated.timing(value, babelHelpers.extends({
    toValue: toValue
  }, animationOptions));
}

var TouchableDriver = exports.TouchableDriver = function () {
  function TouchableDriver(options) {
    babelHelpers.classCallCheck(this, TouchableDriver);

    this.animationOptions = babelHelpers.extends({
      easing: _reactNative.Easing.elastic(1),
      duration: 150
    }, options);
    this.value = new _reactNative.Animated.Value(0);
    this.onPressIn = this.onPressIn.bind(this);
    this.onPressOut = this.onPressOut.bind(this);
    this.touchableViewProps = {
      onPressIn: this.onPressIn,
      onPressOut: this.onPressOut
    };
  }

  babelHelpers.createClass(TouchableDriver, [{
    key: 'onPressIn',
    value: function onPressIn() {
      defaultAnimation(this.value, 1, this.animationOptions).start();
    }
  }, {
    key: 'onPressOut',
    value: function onPressOut() {
      defaultAnimation(this.value, 0, this.animationOptions).start();
    }
  }]);
  return TouchableDriver;
}();