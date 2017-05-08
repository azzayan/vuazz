Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/az/dev/projects/vuazz-mobile/node_modules/native-base-shoutem-theme/src/connectStyle.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _hoistNonReactStatics = require('hoist-non-react-statics');

var _hoistNonReactStatics2 = babelHelpers.interopRequireDefault(_hoistNonReactStatics);

var _lodash = require('lodash');

var _ = babelHelpers.interopRequireWildcard(_lodash);

var _normalizeStyle = require('./StyleNormalizer/normalizeStyle');

var _normalizeStyle2 = babelHelpers.interopRequireDefault(_normalizeStyle);

var _Theme = require('./Theme');

var _Theme2 = babelHelpers.interopRequireDefault(_Theme);

var _resolveComponentStyle = require('./resolveComponentStyle');

var themeCache = {};

function throwConnectStyleError(errorMessage, componentDisplayName) {
  throw Error(errorMessage + ' - when connecting ' + componentDisplayName + ' component to style.');
}

function getTheme(context) {
  return context.theme || _Theme2.default.getDefaultTheme();
}

function isStyleVariant(propertyName) {
  return (/^\./.test(propertyName)
  );
}

function isChildStyle(propertyName) {
  return (/(^[^\.].*\.)|^\*$/.test(propertyName)
  );
}

function getConcreteStyle(style) {
  return _.pickBy(style, function (value, key) {
    return !isStyleVariant(key) && !isChildStyle(key);
  });
}

