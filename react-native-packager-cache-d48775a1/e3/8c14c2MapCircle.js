var _jsxFileName = '/home/az/dev/projects/vuazz-mobile/node_modules/react-native-maps/components/MapCircle.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _decorateMapComponent = require('./decorateMapComponent');

var _decorateMapComponent2 = babelHelpers.interopRequireDefault(_decorateMapComponent);

var propTypes = babelHelpers.extends({}, _reactNative.View.propTypes, {
  center: _react.PropTypes.shape({
    latitude: _react.PropTypes.number.isRequired,
    longitude: _react.PropTypes.number.isRequired
  }).isRequired,

  radius: _react.PropTypes.number.isRequired,

  onPress: _react.PropTypes.func,

  strokeWidth: _react.PropTypes.number,

  strokeColor: _react.PropTypes.string,

  fillColor: _react.PropTypes.string,

  zIndex: _react.PropTypes.number,

  lineCap: _react.PropTypes.oneOf(['butt', 'round', 'square']),

  lineJoin: _react.PropTypes.oneOf(['miter', 'round', 'bevel']),

  miterLimit: _react.PropTypes.number,

  lineDashPhase: _react.PropTypes.number,

  lineDashPattern: _react.PropTypes.arrayOf(_react.PropTypes.number)
});

var defaultProps = {
  strokeColor: '#000',
  strokeWidth: 1
};

var MapCircle = function (_React$Component) {
  babelHelpers.inherits(MapCircle, _React$Component);

  function MapCircle() {
    babelHelpers.classCallCheck(this, MapCircle);
    return babelHelpers.possibleConstructorReturn(this, (MapCircle.__proto__ || Object.getPrototypeOf(MapCircle)).apply(this, arguments));
  }

  babelHelpers.createClass(MapCircle, [{
    key: 'render',
    value: function render() {
      var AIRMapCircle = this.getAirComponent();
      return _react2.default.createElement(AIRMapCircle, babelHelpers.extends({}, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      }));
    }
  }]);
  return MapCircle;
}(_react2.default.Component);

MapCircle.propTypes = propTypes;
MapCircle.defaultProps = defaultProps;

module.exports = (0, _decorateMapComponent2.default)(MapCircle, {
  componentType: 'Circle',
  providers: {
    google: {
      ios: _decorateMapComponent.SUPPORTED,
      android: _decorateMapComponent.USES_DEFAULT_IMPLEMENTATION
    }
  }
});