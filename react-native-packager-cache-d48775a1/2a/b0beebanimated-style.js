Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeAnimatedValueListener = exports.addAnimatedValueListener = exports.getAnimatedStyleValue = exports.isAnimatedStyleValue = undefined;

var _reactNative = require('react-native');

var isAnimatedStyleValue = exports.isAnimatedStyleValue = function isAnimatedStyleValue(value) {
  return value && typeof value.interpolate === 'function';
};

var getAnimatedStyleValue = exports.getAnimatedStyleValue = function getAnimatedStyleValue(value) {
  if (isAnimatedStyleValue(value)) {
    return value.toJSON();
  }

  return value;
};

var findAnimatedValue = function findAnimatedValue(animatedStyleValue) {
  if (animatedStyleValue instanceof _reactNative.Animated.Value) {
    return animatedStyleValue;
  }

  var parent = animatedStyleValue._parent;
  if (parent) {
    return findAnimatedValue(parent);
  }

  return undefined;
};

var addAnimatedValueListener = exports.addAnimatedValueListener = function addAnimatedValueListener(styleValue, listener) {
  var animatedValue = findAnimatedValue(styleValue);
  if (animatedValue) {
    return animatedValue.addListener(listener);
  }

  return undefined;
};

var removeAnimatedValueListener = exports.removeAnimatedValueListener = function removeAnimatedValueListener(styleValue, listenerId) {
  var animatedValue = findAnimatedValue(styleValue);
  if (animatedValue) {
    animatedValue.removeListener(listenerId);
  }
};