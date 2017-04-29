Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/az/dev/projects/vuazz-mobile/src/components/EmployeeCreate.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _actions = require('../actions');

var _Card = require('./Card');

var _Card2 = babelHelpers.interopRequireDefault(_Card);

var _CardSection = require('./CardSection');

var _CardSection2 = babelHelpers.interopRequireDefault(_CardSection);

var _Button = require('./Button');

var _Button2 = babelHelpers.interopRequireDefault(_Button);

var _EmployeeForm = require('./EmployeeForm');

var _EmployeeForm2 = babelHelpers.interopRequireDefault(_EmployeeForm);

var EmployeeCreate = function (_Component) {
  babelHelpers.inherits(EmployeeCreate, _Component);

  function EmployeeCreate() {
    babelHelpers.classCallCheck(this, EmployeeCreate);
    return babelHelpers.possibleConstructorReturn(this, (EmployeeCreate.__proto__ || Object.getPrototypeOf(EmployeeCreate)).apply(this, arguments));
  }

  babelHelpers.createClass(EmployeeCreate, [{
    key: 'onButtonPress',
    value: function onButtonPress() {
      var _props = this.props,
          name = _props.name,
          phone = _props.phone,
          shift = _props.shift;


      this.props.employeeCreate({ name: name, phone: phone, shift: shift || 'Monday' });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _Card2.default,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          }
        },
        _react2.default.createElement(_EmployeeForm2.default, babelHelpers.extends({}, this.props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          }
        })),
        _react2.default.createElement(
          _CardSection2.default,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            }
          },
          _react2.default.createElement(
            _Button2.default,
            { onPress: this.onButtonPress.bind(this), __source: {
                fileName: _jsxFileName,
                lineNumber: 21
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

var mapStateToProps = function mapStateToProps(state) {
  var _state$employeeForm = state.employeeForm,
      name = _state$employeeForm.name,
      phone = _state$employeeForm.phone,
      shift = _state$employeeForm.shift;


  return { name: name, phone: phone, shift: shift };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, {
  employeeUpdate: _actions.employeeUpdate, employeeCreate: _actions.employeeCreate
})(EmployeeCreate);