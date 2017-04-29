Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/az/dev/projects/vuazz-mobile/src/components/EmployeeList.js';

var _lodash = require('lodash');

var _lodash2 = babelHelpers.interopRequireDefault(_lodash);

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactNative = require('react-native');

var _actions = require('../actions');

var _ListItem = require('./ListItem');

var _ListItem2 = babelHelpers.interopRequireDefault(_ListItem);

var EmployeeList = function (_Component) {
  babelHelpers.inherits(EmployeeList, _Component);

  function EmployeeList() {
    babelHelpers.classCallCheck(this, EmployeeList);
    return babelHelpers.possibleConstructorReturn(this, (EmployeeList.__proto__ || Object.getPrototypeOf(EmployeeList)).apply(this, arguments));
  }

  babelHelpers.createClass(EmployeeList, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.employeesFetch();

      this.createDataSource(this.props);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {

      this.createDataSource(nextProps);
    }
  }, {
    key: 'createDataSource',
    value: function createDataSource(_ref) {
      var employees = _ref.employees;

      var ds = new _reactNative.ListView.DataSource({
        rowHasChanged: function rowHasChanged(r1, r2) {
          return r1 !== r2;
        }
      });

      this.dataSource = ds.cloneWithRows(employees);
    }
  }, {
    key: 'renderRow',
    value: function renderRow(employee) {
      return _react2.default.createElement(_ListItem2.default, { employee: employee, __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_reactNative.ListView, {
        enableEmptySections: true,
        dataSource: this.dataSource,
        renderRow: this.renderRow,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      });
    }
  }]);
  return EmployeeList;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  var employees = _lodash2.default.map(state.employees, function (val, uid) {
    return babelHelpers.extends({}, val, { uid: uid });
  });

  return { employees: employees };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { employeesFetch: _actions.employeesFetch })(EmployeeList);