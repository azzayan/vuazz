Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimingDriver = undefined;

var _reactNative = require('react-native');

var TimingDriver = exports.TimingDriver = function () {
  function TimingDriver(options) {
    babelHelpers.classCallCheck(this, TimingDriver);

    this.animationOptions = babelHelpers.extends({
      easing: _reactNative.Easing.cubic,
      duration: 250
    }, options);
    this.value = new _reactNative.Animated.Value(0);
    this.runTimer = this.runTimer.bind(this);
  }

  babelHelpers.createClass(TimingDriver, [{
    key: 'runTimer',
    value: function runTimer(endValue, onFinish) {
      _reactNative.Animated.timing(this.value, babelHelpers.extends({
        toValue: endValue
      }, this.animationOptions)).start(onFinish);
    }
  }]);
  return TimingDriver;
}();