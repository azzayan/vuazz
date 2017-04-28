Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/az/dev/projects/vuazz/src/components/ListItem.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactRedux = require('react-redux');

var _CardSection = require('./CardSection');

var _CardSection2 = babelHelpers.interopRequireDefault(_CardSection);

var _actions = require('../actions');

var actions = babelHelpers.interopRequireWildcard(_actions);

var ListItem = function (_Component) {
  babelHelpers.inherits(ListItem, _Component);

  function ListItem() {
    babelHelpers.classCallCheck(this, ListItem);
    return babelHelpers.possibleConstructorReturn(this, (ListItem.__proto__ || Object.getPrototypeOf(ListItem)).apply(this, arguments));
  }

  babelHelpers.createClass(ListItem, [{
    key: 'componentWillUpdate',
    value: function componentWillUpdate() {
      _reactNative.LayoutAnimation.spring();
    }
  }, {
    key: 'renderDescription',
    value: function renderDescription() {
      var _props = this.props,
          library = _props.library,
          expanded = _props.expanded;


      if (expanded) {
        return _react2.default.createElement(
          _CardSection2.default,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            }
          },
          _react2.default.createElement(
            _reactNative.Text,
            { style: { flex: 1 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 23
              }
            },
            library.description
          )
        );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var titleStyle = styles.titleStyle;
      var _props$library = this.props.library,
          id = _props$library.id,
          title = _props$library.title;


      return _react2.default.createElement(
        _reactNative.TouchableWithoutFeedback,
        { onPress: function onPress() {
            return _this2.props.selectLibrary(id);
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          }
        },
        _react2.default.createElement(
          _reactNative.View,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            }
          },
          _react2.default.createElement(
            _CardSection2.default,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 38
              }
            },
            _react2.default.createElement(
              _reactNative.Text,
              { style: titleStyle, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 39
                }
              },
              title
            )
          ),
          this.renderDescription()
        )
      );
    }
  }]);
  return ListItem;
}(_react.Component);

var styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

var mapStateToProps = function mapStateToProps(state, ownProps) {
  var expanded = state.selectedLibraryId === ownProps.library.id;

  return { expanded: expanded };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, actions)(ListItem);