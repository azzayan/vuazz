Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/az/dev/projects/vuazz-mobile/node_modules/react-native-router-flux/src/NavBar.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _Actions = require('./Actions');

var _Actions2 = babelHelpers.interopRequireDefault(_Actions);

var _menu_burger = require('./menu_burger.png');

var _menu_burger2 = babelHelpers.interopRequireDefault(_menu_burger);

var _back_chevron = require('./back_chevron.png');

var _back_chevron2 = babelHelpers.interopRequireDefault(_back_chevron);

var styles = _reactNative.StyleSheet.create({
  title: babelHelpers.extends({
    textAlign: 'center',
    marginTop: 10,
    fontSize: 18,
    color: '#0A0A0A',
    position: 'absolute'
  }, _reactNative.Platform.select({
    ios: {
      top: 20
    },
    android: {
      top: 5
    }
  }), {
    left: 0,
    right: 0
  }),
  header: babelHelpers.extends({
    backgroundColor: '#EFEFF2',
    paddingTop: 0,
    top: 0
  }, _reactNative.Platform.select({
    ios: {
      height: 64
    },
    android: {
      height: 54
    }
  }), {
    right: 0,
    left: 0,
    borderBottomWidth: 0.5,
    borderBottomColor: '#828287',
    position: 'absolute'
  }),
  backButton: babelHelpers.extends({
    width: 130,
    height: 37,
    position: 'absolute'
  }, _reactNative.Platform.select({
    ios: {
      top: 22
    },
    android: {
      top: 10
    }
  }), {
    left: 2,
    padding: 8,
    flexDirection: 'row'
  }),
  rightButton: babelHelpers.extends({
    width: 100,
    height: 37,
    position: 'absolute'
  }, _reactNative.Platform.select({
    ios: {
      top: 22
    },
    android: {
      top: 10
    }
  }), {
    right: 2,
    padding: 8
  }),
  leftButton: babelHelpers.extends({
    width: 100,
    height: 37,
    position: 'absolute'
  }, _reactNative.Platform.select({
    ios: {
      top: 20
    },
    android: {
      top: 8
    }
  }), {
    left: 2,
    padding: 8
  }),
  barRightButtonText: {
    color: 'rgb(0, 122, 255)',
    textAlign: 'right',
    fontSize: 17
  },
  barBackButtonText: {
    color: 'rgb(0, 122, 255)',
    textAlign: 'left',
    fontSize: 17,
    paddingLeft: 6
  },
  barLeftButtonText: {
    color: 'rgb(0, 122, 255)',
    textAlign: 'left',
    fontSize: 17
  },
  backButtonImage: {
    width: 13,
    height: 21
  },
  rightButtonIconStyle: {},
  defaultImageStyle: {
    height: 24,
    resizeMode: 'contain'
  }
});

var propTypes = {
  navigationState: _react.PropTypes.object,
  backButtonImage: _reactNative.Image.propTypes.source,
  wrapBy: _react.PropTypes.any,
  component: _react.PropTypes.any,
  backButtonTextStyle: _reactNative.Text.propTypes.style,
  leftButtonStyle: _reactNative.View.propTypes.style,
  leftButtonIconStyle: _reactNative.Image.propTypes.style,
  getTitle: _react.PropTypes.func,
  titleStyle: _reactNative.Text.propTypes.style,
  titleOpacity: _react.PropTypes.number,
  titleProps: _react.PropTypes.any,
  position: _react.PropTypes.object,
  navigationBarStyle: _reactNative.View.propTypes.style,
  renderTitle: _react.PropTypes.any
};

var contextTypes = {
  drawer: _react.PropTypes.object
};

var defaultProps = {
  drawerImage: _menu_burger2.default,
  backButtonImage: _back_chevron2.default,
  titleOpacity: 1
};

