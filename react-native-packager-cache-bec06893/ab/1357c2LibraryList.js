Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/az/dev/projects/vuazz/src/components/LibraryList.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactRedux = require('react-redux');

var _ListItem = require('./ListItem');

var _ListItem2 = babelHelpers.interopRequireDefault(_ListItem);

var LibraryList = function (_Component) {
  babelHelpers.inherits(LibraryList, _Component);

  function LibraryList() {
    babelHelpers.classCallCheck(this, LibraryList);
    return babelHelpers.possibleConstructorReturn(this, (LibraryList.__proto__ || Object.getPrototypeOf(LibraryList)).apply(this, arguments));
  }

  babelHelpers.createClass(LibraryList, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var ds = new _reactNative.ListView.DataSource({
        rowHasChanged: function rowHasChanged(r1, r2) {
          return r1 !== r2;
        }
      });

      this.dataSource = ds.cloneWithRows(this.props.libraries);
    }
  }, {
    key: 'renderRow',
    value: function renderRow(library) {
      return _react2.default.createElement(_ListItem2.default, { library: library, __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_reactNative.ListView, {
        dataSource: this.dataSource,
        renderRow: this.renderRow,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      });
    }
  }]);
  return LibraryList;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return { libraries: state.libraries };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(LibraryList);