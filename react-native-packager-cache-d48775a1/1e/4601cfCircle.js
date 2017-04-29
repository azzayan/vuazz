Object.defineProperty(exports, "__esModule", {
    value: true
});

var _class,
    _temp2,
    _initialiseProps,
    _jsxFileName = '/home/az/dev/projects/vuazz-mobile/node_modules/react-native-svg/elements/Circle.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _createReactNativeComponentClass = require('react-native/Libraries/Renderer/src/renderers/native/createReactNativeComponentClass');

var _createReactNativeComponentClass2 = babelHelpers.interopRequireDefault(_createReactNativeComponentClass);

var _Shape2 = require('./Shape');

var _Shape3 = babelHelpers.interopRequireDefault(_Shape2);

var _attributes = require('../lib/attributes');

var _props = require('../lib/props');

var Circle = (_temp2 = _class = function (_Shape) {
    babelHelpers.inherits(Circle, _Shape);

    function Circle() {
        var _ref;

        var _temp, _this, _ret;

        babelHelpers.classCallCheck(this, Circle);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = Circle.__proto__ || Object.getPrototypeOf(Circle)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
    }

    babelHelpers.createClass(Circle, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var props = this.props;
            return _react2.default.createElement(RNSVGCircle, babelHelpers.extends({
                ref: function ref(ele) {
                    _this2.root = ele;
                }
            }, this.extractProps(props), {
                cx: props.cx.toString(),
                cy: props.cy.toString(),
                r: props.r.toString(),
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }));
        }
    }]);
    return Circle;
}(_Shape3.default), _class.displayName = 'Circle', _class.propTypes = babelHelpers.extends({}, _props.pathProps, {
    cx: _props.numberProp.isRequired,
    cy: _props.numberProp.isRequired,
    r: _props.numberProp.isRequired
}), _class.defaultProps = {
    cx: 0,
    cy: 0,
    r: 0
}, _initialiseProps = function _initialiseProps() {
    var _this3 = this;

    this.setNativeProps = function () {
        var _root;

        (_root = _this3.root).setNativeProps.apply(_root, arguments);
    };
}, _temp2);


var RNSVGCircle = (0, _createReactNativeComponentClass2.default)({
    validAttributes: _attributes.CircleAttributes,
    uiViewClassName: 'RNSVGCircle'
});

exports.default = Circle;