exports.default = function (componentStyleName) {
  var componentStyle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var mapPropsToStyleNames = arguments[2];
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  function getComponentDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
  }

  return function wrapWithStyledComponent(WrappedComponent) {
    var _class, _temp;

    var componentDisplayName = getComponentDisplayName(WrappedComponent);

    if (!_.isPlainObject(componentStyle)) {
      throwConnectStyleError('Component style must be plain object', componentDisplayName);
    }

    if (!_.isString(componentStyleName)) {
      throwConnectStyleError('Component Style Name must be string', componentDisplayName);
    }

    var StyledComponent = (_temp = _class = function (_React$Component) {
      babelHelpers.inherits(StyledComponent, _React$Component);

      function StyledComponent(props, context) {
        babelHelpers.classCallCheck(this, StyledComponent);

        var _this = babelHelpers.possibleConstructorReturn(this, (StyledComponent.__proto__ || Object.getPrototypeOf(StyledComponent)).call(this, props, context));

        var styleNames = _this.getStyleNames(props);
        var style = props.style;

        var finalStyle = _this.getFinalStyle(props, context, style, styleNames);

        _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);
        _this.resolveConnectedComponentStyle = _this.resolveConnectedComponentStyle.bind(_this);
        _this.state = {
          style: finalStyle,

          addedProps: _this.resolveAddedProps(),
          styleNames: styleNames
        };
        return _this;
      }

      babelHelpers.createClass(StyledComponent, [{
        key: 'getFinalStyle',
        value: function getFinalStyle(props, context, style, styleNames) {
          var resolvedStyle = {};
          if (context.parentPath) {
            resolvedStyle = this.getOrSetStylesInCache(context, props, styleNames, [].concat(babelHelpers.toConsumableArray(context.parentPath), [componentStyleName], babelHelpers.toConsumableArray(styleNames)));
          } else {
            resolvedStyle = this.resolveStyle(context, props, styleNames);
            themeCache[componentStyleName] = resolvedStyle;
          }

          return getConcreteStyle(_.merge({}, resolvedStyle, style));
        }
      }, {
        key: 'getStyleNames',
        value: function getStyleNames(props) {
          var styleNamesArr = _.map(props, function (value, key) {
            if (typeof value !== 'object' && value === true) {
              return '.' + key;
            } else {
              return false;
            }
          });
          _.remove(styleNamesArr, function (value, index) {
            return value === false;
          });

          return styleNamesArr;
        }
      }, {
        key: 'getParentPath',
        value: function getParentPath() {
          if (!this.context.parentPath) {
            return [componentStyleName];
          } else {
            return [].concat(babelHelpers.toConsumableArray(this.context.parentPath), [componentStyleName], babelHelpers.toConsumableArray(this.getStyleNames(this.props)));
          }
        }
      }, {
        key: 'getChildContext',
        value: function getChildContext() {
          return {
            parentPath: this.getParentPath()
          };
        }
      }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps, nextContext) {
          var styleNames = this.getStyleNames(nextProps);
          var style = nextProps.style;
          if (this.shouldRebuildStyle(nextProps, nextContext, styleNames)) {

            var finalStyle = this.getFinalStyle(nextProps, nextContext, style, styleNames);

            this.setState({
              style: finalStyle,

              styleNames: styleNames
            });
          }
        }
      }, {
        key: 'setNativeProps',
        value: function setNativeProps(nativeProps) {
          if (this.wrappedInstance.setNativeProps) {
            this.wrappedInstance.setNativeProps(nativeProps);
          }
        }
      }, {
        key: 'setWrappedInstance',
        value: function setWrappedInstance(component) {
          if (component && component._root) {
            this._root = component._root;
          } else {
            this._root = component;
          }
        }
      }, {
        key: 'hasStyleNameChanged',
        value: function hasStyleNameChanged(nextProps, styleNames) {
          return mapPropsToStyleNames && this.props !== nextProps && !_.isEqual(this.state.styleNames, styleNames);
        }
      }, {
        key: 'shouldRebuildStyle',
        value: function shouldRebuildStyle(nextProps, nextContext, styleNames) {
          return nextProps.style !== this.props.style || nextProps.styleName !== this.props.styleName || nextContext.theme !== this.context.theme || !_.isEqual(nextContext.parentPath, this.context.parentPath) || this.hasStyleNameChanged(nextProps, styleNames);
        }
      }, {
        key: 'resolveStyleNames',
        value: function resolveStyleNames(props) {
          var styleName = props.styleName;

          var styleNames = styleName ? styleName.split(/\s/g) : [];

          if (!mapPropsToStyleNames) {
            return styleNames;
          }

          return _.uniq(mapPropsToStyleNames(styleNames, props));
        }
      }, {
        key: 'resolveAddedProps',
        value: function resolveAddedProps() {
          var addedProps = {};
          if (options.withRef) {
            addedProps.ref = 'wrappedInstance';
          }
          return addedProps;
        }
      }, {
        key: 'getOrSetStylesInCache',
        value: function getOrSetStylesInCache(context, props, styleNames, path) {
          if (themeCache && themeCache[path.join('>')]) {

            return themeCache[path.join('>')];
          } else {
            resolvedStyle = this.resolveStyle(context, props, styleNames);
            if (Object.keys(themeCache).length < 10000) {
              themeCache[path.join('>')] = resolvedStyle;
            }
            return resolvedStyle;
          }
        }
      }, {
        key: 'resolveStyle',
        value: function resolveStyle(context, props, styleNames) {
          var parentStyle = {};

          var theme = getTheme(context);
          var themeStyle = theme.createComponentStyle(componentStyleName, componentStyle);

          if (context.parentPath) {
            parentStyle = themeCache[context.parentPath.join('>')];
          } else {
            parentStyle = (0, _resolveComponentStyle.resolveComponentStyle)(componentStyleName, styleNames, themeStyle, parentStyle);
          }

          return (0, _resolveComponentStyle.resolveComponentStyle)(componentStyleName, styleNames, themeStyle, parentStyle);
        }
      }, {
        key: 'resolveConnectedComponentStyle',
        value: function resolveConnectedComponentStyle(props) {
          var styleNames = this.resolveStyleNames(props);
          return this.resolveStyle(this.context, props, styleNames).componentStyle;
        }
      }, {
        key: 'render',
        value: function render() {
          var _state = this.state,
              addedProps = _state.addedProps,
              style = _state.style;

          return _react2.default.createElement(WrappedComponent, babelHelpers.extends({}, this.props, addedProps, {
            style: style,
            ref: this.setWrappedInstance,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 331
            }
          }));
        }
      }]);
      return StyledComponent;
    }(_react2.default.Component), _class.contextTypes = {
      theme: _Theme.ThemeShape,

      parentPath: _react.PropTypes.array
    }, _class.childContextTypes = {
      parentPath: _react.PropTypes.array
    }, _class.propTypes = {
      style: _react.PropTypes.object,

      styleName: _react.PropTypes.string,

      virtual: _react.PropTypes.bool
    }, _class.defaultProps = {
      virtual: options.virtual
    }, _class.displayName = 'Styled(' + componentDisplayName + ')', _class.WrappedComponent = WrappedComponent, _temp);


    return (0, _hoistNonReactStatics2.default)(StyledComponent, WrappedComponent);
  };
};