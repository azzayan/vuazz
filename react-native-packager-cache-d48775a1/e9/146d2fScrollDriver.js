Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScrollDriver = undefined;

var _reactNative = require('react-native');

var ScrollDriver = exports.ScrollDriver = function () {
  function ScrollDriver() {
    babelHelpers.classCallCheck(this, ScrollDriver);

    this.value = new _reactNative.Animated.Value(0);
    this.onScrollViewLayout = this.onScrollViewLayout.bind(this);
    this.scrollViewProps = {
      onScroll: _reactNative.Animated.event([{
        nativeEvent: {
          contentOffset: {
            y: this.value
          }
        }
      }]),
      scrollEventThrottle: 1,
      onLayout: this.onScrollViewLayout
    };
  }

  babelHelpers.createClass(ScrollDriver, [{
    key: 'onScrollViewLayout',
    value: function onScrollViewLayout(event) {
      this.layout = event.nativeEvent.layout;
    }
  }]);
  return ScrollDriver;
}();