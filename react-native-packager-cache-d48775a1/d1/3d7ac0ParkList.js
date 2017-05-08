Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var _jsxFileName = '/home/az/dev/projects/vuazz-mobile/src/components/ParkList.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _nativeBase = require('native-base');

var _ParkDetail = require('./ParkDetail');

var _ParkDetail2 = babelHelpers.interopRequireDefault(_ParkDetail);

var ParkList = function (_Component) {
  babelHelpers.inherits(ParkList, _Component);

  function ParkList() {
    var _ref;

    var _temp, _this, _ret;

    babelHelpers.classCallCheck(this, ParkList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = ParkList.__proto__ || Object.getPrototypeOf(ParkList)).call.apply(_ref, [this].concat(args))), _this), _this.state = { parks: [] }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
  }

  babelHelpers.createClass(ParkList, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      fetch('https://developer.nps.gov/api/v0/parks?parkCode=ever,voya,shen,grca,hosp,acad,gumo,bibe,cave,romo,dena,badl,wica', {
        method: 'GET',
        headers: {
          'Authorization': 'C127CF67-F403-4823-AA42-B87B1E235D23'
        }
      }).then(function (response) {
        return response.json();
      }).then(function (responseData) {
        return _this2.setState({
          parks: responseData.data
        });
      }).catch(function (error) {
        console.log('There has been a problem with your fetch operation:', error.message);
      });
    }
  }, {
    key: 'renderParks',
    value: function renderParks() {
      return this.state.parks.map(function (park) {
        return _react2.default.createElement(_ParkDetail2.default, { key: park.id, park: park, __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          }
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _nativeBase.Container,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          }
        },
        _react2.default.createElement(
          _nativeBase.Content,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            }
          },
          this.renderParks()
        )
      );
    }
  }]);
  return ParkList;
}(_react.Component);

exports.default = ParkList;