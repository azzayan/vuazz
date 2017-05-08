Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _class,
    _temp2,
    _jsxFileName = '/home/az/dev/projects/vuazz-mobile/node_modules/react-native-drawer/index.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _tweener = require('./tweener');

var _tweener2 = babelHelpers.interopRequireDefault(_tweener);

var deviceScreen = _reactNative.Dimensions.get('window');
var DOUBLE_TAP_INTERVAL = 500;
var TAP_DURATION = 250;
var propsWhomRequireUpdate = ['closedDrawerOffset', 'openDrawerOffset', 'type', 'styles'];

var Drawer = (_temp2 = _class = function (_Component) {
  babelHelpers.inherits(Drawer, _Component);

  function Drawer() {
    var _ref;

    var _temp, _this, _ret;

    babelHelpers.classCallCheck(this, Drawer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = Drawer.__proto__ || Object.getPrototypeOf(Drawer)).call.apply(_ref, [this].concat(args))), _this), _this._left = 0, _this._prevLeft = 0, _this._offsetOpen = 0, _this._offsetClosed = 0, _this._open = false, _this._panning = false, _this._tweenPending = false, _this._activeTween = null, _this._lastPress = 0, _this._panStartTime = 0, _this._syncAfterUpdate = false, _this._interactionHandle = null, _this.state = {
      viewport: deviceScreen
    }, _this.getChildContext = function () {
      return { drawer: _this };
    }, _this.initialize = function (props) {
      var fullWidth = _this.state.viewport.width;
      _this._offsetClosed = _this.getClosedOffset(props, _this.state.viewport);
      _this._offsetOpen = _this.getOpenOffset(props, _this.state.viewport);

      _this._prevLeft = _this._left;

      var styles = {
        container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }
      };

      styles.main = babelHelpers.extends({
        position: 'absolute',
        top: 0
      }, { borderWidth: 0 }, _this.props.styles.main);

      styles.drawer = babelHelpers.extends({
        position: 'absolute',
        top: 0
      }, { borderWidth: 0 }, _this.props.styles.drawer);

      if (props.initializeOpen || props.open) {
        _this._open = true;
        _this._left = fullWidth - _this._offsetOpen;
        styles.main[_this.props.side] = 0;
        styles.drawer[_this.props.side] = 0;
        if (props.type === 'static') styles.main[_this.props.side] = fullWidth - _this._offsetOpen;
        if (props.type === 'displace') styles.main[_this.props.side] = fullWidth - _this._offsetOpen;
      } else {
        _this._open = false;
        _this._left = _this._offsetClosed;
        styles.main[_this.props.side] = _this._offsetClosed;
        if (props.type === 'static') styles.drawer[_this.props.side] = 0;
        if (props.type === 'overlay') styles.drawer[_this.props.side] = _this._offsetClosed + _this._offsetOpen - fullWidth;
        if (props.type === 'displace') styles.drawer[_this.props.side] = -fullWidth + _this._offsetClosed + _this._offsetOpen;
      }

      if (_this.main) {
        _this.drawer.setNativeProps({ style: { left: styles.drawer.left } });
        _this.main.setNativeProps({ style: { left: styles.main.left } });
      } else {
        _this.stylesheet = _reactNative.StyleSheet.create(styles);
        _this.responder = _reactNative.PanResponder.create({
          onStartShouldSetPanResponder: _this.onStartShouldSetPanResponder,
          onStartShouldSetPanResponderCapture: _this.onStartShouldSetPanResponderCapture,
          onMoveShouldSetPanResponder: _this.onMoveShouldSetPanResponder,
          onMoveShouldSetPanResponderCapture: _this.onMoveShouldSetPanResponderCapture,
          onPanResponderMove: _this.onPanResponderMove,
          onPanResponderRelease: _this.onPanResponderRelease,
          onPanResponderTerminate: _this.onPanResponderTerminate
        });
      }

      _this.resync(null, props);
    }, _this.updatePosition = function () {
      var mainProps = {};
      var drawerProps = {};
      var ratio = (_this._left - _this._offsetClosed) / (_this.getOpenLeft() - _this._offsetClosed);

      switch (_this.props.type) {
        case 'overlay':
          drawerProps[_this.props.side] = -_this.state.viewport.width + _this._offsetOpen + _this._left;
          mainProps[_this.props.side] = _this._offsetClosed;
          break;
        case 'static':
          mainProps[_this.props.side] = _this._left;
          drawerProps[_this.props.side] = 0;
          break;
        case 'displace':
          mainProps[_this.props.side] = _this._left;
          drawerProps[_this.props.side] = -_this.state.viewport.width + _this._left + _this._offsetOpen;
          break;
      }

      var mainOverlayProps = null;
      var drawerOverlayProps = null;
      if (_this.props.tweenHandler) {
        var propsFrag = _this.props.tweenHandler(ratio, _this.props.side);
        mainProps = babelHelpers.extends(mainProps, propsFrag.main);
        drawerProps = babelHelpers.extends(drawerProps, propsFrag.drawer);
        mainOverlayProps = propsFrag.mainOverlay;
        drawerOverlayProps = propsFrag.drawerOverlay;
      }
      if (_this.main && _this.drawer && _this.mainOverlay && _this.drawerOverlay) {
        _this.drawer.setNativeProps({ style: drawerProps });
        _this.main.setNativeProps({ style: mainProps });
        if (mainOverlayProps) _this.mainOverlay.setNativeProps({ style: mainOverlayProps });
        if (drawerOverlayProps) _this.drawerOverlay.setNativeProps({ style: drawerOverlayProps });
      }
    }, _this.onPanResponderTerminate = function (e, gestureState) {
      _this._panning = false;
      _this.shouldOpenDrawer(gestureState.dx) ? _this.open() : _this.close();
    }, _this.onStartShouldSetPanResponderCapture = function (e, gestureState) {
      if (_this.shouldCaptureGestures()) return _this.processShouldSet(e, gestureState);
      return false;
    }, _this.onStartShouldSetPanResponder = function (e, gestureState) {
      if (!_this.shouldCaptureGestures()) return _this.processShouldSet(e, gestureState);
      return false;
    }, _this.onMoveShouldSetPanResponderCapture = function (e, gestureState) {
      if (_this.shouldCaptureGestures() && _this.props.negotiatePan) return _this.processMoveShouldSet(e, gestureState);
      return false;
    }, _this.onMoveShouldSetPanResponder = function (e, gestureState) {
      if (!_this.shouldCaptureGestures() && _this.props.negotiatePan) return _this.processMoveShouldSet(e, gestureState);
      return false;
    }, _this.onPanResponderMove = function (e, gestureState) {
      if (!_this.props.acceptPan) return false;

      if (_this._open ^ gestureState.dx < 0 ^ _this.props.side === 'right') return false;

      var dx = _this.props.side === 'right' ? gestureState.dx * -1 : gestureState.dx;
      var left = _this._prevLeft + dx;
      left = Math.min(left, _this.getOpenLeft());
      left = Math.max(left, _this.getClosedLeft());
      _this._left = left;

      _this.updatePosition();
      _this._panning = true;
    }, _this.onPanResponderRelease = function (e, gestureState) {
      _this._panning = false;
      if (Date.now() - _this._panStartTime < TAP_DURATION) _this.processTapGestures();
      if (Math.abs(gestureState.dx) < 50 && _this._activeTween) return;

      _this.shouldOpenDrawer(gestureState.dx) ? _this.open() : _this.close();
      _this.updatePosition();
      _this._prevLeft = _this._left;
    }, _this.processShouldSet = function (e, gestureState) {
      var inMask = _this.testPanResponderMask(e, gestureState);
      if (!inMask) return false;
      _this._panStartTime = Date.now();
      if (inMask && _this.shouldCaptureGestures()) return true;
      if (_this.props.negotiatePan) return false;
      if (!_this.props.acceptPan) return false;
      _this.terminateActiveTween();
      return true;
    }, _this.processMoveShouldSet = function (e, gestureState) {
      var inMask = _this.testPanResponderMask(e, gestureState);
      if (!inMask) return false;
      if (!_this.props.acceptPan) return false;

      if (!_this.props.negotiatePan || _this.props.disabled || !_this.props.acceptPan || _this._panning) return false;
      var swipeToLeft = gestureState.dx < 0 ? true : false;
      var swipeToRight = gestureState.dx > 0 ? true : false;
      var swipeUpDown = Math.abs(gestureState.dy) >= Math.abs(gestureState.dx) ? true : false;
      var swipeInCloseDirection = _this.props.side === 'left' ? swipeToLeft : swipeToRight;
      if (swipeUpDown || _this._open && !swipeInCloseDirection || !_this._open && swipeInCloseDirection) {
        return false;
      }

      _this.terminateActiveTween();
      return true;
    }, _this.processTapGestures = function () {
      if (_this._activeTween) return false;
      if (_this.props.acceptTap || _this.props.tapToClose && _this._open) {
        _this._open ? _this.close() : _this.open();
        return true;
      }
      if (_this.props.acceptDoubleTap) {
        var now = new Date().getTime();
        var timeDelta = now - _this._lastPress;
        _this._lastPress = now;
        if (timeDelta < DOUBLE_TAP_INTERVAL) {
          _this._open ? _this.close() : _this.open();
          return true;
        }
      }
      return false;
    }, _this.testPanResponderMask = function (e, gestureState) {
      if (_this.props.disabled) return false;

      if (_this.context.drawer && _this.context.drawer._open) return false;
      if (_this._childDrawer && _this._childDrawer._open) return false;

      var x0 = e.nativeEvent.pageX;
      var deltaOpen = _this.props.side === 'left' ? _this.state.viewport.width - x0 : x0;
      var deltaClose = _this.props.side === 'left' ? x0 : _this.state.viewport.width - x0;

      if (_this._open && deltaOpen > _this.getOpenMask()) return false;
      if (!_this._open && deltaClose > _this.getClosedMask()) return false;
      return true;
    }, _this.terminateActiveTween = function () {
      if (_this._activeTween) {
        _this._activeTween.terminate();
        _this._activeTween = null;
      }
    }, _this.open = function (type) {
      var start = _this._left;
      var end = _this.getOpenLeft();

      if (_this._activeTween) return;
      if (type !== 'force' && start - end === 0 && _this._open === true) return;

      _this.props.onOpenStart && _this.props.onOpenStart();
      _this.setInteractionHandle();
      _this._activeTween = (0, _tweener2.default)({
        start: _this._left,
        end: _this.getOpenLeft(),
        duration: _this.props.tweenDuration,
        easingType: _this.props.tweenEasing,
        onFrame: function onFrame(tweenValue) {
          _this._left = tweenValue;
          _this.updatePosition();
        },
        onEnd: function onEnd() {
          _this._activeTween = null;
          _this._open = true;
          _this._prevLeft = _this._left;
          _this.adjustForCaptureGestures();
          _this.props.onOpen();
          _this.clearInteractionHandle();
        }
      });
    }, _this.close = function (type) {
      var start = _this._left;
      var end = _this.getClosedLeft();

      if (_this._activeTween) return;
      if (type !== 'force' && start - end === 0 && _this._open === false) return;

      _this.props.onCloseStart && _this.props.onCloseStart();
      _this.setInteractionHandle();
      _this._activeTween = (0, _tweener2.default)({
        start: start,
        end: end,
        easingType: _this.props.tweenEasing,
        duration: _this.props.tweenDuration,
        onFrame: function onFrame(tweenValue) {
          _this._left = tweenValue;
          _this.updatePosition();
        },
        onEnd: function onEnd() {
          _this._activeTween = null;
          _this._open = false;
          _this._prevLeft = _this._left;
          _this.adjustForCaptureGestures();
          _this.props.onClose();
          _this.clearInteractionHandle();
        }
      });
    }, _this.toggle = function () {
      _this._open ? _this.close() : _this.open();
    }, _this.handleSetViewport = function (e) {
      var viewport = e.nativeEvent.layout;
      var oldViewport = _this.state.viewport;
      if (viewport.width === oldViewport.width && viewport.height === oldViewport.height) return;
      var didRotationChange = viewport.width !== oldViewport.width;
      _this.resync(viewport, null, didRotationChange);
    }, _this.resync = function (viewport, props, didRotationChange) {
      if (didRotationChange) _this._syncAfterUpdate = true;
      viewport = viewport || _this.state.viewport;
      props = props || _this.props;
      _this._offsetClosed = _this.getClosedOffset(props, viewport);
      _this._offsetOpen = _this.getOpenOffset(props, viewport);
      _this.setState({ viewport: viewport });
    }, _this.requiresResync = function (nextProps) {
      for (var i = 0; i < propsWhomRequireUpdate.length; i++) {
        var key = propsWhomRequireUpdate[i];
        if (_this.props[key] !== nextProps[key]) return true;
      }
    }, _this.getOpenLeft = function () {
      return _this.state.viewport.width - _this._offsetOpen;
    }, _this.getClosedLeft = function () {
      return _this._offsetClosed;
    }, _this.getHeight = function () {
      return _this.state.viewport.height;
    }, _this.getMainWidth = function () {
      return _this.state.viewport.width - _this._offsetClosed;
    }, _this.getDrawerWidth = function () {
      return _this.state.viewport.width - _this._offsetOpen;
    }, _this.getOpenMask = function () {
      if (_this.props.panCloseMask && _this.props.panCloseMask % 1 === 0) return _this.props.panCloseMask;
      if (_this.props.panCloseMask) return _this.state.viewport.width * _this.props.panCloseMask;
      return Math.max(0.05, _this._offsetOpen);
    }, _this.getClosedMask = function () {
      if (_this.props.panOpenMask && _this.props.panOpenMask % 1 === 0) return _this.props.panOpenMask;
      if (_this.props.panOpenMask) return _this.state.viewport.width * _this.props.panOpenMask;
      return Math.max(0.05, _this._offsetClosed);
    }, _this.getOpenOffset = function (props, viewport) {
      if (typeof props.openDrawerOffset === 'function') return props.openDrawerOffset(viewport);
      return props.openDrawerOffset % 1 === 0 ? props.openDrawerOffset : props.openDrawerOffset * viewport.width;
    }, _this.getClosedOffset = function (props, viewport) {
      if (typeof props.closedDrawerOffset === 'function') return props.closedDrawerOffset(viewport);
      return props.closedDrawerOffset % 1 === 0 ? props.closedDrawerOffset : props.closedDrawerOffset * viewport.width;
    }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
  }

  babelHelpers.createClass(Drawer, [{
    key: '_registerChildDrawer',
    value: function _registerChildDrawer(drawer) {
      this._childDrawer = drawer;
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (this.context.drawer) this.context.drawer._registerChildDrawer(this);
      if (this.props.openDrawerThreshold && process.env.NODE_ENV !== 'production') console.error('react-native-drawer: openDrawerThreshold is obsolete. Use panThreshold instead.');
      if (this.props.panStartCompensation && process.env.NODE_ENV !== 'production') console.error('react-native-drawer: panStartCompensation is deprecated.');
      if (this.props.relativeDrag && process.env.NODE_ENV !== 'production') console.error('react-native-drawer: relativeDrag is deprecated.');
      this.initialize(this.props);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.requiresResync(nextProps)) this.resync(null, nextProps);

      if (nextProps.open !== null && this._open !== nextProps.open) {
        this._syncAfterUpdate = true;
        this._open = nextProps.open;
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this._syncAfterUpdate) {
        this._syncAfterUpdate = false;
        this._open ? this.open('force') : this.close('force');
      }
    }
  }, {
    key: 'shouldOpenDrawer',
    value: function shouldOpenDrawer(dx) {
      var hasActiveHeading = this._open ^ dx > 0 ^ this.props.side === 'right';
      if (!hasActiveHeading) return this._open;else return this._open ^ Math.abs(dx) > this.state.viewport.width * this.props.panThreshold;
    }
  }, {
    key: 'shouldCaptureGestures',
    value: function shouldCaptureGestures() {
      if (this.props.captureGestures === true) return true;
      if (this.props.captureGestures === 'closed' && this._open === false) return true;
      if (this.props.captureGestures === 'open' && this._open === true) return true;
      return false;
    }
  }, {
    key: 'adjustForCaptureGestures',
    value: function adjustForCaptureGestures() {
      if (!this.props.captureGestures) return;
      var shouldCapture = this.shouldCaptureGestures();
      if (this.mainOverlay && this.drawerOverlay) {
        this.mainOverlay.setNativeProps({ pointerEvents: shouldCapture && this._open ? 'auto' : 'none' });
        this.drawerOverlay.setNativeProps({ pointerEvents: shouldCapture && !this._open ? 'auto' : 'none' });
      }
    }
  }, {
    key: 'setInteractionHandle',
    value: function setInteractionHandle() {
      if (this._interactionHandle) _reactNative.InteractionManager.clearInteractionHandle(this._interactionHandle);
      if (this.props.useInteractionManager) this._interactionHandle = _reactNative.InteractionManager.createInteractionHandle();
    }
  }, {
    key: 'clearInteractionHandle',
    value: function clearInteractionHandle() {
      if (this._interactionHandle) _reactNative.InteractionManager.clearInteractionHandle(this._interactionHandle);
    }
  }, {
    key: 'render',
    value: function render() {
      var first = this.props.type === 'overlay' ? this.renderMain() : this.renderDrawer();
      var second = this.props.type === 'overlay' ? this.renderDrawer() : this.renderMain();

      return _react2.default.createElement(
        _reactNative.View,
        {
          key: 'drawerContainer',
          onLayout: this.handleSetViewport,
          style: this.stylesheet.container,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 507
          }
        },
        first,
        second
      );
    }
  }, {
    key: 'renderMain',
    value: function renderMain() {
      var _this2 = this;

      return _react2.default.createElement(
        _reactNative.View,
        babelHelpers.extends({}, this.responder.panHandlers, {
          key: 'main',
          ref: function ref(c) {
            return _this2.main = c;
          },
          style: [this.stylesheet.main, { height: this.getHeight(), width: this.getMainWidth() }],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 520
          }
        }),
        this.props.children,
        _react2.default.createElement(_reactNative.View, {
          pointerEvents: this._open && this.shouldCaptureGestures() ? 'auto' : 'none',
          ref: function ref(c) {
            return _this2.mainOverlay = c;
          },
          style: [styles.overlay, this.props.styles && this.props.styles.mainOverlay],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 527
          }
        })
      );
    }
  }, {
    key: 'renderDrawer',
    value: function renderDrawer() {
      var _this3 = this;

      return _react2.default.createElement(
        _reactNative.View,
        babelHelpers.extends({}, this.responder.panHandlers, {
          key: 'drawer',
          ref: function ref(c) {
            return _this3.drawer = c;
          },
          elevation: this.props.elevation,
          style: [this.stylesheet.drawer, { height: this.getHeight(), width: this.getDrawerWidth() }],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 538
          }
        }),
        this.props.content,
        _react2.default.createElement(_reactNative.View, {
          pointerEvents: !this._open && this.shouldCaptureGestures() ? 'auto' : 'none',
          ref: function ref(c) {
            return _this3.drawerOverlay = c;
          },
          style: [styles.overlay, this.props.styles && this.props.styles.drawerOverlay],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 546
          }
        })
      );
    }
  }]);
  return Drawer;
}(_react.Component), _class.tweenPresets = {
  parallax: function parallax(ratio) {
    var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'left';

    var drawer = babelHelpers.defineProperty({}, side, -150 * (1 - ratio));
    return { drawer: drawer };
  }
}, _class.propTypes = {
  acceptDoubleTap: _react.PropTypes.bool,
  acceptPan: _react.PropTypes.bool,
  acceptTap: _react.PropTypes.bool,
  captureGestures: _react.PropTypes.oneOf([true, false, 'open', 'closed']),
  children: _react.PropTypes.node,
  closedDrawerOffset: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]),
  content: _react.PropTypes.node,
  disabled: _react.PropTypes.bool,
  elevation: _react.PropTypes.number,
  initializeOpen: _react.PropTypes.bool,
  open: _react.PropTypes.bool,
  negotiatePan: _react.PropTypes.bool,
  onClose: _react.PropTypes.func,
  onCloseStart: _react.PropTypes.func,
  onOpen: _react.PropTypes.func,
  onOpenStart: _react.PropTypes.func,
  openDrawerOffset: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]),
  panThreshold: _react.PropTypes.number,
  panCloseMask: _react.PropTypes.number,
  panOpenMask: _react.PropTypes.number,
  side: _react.PropTypes.oneOf(['left', 'right']),
  styles: _react.PropTypes.object,
  tapToClose: _react.PropTypes.bool,
  tweenDuration: _react.PropTypes.number,
  tweenEasing: _react.PropTypes.string,
  tweenHandler: _react.PropTypes.func,
  type: _react.PropTypes.oneOf(['overlay', 'static', 'displace']),
  useInteractionManager: _react.PropTypes.bool,

  panStartCompensation: _react.PropTypes.bool,
  openDrawerThreshold: _react.PropTypes.any
}, _class.defaultProps = {
  open: null,
  initializeOpen: false,

  type: 'displace',
  closedDrawerOffset: 0,
  openDrawerOffset: 0,
  panThreshold: 0.25,
  panOpenMask: null,
  panCloseMask: null,

  tweenHandler: null,
  tweenDuration: 250,
  tweenEasing: 'linear',

  disabled: false,
  negotiatePan: false,
  captureGestures: 'open',
  acceptDoubleTap: false,
  acceptTap: false,
  acceptPan: true,
  tapToClose: false,

  styles: {},
  elevation: 0,
  onOpen: function onOpen() {},
  onClose: function onClose() {},
  side: 'left',

  useInteractionManager: false
}, _class.contextTypes = { drawer: _react.PropTypes.object }, _class.childContextTypes = { drawer: _react.PropTypes.object }, _temp2);
exports.default = Drawer;


var styles = _reactNative.StyleSheet.create({
  overlay: {
    right: 0,
    left: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    backgroundColor: 'transparent'
  }
});