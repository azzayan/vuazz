Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/az/dev/projects/vuazz/src/components/EmployeeCreate.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactRedux = require('react-redux');

var _actions = require('../actions');

var _Card = require('./Card');

var _Card2 = babelHelpers.interopRequireDefault(_Card);

var _CardSection = require('./CardSection');

var _CardSection2 = babelHelpers.interopRequireDefault(_CardSection);

var _Input = require('./Input');

var _Input2 = babelHelpers.interopRequireDefault(_Input);

var _Button = require('./Button');

var _Button2 = babelHelpers.interopRequireDefault(_Button);

var EmployeeCreate = function (_Component) {
  babelHelpers.inherits(EmployeeCreate, _Component);

  function EmployeeCreate() {
    babelHelpers.classCallCheck(this, EmployeeCreate);
    return babelHelpers.possibleConstructorReturn(this, (EmployeeCreate.__proto__ || Object.getPrototypeOf(EmployeeCreate)).apply(this, arguments));
  }

  babelHelpers.createClass(EmployeeCreate, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _Card2.default,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          }
        },
        _react2.default.createElement(
          _CardSection2.default,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 14
            }
          },
          _react2.default.createElement(_Input2.default, {
            label: 'Name',
            placeholder: 'Jane',
            value: this.props.name,
            onChangeText: function onChangeText(value) {
              return _this2.props.employeeUpdate({ prop: 'name', value: value });
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 15
            }
          })
        ),
        _react2.default.createElement(
          _CardSection2.default,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            }
          },
          _react2.default.createElement(_Input2.default, {
            label: 'Phone',
            placeholder: '555-555-5555',
            value: this.props.phone,
            onChangeText: function onChangeText(value) {
              return _this2.props.employeeUpdate({ prop: 'phone', value: value });
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            }
          })
        ),
        _react2.default.createElement(
          _CardSection2.default,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            }
          },
          _react2.default.createElement(
            _reactNative.Text,
            { style: styles.pickerTextStyle, __source: {
                fileName: _jsxFileName,
                lineNumber: 33
              }
            },
            'Shift'
          ),
          _react2.default.createElement(
            _reactNative.Picker,
            {
              style: { flex: 1 },
              selectedValue: this.props.shift,
              onValueChange: function onValueChange(value) {
                return _this2.props.employeeUpdate({ prop: 'shift', value: value });
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 34
              }
            },
            _react2.default.createElement(_reactNative.Picker.Item, { label: 'Monday', value: 'Monday', __source: {
                fileName: _jsxFileName,
                lineNumber: 39
              }
            }),
            _react2.default.createElement(_reactNative.Picker.Item, { label: 'Tuesday', value: 'Tuesday', __source: {
                fileName: _jsxFileName,
                lineNumber: 40
              }
            }),
            _react2.default.createElement(_reactNative.Picker.Item, { label: 'Wednesday', value: 'Wednesday', __source: {
                fileName: _jsxFileName,
                lineNumber: 41
              }
            }),
            _react2.default.createElement(_reactNative.Picker.Item, { label: 'Thursday', value: 'Thursday', __source: {
                fileName: _jsxFileName,
                lineNumber: 42
              }
            }),
            _react2.default.createElement(_reactNative.Picker.Item, { label: 'Friday', value: 'Friday', __source: {
                fileName: _jsxFileName,
                lineNumber: 43
              }
            }),
            _react2.default.createElement(_reactNative.Picker.Item, { label: 'Saturday', value: 'Saturday', __source: {
                fileName: _jsxFileName,
                lineNumber: 44
              }
            }),
            _react2.default.createElement(_reactNative.Picker.Item, { label: 'Sunday', value: 'Sunday', __source: {
                fileName: _jsxFileName,
                lineNumber: 45
              }
            })
          )
        ),
        _react2.default.createElement(
          _CardSection2.default,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 49
            }
          },
          _react2.default.createElement(
            _Button2.default,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 50
              }
            },
            'Create'
          )
        )
      );
    }
  }]);
  return EmployeeCreate;
}(_react.Component);

var styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

var mapStateToProps = function mapStateToProps(state) {
  var _state$employeeForm = state.employeeForm,
      name = _state$employeeForm.name,
      phone = _state$employeeForm.phone,
      shift = _state$employeeForm.shift;


  return { name: name, phone: phone, shift: shift };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { employeeUpdate: _actions.employeeUpdate })(EmployeeCreate);