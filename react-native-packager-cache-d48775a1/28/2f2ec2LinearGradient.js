Object.defineProperty(exports, "__esModule", {
    value: true
});

var _class,
    _temp,
    _jsxFileName = '/home/az/dev/projects/vuazz-mobile/node_modules/react-native-svg/elements/LinearGradient.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _props = require('../lib/props');

var _Gradient2 = require('./Gradient');

var _Gradient3 = babelHelpers.interopRequireDefault(_Gradient2);

var _createReactNativeComponentClass = require('react-native/Libraries/Renderer/src/renderers/native/createReactNativeComponentClass');

var _createReactNativeComponentClass2 = babelHelpers.interopRequireDefault(_createReactNativeComponentClass);

var _attributes = require('../lib/attributes');

var LinearGradient = (_temp = _class = function (_Gradient) {
    babelHelpers.inherits(LinearGradient, _Gradient);

    function LinearGradient() {
        babelHelpers.classCallCheck(this, LinearGradient);
        return babelHelpers.possibleConstructorReturn(this, (LinearGradient.__proto__ || Object.getPrototypeOf(LinearGradient)).apply(this, arguments));
    }

    babelHelpers.createClass(LinearGradient, [{
        key: 'render',
        value: function render() {
            var props = this.props;

            return _react2.default.createElement(RNSVGLinearGradient, {
                x1: props.x1.toString(),
                y1: props.y1.toString(),
                x2: props.x2.toString(),
                y2: props.y2.toString(),
                gradient: this.getGradient(),
                name: props.id,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                }
            });
        }
    }]);
    return LinearGradient;
}(_Gradient3.default), _class.displayName = 'LinearGradient', _class.propTypes = {
    x1: _props.numberProp.isRequired,
    x2: _props.numberProp.isRequired,
    y1: _props.numberProp.isRequired,
    y2: _props.numberProp.isRequired,
    id: _react.PropTypes.string.isRequired
}, _class.defaultProps = {
    x1: '0%',
    y1: '0%',
    x2: '100%',
    y2: '0%'
}, _temp);


var RNSVGLinearGradient = (0, _createReactNativeComponentClass2.default)({
    validAttributes: _attributes.LinearGradientAttributes,
    uiViewClassName: 'RNSVGLinearGradient'
});

exports.default = LinearGradient;