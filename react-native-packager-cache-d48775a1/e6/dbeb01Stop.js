Object.defineProperty(exports, "__esModule", {
    value: true
});

var _class, _temp;

var _react = require('react');

var _props = require('../lib/props');

var Stop = (_temp = _class = function (_Component) {
    babelHelpers.inherits(Stop, _Component);

    function Stop() {
        babelHelpers.classCallCheck(this, Stop);
        return babelHelpers.possibleConstructorReturn(this, (Stop.__proto__ || Object.getPrototypeOf(Stop)).apply(this, arguments));
    }

    babelHelpers.createClass(Stop, [{
        key: 'render',
        value: function render() {
            return null;
        }
    }]);
    return Stop;
}(_react.Component), _class.displayName = 'Stop', _class.propTypes = {
    stopColor: _react.PropTypes.string,
    stopOpacity: _props.numberProp
}, _class.defaultProps = {
    stopColor: '#000',
    stopOpacity: 1
}, _temp);
exports.default = Stop;