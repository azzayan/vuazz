Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _class,
    _temp,
    _jsxFileName = '/home/az/dev/projects/vuazz-mobile/node_modules/react-native-searchbar/index.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _MaterialIcons = require('@expo/vector-icons/MaterialIcons');

var _MaterialIcons2 = babelHelpers.interopRequireDefault(_MaterialIcons);

var _collection = require('lodash/collection');

var _function = require('lodash/function');

var INITIAL_TOP = _reactNative.Platform.OS === 'ios' ? -80 : -60;

var Search = (_temp = _class = function (_Component) {
  babelHelpers.inherits(Search, _Component);

  function Search(props) {
    babelHelpers.classCallCheck(this, Search);

    var _this = babelHelpers.possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props));

    _this.getValue = function () {
      return _this.state.input;
    };

    _this.show = function () {
      var _this$props = _this.props,
          animate = _this$props.animate,
          animationDuration = _this$props.animationDuration,
          clearOnShow = _this$props.clearOnShow;

      if (clearOnShow) {
        _this.setState({ input: '' });
      }
      _this.setState({ show: true });
      if (animate) {
        _reactNative.Animated.timing(_this.state.top, {
          toValue: 0,
          duration: animationDuration
        }).start();
      } else {
        _this.setState({ top: new _reactNative.Animated.Value(0) });
      }
    };

    _this.hide = function () {
      var _this$props2 = _this.props,
          onHide = _this$props2.onHide,
          animate = _this$props2.animate,
          animationDuration = _this$props2.animationDuration;

      if (onHide) {
        onHide(_this.state.input);
      }
      if (animate) {
        _reactNative.Animated.timing(_this.state.top, {
          toValue: INITIAL_TOP,
          duration: animationDuration
        }).start();
        setTimeout(function () {
          _this._doHide();
        }, animationDuration);
      } else {
        _this.setState({ top: new _reactNative.Animated.Value(INITIAL_TOP) });
        _this._doHide();
      }
    };

    _this._doHide = function () {
      var clearOnHide = _this.props.clearOnHide;

      _this.setState({ show: false });
      if (clearOnHide) {
        _this.setState({ input: '' });
      }
    };

    _this._handleX = function () {
      var onX = _this.props.onX;

      _this._clearInput();
      if (onX) onX();
    };

    _this._clearInput = function () {
      _this.setState({ input: '' });
      _this._onChangeText('');
    };

    _this._onChangeText = function (input) {
      var _this$props3 = _this.props,
          handleChangeText = _this$props3.handleChangeText,
          handleSearch = _this$props3.handleSearch,
          handleResults = _this$props3.handleResults;

      _this.setState({ input: input });
      if (handleChangeText) {
        handleChangeText(input);
      }
      if (handleSearch) {
        handleSearch(input);
      } else {
        (0, _function.debounce)(function () {
          if (handleResults) {
            var results = _this._internalSearch(input);
            handleResults(results);
          }
        }, 500)();
      }
    };

    _this._internalSearch = function (input) {
      var _this$props4 = _this.props,
          data = _this$props4.data,
          allDataOnEmptySearch = _this$props4.allDataOnEmptySearch;

      if (input === '') {
        return allDataOnEmptySearch ? data : [];
      }
      return (0, _collection.filter)(data, function (item) {
        return _this._depthFirstSearch(item, input);
      });
    };

    _this._depthFirstSearch = function (collection, input) {
      var type = typeof collection;

      if (type === 'string' || type === 'number' || type === 'boolean') {
        return (0, _collection.includes)(collection.toString().toLowerCase(), input.toString().toLowerCase());
      }
      return (0, _collection.some)(collection, function (item) {
        return _this._depthFirstSearch(item, input);
      });
    };

    _this.render = function () {
      var _this$props5 = _this.props,
          placeholder = _this$props5.placeholder,
          heightAdjust = _this$props5.heightAdjust,
          backgroundColor = _this$props5.backgroundColor,
          iconColor = _this$props5.iconColor,
          textColor = _this$props5.textColor,
          placeholderTextColor = _this$props5.placeholderTextColor,
          onBack = _this$props5.onBack,
          hideBack = _this$props5.hideBack,
          hideX = _this$props5.hideX,
          iOSPadding = _this$props5.iOSPadding,
          iOSHideShadow = _this$props5.iOSHideShadow,
          _onSubmitEditing = _this$props5.onSubmitEditing,
          _onFocus = _this$props5.onFocus,
          focusOnLayout = _this$props5.focusOnLayout,
          autoCorrect = _this$props5.autoCorrect,
          autoCapitalize = _this$props5.autoCapitalize,
          fontFamily = _this$props5.fontFamily,
          backButton = _this$props5.backButton,
          backButtonAccessibilityLabel = _this$props5.backButtonAccessibilityLabel,
          closeButton = _this$props5.closeButton,
          closeButtonAccessibilityLabel = _this$props5.closeButtonAccessibilityLabel,
          backCloseSize = _this$props5.backCloseSize,
          fontSize = _this$props5.fontSize;

      return _react2.default.createElement(
        _reactNative.Animated.View,
        { style: [styles.container, {
            top: _this.state.top,
            shadowOpacity: iOSHideShadow ? 0 : 0.7
          }], __source: {
            fileName: _jsxFileName,
            lineNumber: 222
          }
        },
        _this.state.show && _react2.default.createElement(
          _reactNative.View,
          { style: [styles.navWrapper, { backgroundColor: backgroundColor }], __source: {
              fileName: _jsxFileName,
              lineNumber: 228
            }
          },
          _reactNative.Platform.OS === 'ios' && iOSPadding && _react2.default.createElement(_reactNative.View, { style: { height: 20 }, __source: {
              fileName: _jsxFileName,
              lineNumber: 231
            }
          }),
          _react2.default.createElement(
            _reactNative.View,
            { style: [styles.nav, { height: (_reactNative.Platform.OS === 'ios' ? 52 : 62) + heightAdjust }],
              __source: {
                fileName: _jsxFileName,
                lineNumber: 233
              }
            },
            !hideBack && _react2.default.createElement(
              _reactNative.TouchableOpacity,
              {
                accessible: true,
                accessibilityComponentType: 'button',
                accessibilityLabel: backButtonAccessibilityLabel,
                onPress: onBack || _this.hide, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 240
                }
              },
              backButton ? _react2.default.createElement(
                _reactNative.View,
                { style: { width: backCloseSize, height: backCloseSize }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 247
                  }
                },
                backButton
              ) : _react2.default.createElement(_MaterialIcons2.default, {
                name: 'arrow-back',
                size: backCloseSize,
                style: {
                  color: iconColor,
                  padding: heightAdjust / 2 + 10
                },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 249
                }
              })
            ),
            _react2.default.createElement(_reactNative.TextInput, {
              ref: function ref(_ref) {
                return _this.textInput = _ref;
              },
              onLayout: function onLayout() {
                return focusOnLayout && _this.textInput.focus();
              },
              style: [styles.input, {
                fontSize: fontSize, color: textColor, fontFamily: fontFamily,
                marginLeft: hideBack ? 30 : 0,
                marginTop: _reactNative.Platform.OS === 'ios' ? heightAdjust / 2 + 10 : 0
              }],
              onChangeText: function onChangeText(input) {
                return _this._onChangeText(input);
              },
              onSubmitEditing: function onSubmitEditing() {
                return _onSubmitEditing ? _onSubmitEditing() : null;
              },
              onFocus: function onFocus() {
                return _onFocus ? _onFocus() : null;
              },
              placeholder: placeholder,
              placeholderTextColor: placeholderTextColor,
              value: _this.state.input,
              underlineColorAndroid: 'transparent',
              returnKeyType: 'search',
              autoCorrect: autoCorrect,
              autoCapitalize: autoCapitalize,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 260
              }
            }),
            _react2.default.createElement(
              _reactNative.TouchableOpacity,
              {
                accessible: true,
                accessibilityComponentType: 'button',
                accessibilityLabel: closeButtonAccessibilityLabel,
                onPress: hideX || _this.state.input === '' ? null : _this._handleX, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 282
                }
              },
              closeButton ? _react2.default.createElement(
                _reactNative.View,
                { style: { width: backCloseSize, height: backCloseSize }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 289
                  }
                },
                closeButton
              ) : _react2.default.createElement(_MaterialIcons2.default, {
                name: 'close',
                size: backCloseSize,
                style: {
                  color: hideX || _this.state.input == '' ? backgroundColor : iconColor,
                  padding: heightAdjust / 2 + 10
                },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 291
                }
              })
            )
          )
        )
      );
    };

    _this.state = {
      input: '',
      show: props.showOnLoad,
      top: new _reactNative.Animated.Value(props.showOnLoad ? 0 : INITIAL_TOP + props.heightAdjust)
    };
    return _this;
  }

  return Search;
}(_react.Component), _class.propTypes = {
  data: _react.PropTypes.array,
  placeholder: _react.PropTypes.string,
  handleChangeText: _react.PropTypes.func,
  handleSearch: _react.PropTypes.func,
  handleResults: _react.PropTypes.func,
  onSubmitEditing: _react.PropTypes.func,
  onFocus: _react.PropTypes.func,
  onHide: _react.PropTypes.func,
  onBack: _react.PropTypes.func,
  onX: _react.PropTypes.func,
  backButton: _react.PropTypes.object,
  backButtonAccessibilityLabel: _react.PropTypes.string,
  closeButton: _react.PropTypes.object,
  closeButtonAccessibilityLabel: _react.PropTypes.string,
  backCloseSize: _react.PropTypes.number,
  fontSize: _react.PropTypes.number,
  heightAdjust: _react.PropTypes.number,
  backgroundColor: _react.PropTypes.string,
  iconColor: _react.PropTypes.string,
  textColor: _react.PropTypes.string,
  placeholderTextColor: _react.PropTypes.string,
  animate: _react.PropTypes.bool,
  animationDuration: _react.PropTypes.number,
  showOnLoad: _react.PropTypes.bool,
  hideBack: _react.PropTypes.bool,
  hideX: _react.PropTypes.bool,
  iOSPadding: _react.PropTypes.bool,
  iOSHideShadow: _react.PropTypes.bool,
  clearOnShow: _react.PropTypes.bool,
  clearOnHide: _react.PropTypes.bool,
  focusOnLayout: _react.PropTypes.bool,
  autoCorrect: _react.PropTypes.bool,
  autoCapitalize: _react.PropTypes.string,
  fontFamily: _react.PropTypes.string,
  allDataOnEmptySearch: _react.PropTypes.bool
}, _class.defaultProps = {
  data: [],
  placeholder: 'Search',
  backButtonAccessibilityLabel: 'Navigate up',
  closeButtonAccessibilityLabel: 'Clear search text',
  heightAdjust: 0,
  backgroundColor: 'white',
  iconColor: 'gray',
  textColor: 'gray',
  placeholderTextColor: 'lightgray',
  animate: true,
  animationDuration: 200,
  showOnLoad: false,
  hideBack: false,
  hideX: false,
  iOSPadding: true,
  iOSHideShadow: false,
  clearOnShow: false,
  clearOnHide: true,
  focusOnLayout: true,
  autoCorrect: true,
  autoCapitalize: 'sentences',
  fontFamily: 'System',
  allDataOnEmptySearch: false,
  backCloseSize: 28,
  fontSize: 20
}, _temp);
exports.default = Search;


var styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 10,
    position: 'absolute',
    elevation: 2,
    shadowRadius: 5
  },
  navWrapper: {
    width: _reactNative.Dimensions.get('window').width
  },
  nav: babelHelpers.extends({}, _reactNative.Platform.select({
    android: {
      borderBottomColor: 'lightgray',
      borderBottomWidth: _reactNative.StyleSheet.hairlineWidth
    }
  }), {
    flex: 1,
    flexBasis: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }),
  input: babelHelpers.extends({}, _reactNative.Platform.select({
    ios: { height: 30 },
    android: { height: 50 }
  }), {
    width: _reactNative.Dimensions.get('window').width - 120
  })
});