var NavBar = function (_React$Component) {
  babelHelpers.inherits(NavBar, _React$Component);

  function NavBar(props) {
    babelHelpers.classCallCheck(this, NavBar);

    var _this = babelHelpers.possibleConstructorReturn(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).call(this, props));

    _this.renderRightButton = _this.renderRightButton.bind(_this);
    _this.renderBackButton = _this.renderBackButton.bind(_this);
    _this.renderLeftButton = _this.renderLeftButton.bind(_this);
    _this.renderTitle = _this.renderTitle.bind(_this);
    return _this;
  }

  babelHelpers.createClass(NavBar, [{
    key: 'renderBackButton',
    value: function renderBackButton() {
      var state = this.props.navigationState;
      var childState = state.children[state.index];
      var BackButton = childState.component && childState.component.backButton || state.backButton || childState.backButton;
      var textButtonStyle = [styles.barBackButtonText, this.props.backButtonTextStyle, state.backButtonTextStyle, childState.backButtonTextStyle];
      var style = [styles.backButton, this.props.leftButtonStyle, state.leftButtonStyle, childState.leftButtonStyle];

      if (state.index === 0) {
        return null;
      }

      if (BackButton) {
        return _react2.default.createElement(BackButton, babelHelpers.extends({
          testID: 'backNavButton',
          textButtonStyle: textButtonStyle
        }, childState, {
          style: style,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 215
          }
        }));
      }
      var buttonImage = childState.backButtonImage || state.backButtonImage || this.props.backButtonImage;
      var onPress = childState.onBack || childState.component.onBack;
      if (onPress) {
        onPress = onPress.bind(null, state);
      } else {
        onPress = _Actions2.default.pop;
      }

      var text = childState.backTitle ? _react2.default.createElement(
        _reactNative.Text,
        { style: textButtonStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 233
          }
        },
        childState.backTitle
      ) : null;

      return _react2.default.createElement(
        _reactNative.TouchableOpacity,
        {
          testID: 'backNavButton',
          style: style,
          onPress: onPress,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 239
          }
        },
        buttonImage && !childState.hideBackImage && _react2.default.createElement(_reactNative.Image, {
          source: buttonImage,
          style: [styles.backButtonImage, this.props.leftButtonIconStyle, state.barButtonIconStyle, state.leftButtonIconStyle, childState.leftButtonIconStyle],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 245
          }
        }),
        text
      );
    }
  }, {
    key: 'renderRightButton',
    value: function renderRightButton(navProps) {
      var self = this;
      function tryRender(state, wrapBy) {
        if (!state) {
          return null;
        }
        var rightTitle = state.getRightTitle ? state.getRightTitle(navProps) : state.rightTitle;

        var textStyle = [styles.barRightButtonText, self.props.rightButtonTextStyle, state.rightButtonTextStyle];
        var style = [styles.rightButton, self.props.rightButtonStyle, state.rightButtonStyle];
        if (state.rightButton) {
          var Button = state.rightButton;
          if (wrapBy) {
            Button = wrapBy(Button);
          }
          return _react2.default.createElement(Button, babelHelpers.extends({}, self.props, state, {
            key: 'rightNavBarBtn',
            testID: 'rightNavButton',
            style: style,
            textButtonStyle: textStyle,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 278
            }
          }));
        }
        if (state.onRight && (rightTitle || state.rightButtonImage)) {
          var onPress = state.onRight.bind(null, state);
          return _react2.default.createElement(
            _reactNative.TouchableOpacity,
            {
              key: 'rightNavBarBtn',
              testID: 'rightNavButton',
              style: style,
              onPress: onPress,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 291
              }
            },
            rightTitle && _react2.default.createElement(
              _reactNative.Text,
              { style: textStyle, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 298
                }
              },
              rightTitle
            ),
            state.rightButtonImage && _react2.default.createElement(
              _reactNative.View,
              { style: { flex: 1, justifyContent: 'center', alignItems: 'flex-end' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 303
                }
              },
              _react2.default.createElement(_reactNative.Image, {
                source: state.rightButtonImage,
                style: state.rightButtonIconStyle,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 304
                }
              })
            )
          );
        }
        if (!!state.onRight ^ !!(typeof rightTitle !== 'undefined' || typeof state.rightButtonImage !== 'undefined')) {
          console.warn('Both onRight and rightTitle/rightButtonImage\n            must be specified for the scene: ' + state.name);
        }
        return null;
      }
      return tryRender(this.props.component, this.props.wrapBy) || tryRender(this.props);
    }
  }, {
    key: 'renderLeftButton',
    value: function renderLeftButton(navProps) {
      var self = this;
      var drawer = this.context.drawer;
      function tryRender(state, wrapBy) {
        var onPress = state.onLeft;
        var buttonImage = state.leftButtonImage;
        var menuIcon = state.drawerIcon;
        var style = [styles.leftButton, self.props.leftButtonStyle, state.leftButtonStyle];
        var textStyle = [styles.barLeftButtonText, self.props.leftButtonTextStyle, state.leftButtonTextStyle];
        var leftButtonStyle = [styles.defaultImageStyle, state.leftButtonIconStyle];
        var leftTitle = state.getLeftTitle ? state.getLeftTitle(navProps) : state.leftTitle;

        if (state.leftButton) {
          var Button = state.leftButton;
          if (wrapBy) {
            Button = wrapBy(Button);
          }
          return _react2.default.createElement(Button, babelHelpers.extends({}, self.props, state, {
            key: 'leftNavBarBtn',
            testID: 'leftNavButton',
            style: style,
            textStyle: textStyle,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 344
            }
          }));
        }

        if (!onPress && !!drawer && typeof drawer.toggle === 'function') {
          buttonImage = state.drawerImage;
          if (buttonImage || menuIcon) {
            onPress = drawer.toggle;
          }
          if (!menuIcon) {
            menuIcon = _react2.default.createElement(_reactNative.Image, {
              source: buttonImage,
              style: leftButtonStyle,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 362
              }
            });
          }
        }

        if (onPress && (leftTitle || buttonImage)) {
          onPress = onPress.bind(null, state);
          return _react2.default.createElement(
            _reactNative.TouchableOpacity,
            {
              key: 'leftNavBarBtn',
              testID: 'leftNavButton',
              style: style,
              onPress: onPress,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 373
              }
            },
            leftTitle && _react2.default.createElement(
              _reactNative.Text,
              { style: textStyle, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 380
                }
              },
              leftTitle
            ),
            buttonImage && _react2.default.createElement(
              _reactNative.View,
              { style: { flex: 1, justifyContent: 'center', alignItems: 'flex-start' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 385
                }
              },
              menuIcon || _react2.default.createElement(_reactNative.Image, {
                source: buttonImage,
                style: state.leftButtonIconStyle || styles.defaultImageStyle,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 386
                }
              })
            )
          );
        }
        if (!!state.onLeft ^ !!(leftTitle || buttonImage)) {
          console.warn('Both onLeft and leftTitle/leftButtonImage\n            must be specified for the scene: ' + state.name);
        }
        return null;
      }
      return tryRender(this.props.component, this.props.wrapBy) || tryRender(this.props);
    }
  }, {
    key: 'renderTitle',
    value: function renderTitle(childState, index) {
      var title = this.props.getTitle ? this.props.getTitle(childState) : childState.title;
      if (title === undefined && childState.component && childState.component.title) {
        title = childState.component.title;
      }
      if (typeof title === 'function') {
        title = title(childState);
      }
      return _react2.default.createElement(
        _reactNative.Animated.Text,
        babelHelpers.extends({}, this.props.titleProps, {
          key: childState.key,
          style: [styles.title, this.props.titleStyle, this.props.navigationState.titleStyle, childState.titleStyle, {
            opacity: this.props.position.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [0, this.props.titleOpacity, 0]
            }),
            left: this.props.position.interpolate({
              inputRange: [index - 1, index + 1],
              outputRange: [200, -200]
            }),
            right: this.props.position.interpolate({
              inputRange: [index - 1, index + 1],
              outputRange: [-200, 200]
            })
          }],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 416
          }
        }),
        title
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var state = this.props.navigationState;
      var selected = state.children[state.index];
      while (selected.hasOwnProperty('children')) {
        state = selected;
        selected = selected.children[selected.index];
      }
      var navProps = babelHelpers.extends({}, this.props, selected);

      var wrapByStyle = function wrapByStyle(component, wrapStyle) {
        if (!component) {
          return null;
        }
        return function (props) {
          return _react2.default.createElement(
            _reactNative.View,
            { style: wrapStyle, __source: {
                fileName: _jsxFileName,
                lineNumber: 456
              }
            },
            component(props)
          );
        };
      };

      var leftButtonStyle = [styles.leftButton, { alignItems: 'flex-start' }];
      var rightButtonStyle = [styles.rightButton, { alignItems: 'flex-end' }];

      var renderLeftButton = wrapByStyle(selected.renderLeftButton, leftButtonStyle) || wrapByStyle(selected.component.renderLeftButton, leftButtonStyle) || this.renderLeftButton;
      var renderRightButton = wrapByStyle(selected.renderRightButton, rightButtonStyle) || wrapByStyle(selected.component.renderRightButton, rightButtonStyle) || this.renderRightButton;
      var renderBackButton = wrapByStyle(selected.renderBackButton, leftButtonStyle) || wrapByStyle(selected.component.renderBackButton, leftButtonStyle) || this.renderBackButton;
      var renderTitle = selected.renderTitle || selected.component.renderTitle || this.props.renderTitle;
      return _react2.default.createElement(
        _reactNative.Animated.View,
        {
          style: [styles.header, this.props.navigationBarStyle, state.navigationBarStyle, selected.navigationBarStyle],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 475
          }
        },
        renderTitle ? renderTitle(navProps) : state.children.map(this.renderTitle, this),
        renderBackButton(navProps) || renderLeftButton(navProps),
        renderRightButton(navProps)
      );
    }
  }]);
  return NavBar;
}(_react2.default.Component);

NavBar.propTypes = propTypes;
NavBar.contextTypes = contextTypes;
NavBar.defaultProps = defaultProps;

exports.default = NavBar;