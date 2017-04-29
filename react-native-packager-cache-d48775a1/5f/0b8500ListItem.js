Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/az/dev/projects/vuazz-mobile/src/components/ListItem.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactNativeRouterFlux = require('react-native-router-flux');

var _CardSection = require('./CardSection');

var _CardSection2 = babelHelpers.interopRequireDefault(_CardSection);

var ListItem = function (_Component) {
  babelHelpers.inherits(ListItem, _Component);

  function ListItem() {
    babelHelpers.classCallCheck(this, ListItem);
    return babelHelpers.possibleConstructorReturn(this, (ListItem.__proto__ || Object.getPrototypeOf(ListItem)).apply(this, arguments));
  }

  babelHelpers.createClass(ListItem, [{
    key: 'onRowPress',
    value: function onRowPress() {
      _reactNativeRouterFlux.Actions.employeeEdit({ employee: this.props.employee });
    }
  }, {
    key: 'render',
    value: function render() {
      var name = this.props.employee.name;


      return _react2.default.createElement(
        _reactNative.TouchableWithoutFeedback,
        { onPress: this.onRowPress.bind(this), __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          }
        },
        _react2.default.createElement(
          _reactNative.View,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 16
            }
          },
          _react2.default.createElement(
            _CardSection2.default,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 17
              }
            },
            _react2.default.createElement(
              _reactNative.Text,
              { style: styles.titleStyle, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 18
                }
              },
              name
            )
          )
        )
      );
    }
  }]);
  return ListItem;
}(_react.Component);

var styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

exports.default = ListItem;