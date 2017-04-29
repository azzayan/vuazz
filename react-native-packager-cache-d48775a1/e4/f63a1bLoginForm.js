Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/az/dev/projects/vuazz-mobile/src/components/LoginForm.js';

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

var _Spinner = require('./Spinner');

var _Spinner2 = babelHelpers.interopRequireDefault(_Spinner);

var LoginForm = function (_Component) {
  babelHelpers.inherits(LoginForm, _Component);

  function LoginForm() {
    babelHelpers.classCallCheck(this, LoginForm);
    return babelHelpers.possibleConstructorReturn(this, (LoginForm.__proto__ || Object.getPrototypeOf(LoginForm)).apply(this, arguments));
  }

  babelHelpers.createClass(LoginForm, [{
    key: 'onEmailChange',
    value: function onEmailChange(text) {
      this.props.emailChanged(text);
    }
  }, {
    key: 'onPasswordChange',
    value: function onPasswordChange(text) {
      this.props.passwordChanged(text);
    }
  }, {
    key: 'onButtonPress',
    value: function onButtonPress() {
      var _props = this.props,
          email = _props.email,
          password = _props.password;


      this.props.loginUser({ email: email, password: password });
    }
  }, {
    key: 'renderButton',
    value: function renderButton() {
      if (this.props.loading) {
        return _react2.default.createElement(_Spinner2.default, { size: 'large', __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          }
        });
      }

      return _react2.default.createElement(
        _Button2.default,
        { onPress: this.onButtonPress.bind(this), __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          }
        },
        'Login'
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _Card2.default,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          }
        },
        _react2.default.createElement(
          _CardSection2.default,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            }
          },
          _react2.default.createElement(_Input2.default, {
            label: 'Email',
            placeholder: 'user@email.com',
            onChangeText: this.onEmailChange.bind(this),
            value: this.props.email,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            }
          })
        ),
        _react2.default.createElement(
          _CardSection2.default,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 50
            }
          },
          _react2.default.createElement(_Input2.default, {
            secureTextEntry: true,
            label: 'Password',
            placeholder: 'AcAd!a',
            onChangeText: this.onPasswordChange.bind(this),
            value: this.props.password,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 51
            }
          })
        ),
        _react2.default.createElement(
          _reactNative.Text,
          { style: styles.errorTextStyle, __source: {
              fileName: _jsxFileName,
              lineNumber: 60
            }
          },
          this.props.error
        ),
        _react2.default.createElement(
          _CardSection2.default,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 64
            }
          },
          this.renderButton()
        )
      );
    }
  }]);
  return LoginForm;
}(_react.Component);

var styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

var mapStateToProps = function mapStateToProps(_ref) {
  var auth = _ref.auth;
  var email = auth.email,
      password = auth.password,
      error = auth.error,
      loading = auth.loading;


  return { email: email, password: password, error: error, loading: loading };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, {
  emailChanged: _actions.emailChanged, passwordChanged: _actions.passwordChanged, loginUser: _actions.loginUser
})(LoginForm);