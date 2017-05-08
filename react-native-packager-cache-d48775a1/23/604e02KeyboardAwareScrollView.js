Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/az/dev/projects/vuazz-mobile/node_modules/react-native-keyboard-aware-scroll-view/lib/KeyboardAwareScrollView.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _KeyboardAwareMixin = require('./KeyboardAwareMixin');

var _KeyboardAwareMixin2 = babelHelpers.interopRequireDefault(_KeyboardAwareMixin);

var KeyboardAwareScrollView = _react2.default.createClass({
  displayName: 'KeyboardAwareScrollView',

  propTypes: babelHelpers.extends({}, _reactNative.ScrollView.propTypes, {
    viewIsInsideTabBar: _react.PropTypes.bool,
    resetScrollToCoords: _react.PropTypes.shape({
      x: _react.PropTypes.number,
      y: _react.PropTypes.number
    })
  }),
  mixins: [_KeyboardAwareMixin2.default],

  componentWillMount: function componentWillMount() {
    this.setViewIsInsideTabBar(this.props.viewIsInsideTabBar);
    this.setResetScrollToCoords(this.props.resetScrollToCoords);
  },

  getScrollResponder: function getScrollResponder() {
    return this.refs._rnkasv_keyboardView.getScrollResponder();
  },


  render: function render() {
    var _this = this;

    return _react2.default.createElement(
      _reactNative.ScrollView,
      babelHelpers.extends({
        ref: '_rnkasv_keyboardView',
        keyboardDismissMode: 'interactive',
        contentInset: { bottom: this.state.keyboardSpace },
        showsVerticalScrollIndicator: true,
        scrollEventThrottle: 0
      }, this.props, {
        onScroll: function onScroll(e) {
          _this.handleOnScroll(e);
          _this.props.onScroll && _this.props.onScroll(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }),
      this.props.children
    );
  }
});

exports.default = KeyboardAwareScrollView;