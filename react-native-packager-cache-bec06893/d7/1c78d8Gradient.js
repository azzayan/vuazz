Object.defineProperty(exports, "__esModule", {
    value: true
});

var _class, _temp2;

var _react = require('react');

var _percentToFloat = require('../lib/percentToFloat');

var _percentToFloat2 = babelHelpers.interopRequireDefault(_percentToFloat);

var _Stop = require('./Stop');

var _Stop2 = babelHelpers.interopRequireDefault(_Stop);

var _color = require('color');

var _color2 = babelHelpers.interopRequireDefault(_color);

var _extractOpacity = require('../lib/extract/extractOpacity');

var _extractOpacity2 = babelHelpers.interopRequireDefault(_extractOpacity);

var _lodash = require('lodash');

var _lodash2 = babelHelpers.interopRequireDefault(_lodash);

var Gradient = (_temp2 = _class = function (_Component) {
    babelHelpers.inherits(Gradient, _Component);

    function Gradient() {
        var _ref;

        var _temp, _this, _ret;

        babelHelpers.classCallCheck(this, Gradient);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = Gradient.__proto__ || Object.getPrototypeOf(Gradient)).call.apply(_ref, [this].concat(args))), _this), _this.getGradient = function () {
            var stops = {};
            _react.Children.forEach(_this.props.children, function (child) {
                if (child.type === _Stop2.default) {
                    if (child.props.stopColor && child.props.offset) {
                        var offset = (0, _percentToFloat2.default)(child.props.offset);

                        stops[offset] = (0, _color2.default)(child.props.stopColor).alpha((0, _extractOpacity2.default)(child.props.stopOpacity));
                    }
                } else {
                    console.warn('\'Gradient\' can only receive \'Stop\' elements as children');
                }
            });

            var sorted = _lodash2.default.sortBy(_lodash2.default.map(stops, function (stop, offset) {
                return { stop: stop, offset: offset };
            }), 'offset');
            var gradient = [];

            sorted.forEach(function (_ref2) {
                var stop = _ref2.stop;

                var channels = stop.rgbaArray();
                gradient.push(channels[0] / 255);
                gradient.push(channels[1] / 255);
                gradient.push(channels[2] / 255);
                gradient.push(channels[3]);
            });

            gradient.push.apply(gradient, babelHelpers.toConsumableArray(sorted.map(function (_ref3) {
                var offset = _ref3.offset;
                return +offset;
            })));
            return gradient;
        }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
    }

    return Gradient;
}(_react.Component), _class.displayName = 'Gradient', _temp2);
exports.default = Gradient;