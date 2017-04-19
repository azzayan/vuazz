Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var _jsxFileName = '/home/az/dev/projects/vuazz/src/components/AlbumList.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _AlbumDetail = require('./AlbumDetail');

var _AlbumDetail2 = babelHelpers.interopRequireDefault(_AlbumDetail);

var AlbumList = function (_Component) {
  babelHelpers.inherits(AlbumList, _Component);

  function AlbumList() {
    var _ref;

    var _temp, _this, _ret;

    babelHelpers.classCallCheck(this, AlbumList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = AlbumList.__proto__ || Object.getPrototypeOf(AlbumList)).call.apply(_ref, [this].concat(args))), _this), _this.state = { albums: [] }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
  }

  babelHelpers.createClass(AlbumList, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      fetch('https://rallycoding.herokuapp.com/api/music_albums').then(function (response) {
        return response.json();
      }).then(function (data) {
        return _this2.setState({ albums: data });
      });
    }
  }, {
    key: 'renderAlbums',
    value: function renderAlbums() {
      return this.state.albums.map(function (album) {
        return _react2.default.createElement(_AlbumDetail2.default, { key: album.title, album: album, __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          }
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactNative.ScrollView,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          }
        },
        this.renderAlbums()
      );
    }
  }]);
  return AlbumList;
}(_react.Component);

exports.default = AlbumList;