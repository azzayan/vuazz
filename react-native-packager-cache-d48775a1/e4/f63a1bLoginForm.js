Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = "/home/az/dev/projects/vuazz-mobile/src/components/LoginForm.js";

var _react = require("react");

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require("react-native");

var _reactRedux = require("react-redux");

var _nativeBase = require("native-base");

var _actions = require("../actions");

var LoginForm = function (_Component) {
    babelHelpers.inherits(LoginForm, _Component);

    function LoginForm() {
        babelHelpers.classCallCheck(this, LoginForm);
        return babelHelpers.possibleConstructorReturn(this, (LoginForm.__proto__ || Object.getPrototypeOf(LoginForm)).apply(this, arguments));
    }

    babelHelpers.createClass(LoginForm, [{
        key: "onEmailChange",
        value: function onEmailChange(text) {
            this.props.emailChanged(text);
        }
    }, {
        key: "onPasswordChange",
        value: function onPasswordChange(text) {
            this.props.passwordChanged(text);
        }
    }, {
        key: "onButtonPress",
        value: function onButtonPress() {
            var _props = this.props,
                email = _props.email,
                password = _props.password;


            this.props.loginUser({ email: email, password: password });
        }
    }, {
        key: "renderButton",
        value: function renderButton() {
            if (this.props.loading) {
                return _react2.default.createElement(_nativeBase.Spinner, { style: styles.spinnerStyle, color: "#6AC700", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 24
                    }
                });
            }

            return _react2.default.createElement(
                _nativeBase.Button,
                { block: true, style: styles.buttonStyle, onPress: this.onButtonPress.bind(this), __source: {
                        fileName: _jsxFileName,
                        lineNumber: 28
                    }
                },
                _react2.default.createElement(
                    _reactNative.Text,
                    { style: styles.buttonTextStyle, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 29
                        }
                    },
                    "Log In"
                )
            );
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                _nativeBase.Container,
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 36
                    }
                },
                _react2.default.createElement(
                    _nativeBase.Content,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 37
                        }
                    },
                    _react2.default.createElement(
                        _nativeBase.Form,
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 38
                            }
                        },
                        _react2.default.createElement(
                            _nativeBase.Item,
                            { inlineLabel: true, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 39
                                }
                            },
                            _react2.default.createElement(
                                _nativeBase.Label,
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 40
                                    }
                                },
                                "Email"
                            ),
                            _react2.default.createElement(_nativeBase.Input, {
                                onChangeText: this.onEmailChange.bind(this),
                                value: this.props.email,
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 41
                                }
                            })
                        ),
                        _react2.default.createElement(
                            _nativeBase.Item,
                            { inlineLabel: true, last: true, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 47
                                }
                            },
                            _react2.default.createElement(
                                _nativeBase.Label,
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 48
                                    }
                                },
                                "Password"
                            ),
                            _react2.default.createElement(_nativeBase.Input, {
                                secureTextEntry: true,
                                onChangeText: this.onPasswordChange.bind(this),
                                value: this.props.password,
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 49
                                }
                            })
                        )
                    ),
                    _react2.default.createElement(
                        _reactNative.Text,
                        { style: styles.errorTextStyle, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 57
                            }
                        },
                        this.props.error
                    ),
                    _react2.default.createElement(
                        _nativeBase.CardItem,
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 61
                            }
                        },
                        this.renderButton()
                    )
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
    },
    buttonTextStyle: {
        alignSelf: 'center',
        color: '#6E1100',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1,
        backgroundColor: '#FFF',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#6AC700',
        marginLeft: 5,
        marginRight: 5
    },
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
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