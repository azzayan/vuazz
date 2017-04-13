Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _class,
    _temp2,
    _jsxFileName = '/home/az/dev/projects/vuazz/node_modules/expo/src/Video.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactNative2 = babelHelpers.interopRequireDefault(_reactNative);

var _Asset = require('./Asset');

var _Asset2 = babelHelpers.interopRequireDefault(_Asset);

var Component = _react2.default.Component,
    PropTypes = _react2.default.PropTypes;
var StyleSheet = _reactNative2.default.StyleSheet,
    requireNativeComponent = _reactNative2.default.requireNativeComponent,
    NativeModules = _reactNative2.default.NativeModules,
    View = _reactNative2.default.View;


var styles = StyleSheet.create({
  base: {
    overflow: 'hidden'
  }
});

var Video = (_temp2 = _class = function (_Component) {
  babelHelpers.inherits(Video, _Component);

  function Video() {
    var _ref;

    var _temp, _this, _ret;

    babelHelpers.classCallCheck(this, Video);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = Video.__proto__ || Object.getPrototypeOf(Video)).call.apply(_ref, [this].concat(args))), _this), _this.seek = function (time) {
      _this.setNativeProps({ seek: time });
    }, _this.presentFullscreenPlayer = function () {
      _this.setNativeProps({ fullscreen: true });
    }, _this.dismissFullscreenPlayer = function () {
      _this.setNativeProps({ fullscreen: false });
    }, _this._assignRoot = function (component) {
      _this._root = component;
    }, _this._onLoadStart = function (event) {
      if (_this.props.onLoadStart) {
        _this.props.onLoadStart(event.nativeEvent);
      }
    }, _this._onLoad = function (event) {
      if (_this.props.onLoad) {
        _this.props.onLoad(event.nativeEvent);
      }
    }, _this._onError = function (event) {
      if (_this.props.onError) {
        _this.props.onError(event.nativeEvent);
      }
    }, _this._onProgress = function (event) {
      if (_this.props.onProgress) {
        _this.props.onProgress(event.nativeEvent);
      }
    }, _this._onSeek = function (event) {
      if (_this.props.onSeek) {
        _this.props.onSeek(event.nativeEvent);
      }
    }, _this._onEnd = function (event) {
      if (_this.props.onEnd) {
        _this.props.onEnd(event.nativeEvent);
      }
    }, _this._onFullscreenPlayerWillPresent = function (event) {
      if (_this.props.onFullscreenPlayerWillPresent) {
        _this.props.onFullscreenPlayerWillPresent(event.nativeEvent);
      }
    }, _this._onFullscreenPlayerDidPresent = function (event) {
      if (_this.props.onFullscreenPlayerDidPresent) {
        _this.props.onFullscreenPlayerDidPresent(event.nativeEvent);
      }
    }, _this._onFullscreenPlayerWillDismiss = function (event) {
      if (_this.props.onFullscreenPlayerWillDismiss) {
        _this.props.onFullscreenPlayerWillDismiss(event.nativeEvent);
      }
    }, _this._onFullscreenPlayerDidDismiss = function (event) {
      if (_this.props.onFullscreenPlayerDidDismiss) {
        _this.props.onFullscreenPlayerDidDismiss(event.nativeEvent);
      }
    }, _this._onReadyForDisplay = function (event) {
      if (_this.props.onReadyForDisplay) {
        _this.props.onReadyForDisplay(event.nativeEvent);
      }
    }, _this._onPlaybackStalled = function (event) {
      if (_this.props.onPlaybackStalled) {
        _this.props.onPlaybackStalled(event.nativeEvent);
      }
    }, _this._onPlaybackResume = function (event) {
      if (_this.props.onPlaybackResume) {
        _this.props.onPlaybackResume(event.nativeEvent);
      }
    }, _this._onPlaybackRateChange = function (event) {
      if (_this.props.onPlaybackRateChange) {
        _this.props.onPlaybackRateChange(event.nativeEvent);
      }
    }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
  }

  babelHelpers.createClass(Video, [{
    key: 'setNativeProps',
    value: function setNativeProps(nativeProps) {
      this._root.setNativeProps(nativeProps);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          source = _props.source,
          resizeMode = _props.resizeMode;

      if (typeof source === 'number') {
        var asset = _Asset2.default.fromModule(source);
        source = { uri: asset.localUri || asset.uri };
      }

      var uri = source.uri;
      if (uri && uri.match(/^\//)) {
        uri = 'file://' + uri;
      }

      var isNetwork = !!(uri && uri.match(/^https?:/));
      var isAsset = !!(uri && uri.match(/^(assets-library|file|content):/));

      var nativeResizeMode = void 0;
      if (resizeMode === Video.RESIZE_MODE_STRETCH) {
        nativeResizeMode = NativeModules.UIManager.ExponentVideo.Constants.ScaleToFill;
      } else if (resizeMode === Video.RESIZE_MODE_CONTAIN) {
        nativeResizeMode = NativeModules.UIManager.ExponentVideo.Constants.ScaleAspectFit;
      } else if (resizeMode === Video.RESIZE_MODE_COVER) {
        nativeResizeMode = NativeModules.UIManager.ExponentVideo.Constants.ScaleAspectFill;
      } else {
        nativeResizeMode = NativeModules.UIManager.ExponentVideo.Constants.ScaleNone;
      }

      var nativeProps = babelHelpers.extends({}, this.props);
      babelHelpers.extends(nativeProps, {
        style: [styles.base, nativeProps.style],
        resizeMode: nativeResizeMode,
        src: {
          uri: uri,
          isNetwork: isNetwork,
          isAsset: isAsset,
          type: source.type || 'mp4'
        },
        onVideoLoadStart: this._onLoadStart,
        onVideoLoad: this._onLoad,
        onVideoError: this._onError,
        onVideoProgress: this._onProgress,
        onVideoSeek: this._onSeek,
        onVideoEnd: this._onEnd,
        onVideoFullscreenPlayerWillPresent: this._onFullscreenPlayerWillPresent,
        onVideoFullscreenPlayerDidPresent: this._onFullscreenPlayerDidPresent,
        onVideoFullscreenPlayerWillDismiss: this._onFullscreenPlayerWillDismiss,
        onVideoFullscreenPlayerDidDismiss: this._onFullscreenPlayerDidDismiss,
        onReadyForDisplay: this._onReadyForDisplay,
        onPlaybackStalled: this._onPlaybackStalled,
        onPlaybackResume: this._onPlaybackResume,
        onPlaybackRateChange: this._onPlaybackRateChange
      });

      return _react2.default.createElement(ExponentVideo, babelHelpers.extends({
        ref: this._assignRoot
      }, nativeProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        }
      }));
    }
  }]);
  return Video;
}(Component), _class.RESIZE_MODE_CONTAIN = 'contain', _class.RESIZE_MODE_COVER = 'cover', _class.RESIZE_MODE_STRETCH = 'stretch', _temp2);
exports.default = Video;


