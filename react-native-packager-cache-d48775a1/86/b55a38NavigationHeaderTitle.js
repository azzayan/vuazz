
'use strict';

var _jsxFileName = '/home/az/dev/projects/vuazz-mobile/node_modules/react-native/Libraries/CustomComponents/NavigationExperimental/NavigationHeaderTitle.js';
var React = require('react');
var ReactNative = require('react-native');

var Platform = ReactNative.Platform,
    StyleSheet = ReactNative.StyleSheet,
    View = ReactNative.View,
    Text = ReactNative.Text;


var NavigationHeaderTitle = function NavigationHeaderTitle(_ref) {
  var children = _ref.children,
      style = _ref.style,
      textStyle = _ref.textStyle,
      viewProps = _ref.viewProps;
  return React.createElement(
    View,
    babelHelpers.extends({ style: [styles.title, style] }, viewProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      }
    }),
    React.createElement(
      Text,
      { style: [styles.titleText, textStyle], __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      },
      children
    )
  );
};

var styles = StyleSheet.create({
  title: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16
  },

  titleText: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    color: 'rgba(0, 0, 0, .9)',
    textAlign: Platform.OS === 'ios' ? 'center' : 'left'
  }
});

NavigationHeaderTitle.propTypes = {
  children: React.PropTypes.node.isRequired,
  style: View.propTypes.style,
  textStyle: Text.propTypes.style
};

module.exports = NavigationHeaderTitle;