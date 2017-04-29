Object.defineProperty(exports, "__esModule", {
    value: true
});

var _class,
    _temp,
    _jsxFileName = '/home/az/dev/projects/vuazz-mobile/node_modules/react-native-svg/elements/Defs.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _createReactNativeComponentClass = require('react-native/Libraries/Renderer/src/renderers/native/createReactNativeComponentClass');

var _createReactNativeComponentClass2 = babelHelpers.interopRequireDefault(_createReactNativeComponentClass);

var Defs = (_temp = _class = function (_Component) {
    babelHelpers.inherits(Defs, _Component);

    function Defs() {
        babelHelpers.classCallCheck(this, Defs);
        return babelHelpers.possibleConstructorReturn(this, (Defs.__proto__ || Object.getPrototypeOf(Defs)).apply(this, arguments));
    }

    babelHelpers.createClass(Defs, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                RNSVGDefs,
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 10
                    }
                },
                this.props.children
            );
        }
    }]);
    return Defs;
}(_react.Component), _class.displayName = 'Defs', _temp);


var RNSVGDefs = (0, _createReactNativeComponentClass2.default)({
    validAttributes: {},
    uiViewClassName: 'RNSVGDefs'
});

exports.default = Defs;