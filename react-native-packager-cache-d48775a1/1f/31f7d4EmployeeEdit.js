Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/az/dev/projects/vuazz-mobile/src/components/EmployeeEdit.js';

var _lodash = require('lodash');

var _lodash2 = babelHelpers.interopRequireDefault(_lodash);

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _EmployeeForm = require('./EmployeeForm');

var _EmployeeForm2 = babelHelpers.interopRequireDefault(_EmployeeForm);

var _actions = require('../actions');

var _Card = require('./Card');

var _Card2 = babelHelpers.interopRequireDefault(_Card);

var _CardSection = require('./CardSection');

var _CardSection2 = babelHelpers.interopRequireDefault(_CardSection);

var _Button = require('./Button');

var _Button2 = babelHelpers.interopRequireDefault(_Button);

var _Confirm = require('./Confirm');

var _Confirm2 = babelHelpers.interopRequireDefault(_Confirm);

var EmployeeEdit = function (_Component) {
  babelHelpers.inherits(EmployeeEdit, _Component);

  function EmployeeEdit() {
    var _ref;

    var _temp, _this, _ret;

    babelHelpers.classCallCheck(this, EmployeeEdit);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = EmployeeEdit.__proto__ || Object.getPrototypeOf(EmployeeEdit)).call.apply(_ref, [this].concat(args))), _this), _this.state = { showModal: false }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
  }

  babelHelpers.createClass(EmployeeEdit, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      _lodash2.default.each(this.props.employee, function (value, prop) {
        _this2.props.employeeUpdate({ prop: prop, value: value });
      });
    }
  }, {
    key: 'onButtonPress',
    value: function onButtonPress() {
      var _props = this.props,
          name = _props.name,
          phone = _props.phone,
          shift = _props.shift;


      this.props.employeeSave({ name: name, phone: phone, shift: shift, uid: this.props.employee.uid });
    }
  }, {
    key: 'onAccept',
    value: function onAccept() {
      var uid = this.props.employee.uid;


      this.props.employeeDelete({ uid: uid });
    }
  }, {
    key: 'onDecline',
    value: function onDecline() {
      this.setState({ showModal: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        _Card2.default,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          }
        },
        _react2.default.createElement(_EmployeeForm2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          }
        }),
        _react2.default.createElement(
          _CardSection2.default,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            }
          },
          _react2.default.createElement(
            _Button2.default,
            { onPress: this.onButtonPress.bind(this), __source: {
                fileName: _jsxFileName,
                lineNumber: 42
              }
            },
            'Save Changes'
          )
        ),
        _react2.default.createElement(
          _CardSection2.default,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            }
          },
          _react2.default.createElement(
            _Button2.default,
            { onPress: function onPress() {
                return _this3.setState({ showModal: !_this3.state.showModal });
              }, __source: {
                fileName: _jsxFileName,
                lineNumber: 48
              }
            },
            'Fire Employee'
          )
        ),
        _react2.default.createElement(
          _Confirm2.default,
          {
            visible: this.state.showModal,
            onAccept: this.onAccept.bind(this),
            onDecline: this.onDecline.bind(this),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 53
            }
          },
          'Are you sure you want to delete this?'
        )
      );
    }
  }]);
  return EmployeeEdit;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  var _state$employeeForm = state.employeeForm,
      name = _state$employeeForm.name,
      phone = _state$employeeForm.phone,
      shift = _state$employeeForm.shift;


  return { name: name, phone: phone, shift: shift };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, {
  employeeUpdate: _actions.employeeUpdate, employeeSave: _actions.employeeSave, employeeDelete: _actions.employeeDelete
})(EmployeeEdit);