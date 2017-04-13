Object.defineProperty(exports, "__esModule", {
    value: true
});

var _class,
    _temp2,
    _initialiseProps,
    _jsxFileName = '/home/az/dev/projects/vuazz/node_modules/react-native-svg/elements/Polygon.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _Path = require('./Path');

var _Path2 = babelHelpers.interopRequireDefault(_Path);

var _props = require('../lib/props');

var _lodash = require('lodash');

var _lodash2 = babelHelpers.interopRequireDefault(_lodash);

var Polygon = (_temp2 = _class = function (_Component) {
    babelHelpers.inherits(Polygon, _Component);

    function Polygon() {
        var _ref;

        var _temp, _this, _ret;

        babelHelpers.classCallCheck(this, Polygon);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = Polygon.__proto__ || Object.getPrototypeOf(Polygon)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
    }

    babelHelpers.createClass(Polygon, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var points = this.props.points;
            if (_lodash2.default.isArray(points)) {
                points = points.join(',');
            }

            return _react2.default.createElement(_Path2.default, babelHelpers.extends({
                ref: function ref(ele) {
                    _this2.root = ele;
                }
            }, this.props, {
                d: 'M' + points.trim().replace(/\s+/g, 'L') + 'z',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            }));
        }
    }]);
    return Polygon;
}(_react.Component), _class.displayName = 'Polygon', _class.propTypes = babelHelpers.extends({}, _props.pathProps, {
    points: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.array]).isRequired
}), _class.defaultProps = {
    points: ''
}, _initialiseProps = function _initialiseProps() {
    var _this3 = this;

    this.setNativeProps = function () {
        var _root$getNativeElemen;

        (_root$getNativeElemen = _this3.root.getNativeElement()).setNativeProps.apply(_root$getNativeElemen, arguments);
    };
}, _temp2);
exports.default = Polygon;