Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _reactNative = require('react-native');

var _reactNative2 = babelHelpers.interopRequireDefault(_reactNative);

var _reactTimerMixin = require('react-timer-mixin');

var _reactTimerMixin2 = babelHelpers.interopRequireDefault(_reactTimerMixin);

var _KAM_DEFAULT_TAB_BAR_HEIGHT = 49;
var _KAM_KEYBOARD_OPENING_TIME = 250;
var _KAM_EXTRA_HEIGHT = 75;

var KeyboardAwareMixin = {
  mixins: [_reactTimerMixin2.default],
  propTypes: {
    enableAutoAutomaticScroll: _react.PropTypes.bool,
    extraHeight: _react.PropTypes.number,
    extraScrollHeight: _react.PropTypes.number,
    enableResetScrollToCoords: _react.PropTypes.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      enableAutoAutomaticScroll: true,
      extraHeight: _KAM_EXTRA_HEIGHT,
      extraScrollHeight: 0,
      enableResetScrollToCoords: true
    };
  },

  setViewIsInsideTabBar: function setViewIsInsideTabBar(viewIsInsideTabBar) {
    this.viewIsInsideTabBar = viewIsInsideTabBar;
    var keyboardSpace = viewIsInsideTabBar ? _KAM_DEFAULT_TAB_BAR_HEIGHT : 0;
    if (this.state.keyboardSpace !== keyboardSpace) {
      this.setState({ keyboardSpace: keyboardSpace });
    }
  },

  setResetScrollToCoords: function setResetScrollToCoords(coords) {
    this.resetCoords = coords;
  },

  getInitialState: function getInitialState(props) {
    this.viewIsInsideTabBar = false;
    this.keyboardWillShowEvent = undefined;
    this.keyboardWillHideEvent = undefined;
    return {
      keyboardSpace: 0
    };
  },

  updateKeyboardSpace: function updateKeyboardSpace(frames) {
    var _this = this;

    var keyboardSpace = frames.endCoordinates.height + this.props.extraScrollHeight;
    if (this.props.viewIsInsideTabBar) {
      keyboardSpace -= _KAM_DEFAULT_TAB_BAR_HEIGHT;
    }
    this.setState({ keyboardSpace: keyboardSpace });

    if (this.props.enableAutoAutomaticScroll) {
      var currentlyFocusedField = _reactNative.TextInput.State.currentlyFocusedField();
      if (!currentlyFocusedField) {
        return;
      }
      _reactNative.UIManager.viewIsDescendantOf(currentlyFocusedField, this.getScrollResponder().getInnerViewNode(), function (isAncestor) {
        if (isAncestor) {
          _reactNative.UIManager.measureInWindow(currentlyFocusedField, function (x, y, width, height) {
            if (y + height > frames.endCoordinates.screenY - _this.props.extraScrollHeight - _this.props.extraHeight) {
              _this.scrollToFocusedInputWithNodeHandle(currentlyFocusedField);
            }
          });
        }
      });
    }
    if (!this.resetCoords) {
      this.defaultResetScrollToCoords = this.position;
    }
  },

  resetKeyboardSpace: function resetKeyboardSpace() {
    var keyboardSpace = this.props.viewIsInsideTabBar ? _KAM_DEFAULT_TAB_BAR_HEIGHT + this.props.extraScrollHeight : this.props.extraScrollHeight;
    this.setState({ keyboardSpace: keyboardSpace });

    if (this.props.enableResetScrollToCoords === false) {
      return;
    } else if (this.resetCoords) {
      this.scrollToPosition(this.resetCoords.x, this.resetCoords.y, true);
    } else {
      this.scrollToPosition(this.defaultResetScrollToCoords.x, this.defaultResetScrollToCoords.y, true);
    }
  },

  componentDidMount: function componentDidMount() {
    this.keyboardWillShowEvent = _reactNative.Keyboard.addListener('keyboardWillShow', this.updateKeyboardSpace);
    this.keyboardWillHideEvent = _reactNative.Keyboard.addListener('keyboardWillHide', this.resetKeyboardSpace);
  },

  componentWillUnmount: function componentWillUnmount() {
    this.keyboardWillShowEvent && this.keyboardWillShowEvent.remove();
    this.keyboardWillHideEvent && this.keyboardWillHideEvent.remove();
  },

  scrollToPosition: function scrollToPosition(x, y) {
    var animated = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var scrollView = this.refs._rnkasv_keyboardView.getScrollResponder();
    scrollView.scrollResponderScrollTo({ x: x, y: y, animated: animated });
  },

  scrollToFocusedInput: function scrollToFocusedInput(reactNode) {
    var extraHeight = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.props.extraHeight;

    var scrollView = this.refs._rnkasv_keyboardView.getScrollResponder();
    this.setTimeout(function () {
      scrollView.scrollResponderScrollNativeHandleToKeyboard(reactNode, extraHeight, true);
    }, _KAM_KEYBOARD_OPENING_TIME);
  },

  scrollToFocusedInputWithNodeHandle: function scrollToFocusedInputWithNodeHandle(nodeID) {
    var extraHeight = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.props.extraHeight;

    var reactNode = _reactNative2.default.findNodeHandle(nodeID);
    this.scrollToFocusedInput(reactNode, extraHeight + this.props.extraScrollHeight);
  },

  position: { x: 0, y: 0 },

  defaultResetScrollToCoords: { x: 0, y: 0 },

  handleOnScroll: function handleOnScroll(e) {
    this.position = e.nativeEvent.contentOffset;
  }
};

exports.default = KeyboardAwareMixin;