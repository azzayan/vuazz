Object.defineProperty(exports, "__esModule", {
    value: true
});

var _class,
    _temp,
    _jsxFileName = '/home/az/dev/projects/vuazz/node_modules/react-native-svg/elements/Symbol.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _ViewBox = require('./ViewBox');

var _ViewBox2 = babelHelpers.interopRequireDefault(_ViewBox);

var _G = require('./G');

var _G2 = babelHelpers.interopRequireDefault(_G);

var _Defs = require('./Defs');

var _Defs2 = babelHelpers.interopRequireDefault(_Defs);

var SymbolElement = (_temp = _class = function (_Component) {
    babelHelpers.inherits(SymbolElement, _Component);

    function SymbolElement() {
        babelHelpers.classCallCheck(this, SymbolElement);
        return babelHelpers.possibleConstructorReturn(this, (SymbolElement.__proto__ || Object.getPrototypeOf(SymbolElement)).apply(this, arguments));
    }

    babelHelpers.createClass(SymbolElement, [{
        key: 'render',
        value: function render() {
            var props = this.props;


            var viewBox = props.viewBox;
            if (props.viewbox) {
                viewBox = props.viewbox;
                console.warn('Prop `viewbox` is deprecated. please use `viewBox` instead.');
            }

            var content = viewBox ? _react2.default.createElement(
                _ViewBox2.default,
                {
                    name: props.id,
                    viewBox: viewBox,
                    preserveAspectRatio: props.preserveAspectRatio,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 22
                    }
                },
                props.children
            ) : _react2.default.createElement(
                _G2.default,
                { id: props.id, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 28
                    }
                },
                props.children
            );

            return _react2.default.createElement(
                _Defs2.default,
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 32
                    }
                },
                content
            );
        }
    }]);
    return SymbolElement;
}(_react.Component), _class.displayName = 'Symbol', _class.propType = {
    id: _react.PropTypes.string.isRequired,
    viewBox: _react.PropTypes.string,
    preserveAspectRatio: _react.PropTypes.string
}, _temp);
exports.default = SymbolElement;