Video.propTypes = babelHelpers.extends({
  src: PropTypes.object,
  seek: PropTypes.number,
  fullscreen: PropTypes.bool,

  source: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  resizeMode: PropTypes.string,
  repeat: PropTypes.bool,
  paused: PropTypes.bool,
  muted: PropTypes.bool,
  volume: PropTypes.number,
  rate: PropTypes.number,
  controls: PropTypes.bool,
  currentTime: PropTypes.number,
  onLoadStart: PropTypes.func,
  onLoad: PropTypes.func,
  onError: PropTypes.func,
  onProgress: PropTypes.func,
  onSeek: PropTypes.func,
  onEnd: PropTypes.func,
  onFullscreenPlayerWillPresent: PropTypes.func,
  onFullscreenPlayerDidPresent: PropTypes.func,
  onFullscreenPlayerWillDismiss: PropTypes.func,
  onFullscreenPlayerDidDismiss: PropTypes.func,
  onReadyForDisplay: PropTypes.func,
  onPlaybackStalled: PropTypes.func,
  onPlaybackResume: PropTypes.func,
  onPlaybackRateChange: PropTypes.func,

  scaleX: _react2.default.PropTypes.number,
  scaleY: _react2.default.PropTypes.number,
  translateX: _react2.default.PropTypes.number,
  translateY: _react2.default.PropTypes.number,
  rotation: _react2.default.PropTypes.number
}, View.propTypes);

var ExponentVideo = requireNativeComponent('ExponentVideo', Video, {
  nativeOnly: {
    src: true,
    seek: true,
    fullscreen: true,
    onVideoLoadStart: true,
    onVideoLoad: true,
    onVideoError: true,
    onVideoProgress: true,
    onVideoSeek: true,
    onVideoEnd: true,
    onVideoFullscreenPlayerWillPresent: true,
    onVideoFullscreenPlayerDidPresent: true,
    onVideoFullscreenPlayerWillDismiss: true,
    onVideoFullscreenPlayerDidDismiss: true
  }
});