Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/az/dev/projects/vuazz-mobile/node_modules/react-native-router-flux/src/Modal.js';
exports.default = Modal;

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _DefaultRenderer = require('./DefaultRenderer');

var _DefaultRenderer2 = babelHelpers.interopRequireDefault(_DefaultRenderer);

var propTypes = {
  navigationState: _react.PropTypes.shape({
    children: _react.PropTypes.array
  }),
  onNavigate: _react.PropTypes.func
};

function Modal(props) {
  var children = props.navigationState.children;
  var state = children[0];

  return _react2.default.createElement(
    _reactNative.View,
    { style: { flex: 1 }, __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      }
    },
    _react2.default.createElement(_DefaultRenderer2.default, babelHelpers.extends({
      navigationState: state,
      key: state.key
    }, state, {
      onNavigate: props.onNavigate,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      }
    })),
    children.length > 1 && children.map(function (el, i) {
      if (i > 0 && el.component) {
        var Component = el.component;
        return _react2.default.createElement(Component, babelHelpers.extends({ key: el.key }, el, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          }
        }));
      }

      return null;
    })
  );
}

Modal.propTypes = propTypes;