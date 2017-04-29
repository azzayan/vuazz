Object.defineProperty(exports, "__esModule", {
    value: true
});

var _class,
    _temp2,
    _initialiseProps,
    _jsxFileName = '/home/az/dev/projects/vuazz-mobile/node_modules/react-native-svg/elements/Text.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _createReactNativeComponentClass = require('react-native/Libraries/Renderer/src/renderers/native/createReactNativeComponentClass');

var _createReactNativeComponentClass2 = babelHelpers.interopRequireDefault(_createReactNativeComponentClass);

var _extractText = require('../lib/extract/extractText');

var _extractText2 = babelHelpers.interopRequireDefault(_extractText);

var _props = require('../lib/props');

var _attributes = require('../lib/attributes');

var _Shape2 = require('./Shape');

var _Shape3 = babelHelpers.interopRequireDefault(_Shape2);

var Text = (_temp2 = _class = function (_Shape) {
    babelHelpers.inherits(Text, _Shape);

    function Text() {
        var _ref;

        var _temp, _this, _ret;

        babelHelpers.classCallCheck(this, Text);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = Text.__proto__ || Object.getPrototypeOf(Text)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
    }

    babelHelpers.createClass(Text, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var props = this.props;

            var x = 0;
            if (props.x) {
                x = props.dx ? +props.x + +props.dx : +props.x;
            }
            var y = 0;
            if (props.y) {
                y = props.dy ? +props.y + +props.dy : +props.y;
            }

            return _react2.default.createElement(RNSVGText, babelHelpers.extends({
                ref: function ref(ele) {
                    _this2.root = ele;
                }
            }, this.extractProps(babelHelpers.extends({}, props, { x: x, y: y })), (0, _extractText2.default)(props), {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }));
        }
    }]);
    return Text;
}(_Shape3.default), _class.displayName = 'Text', _class.propTypes = babelHelpers.extends({}, _props.pathProps, {
    dx: _props.numberProp,
    dy: _props.numberProp,
    textAnchor: _react.PropTypes.oneOf(['start', 'middle', 'end']),
    path: _react.PropTypes.string,
    fontFamily: _react.PropTypes.string,
    fontSize: _props.numberProp,
    fontWeight: _react.PropTypes.string,
    fontStyle: _react.PropTypes.string,
    font: _react.PropTypes.object,
    lines: _props.numberProp
}), _class.defaultProps = {
    dx: 0,
    dy: 0
}, _initialiseProps = function _initialiseProps() {
    var _this3 = this;

    this.setNativeProps = function () {
        var _root;

        (_root = _this3.root).setNativeProps.apply(_root, arguments);
    };
}, _temp2);


var RNSVGText = (0, _createReactNativeComponentClass2.default)({
    validAttributes: _attributes.TextAttributes,
    uiViewClassName: 'RNSVGText'
});

exports.default = Text;