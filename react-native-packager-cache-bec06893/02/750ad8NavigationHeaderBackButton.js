
'use strict';

var _jsxFileName = '/home/az/dev/projects/vuazz/node_modules/react-native-experimental-navigation/NavigationHeaderBackButton.js';
var React = require('react');
var ReactNative = require('react-native');
var NavigationContainer = require('./NavigationContainer');
var NavigationRootContainer = require('./NavigationRootContainer');

var Image = ReactNative.Image,
    Platform = ReactNative.Platform,
    StyleSheet = ReactNative.StyleSheet,
    TouchableOpacity = ReactNative.TouchableOpacity;


var NavigationHeaderBackButton = function NavigationHeaderBackButton(props) {
  return React.createElement(
    TouchableOpacity,
    { style: styles.buttonContainer, onPress: function onPress() {
        return props.onNavigate(NavigationRootContainer.getBackAction());
      }, __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      }
    },
    React.createElement(Image, { style: styles.button, source: require('./assets/back.png'), __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      }
    })
  );
};

NavigationHeaderBackButton.propTypes = {
  onNavigate: React.PropTypes.func.isRequired
};

var styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    height: 24,
    width: 24,
    margin: Platform.OS === 'ios' ? 10 : 16,
    resizeMode: 'contain'
  }
});

module.exports = NavigationContainer.create(NavigationHeaderBackButton);