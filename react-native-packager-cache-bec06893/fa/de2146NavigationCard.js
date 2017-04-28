
'use strict';

var _class,
    _temp,
    _class2,
    _temp2,
    _jsxFileName = '/home/az/dev/projects/vuazz/node_modules/react-native-experimental-navigation/NavigationCard.js';

var Animated = require('react-native').Animated;
var NavigationCardStackPanResponder = require('./NavigationCardStackPanResponder');
var NavigationCardStackStyleInterpolator = require('./NavigationCardStackStyleInterpolator');
var NavigationContainer = require('./NavigationContainer');
var NavigationPagerPanResponder = require('./NavigationPagerPanResponder');
var NavigationPagerStyleInterpolator = require('./NavigationPagerStyleInterpolator');
var NavigationPointerEventsContainer = require('./NavigationPointerEventsContainer');
var NavigationPropTypes = require('./NavigationPropTypes');
var React = require('react');
var ReactComponentWithPureRenderMixin = require('react-addons-pure-render-mixin');
var StyleSheet = require('react-native').StyleSheet;
var View = require('react-native').View;

var PropTypes = React.PropTypes;
var SceneView = (_temp = _class = function (_React$Component) {
  babelHelpers.inherits(SceneView, _React$Component);

  function SceneView() {
    babelHelpers.classCallCheck(this, SceneView);
    return babelHelpers.possibleConstructorReturn(this, (SceneView.__proto__ || Object.getPrototypeOf(SceneView)).apply(this, arguments));
  }

  babelHelpers.createClass(SceneView, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return nextProps.sceneRendererProps.scene.navigationState !== this.props.sceneRendererProps.scene.navigationState;
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.sceneRenderer(this.props.sceneRendererProps);
    }
  }]);
  return SceneView;
}(React.Component), _class.propTypes = {
  sceneRenderer: PropTypes.func.isRequired,
  sceneRendererProps: NavigationPropTypes.SceneRenderer
}, _temp);
var NavigationCard = (_temp2 = _class2 = function (_React$Component2) {
  babelHelpers.inherits(NavigationCard, _React$Component2);

  function NavigationCard() {
    babelHelpers.classCallCheck(this, NavigationCard);
    return babelHelpers.possibleConstructorReturn(this, (NavigationCard.__proto__ || Object.getPrototypeOf(NavigationCard)).apply(this, arguments));
  }

  babelHelpers.createClass(NavigationCard, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return ReactComponentWithPureRenderMixin.shouldComponentUpdate.call(this, nextProps, nextState);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          panHandlers = _props.panHandlers,
          pointerEvents = _props.pointerEvents,
          renderScene = _props.renderScene,
          style = _props.style,
          props = babelHelpers.objectWithoutProperties(_props, ['panHandlers', 'pointerEvents', 'renderScene', 'style']);


      var viewStyle = style === undefined ? NavigationCardStackStyleInterpolator.forHorizontal(props) : style;

      var viewPanHandlers = panHandlers === undefined ? NavigationCardStackPanResponder.forHorizontal(props) : panHandlers;

      return React.createElement(
        Animated.View,
        babelHelpers.extends({}, viewPanHandlers, {
          pointerEvents: pointerEvents,
          ref: this.props.onComponentRef,
          style: [styles.main, viewStyle], __source: {
            fileName: _jsxFileName,
            lineNumber: 129
          }
        }),
        React.createElement(SceneView, {
          sceneRenderer: renderScene,
          sceneRendererProps: props,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 134
          }
        })
      );
    }
  }]);
  return NavigationCard;
}(React.Component), _class2.propTypes = babelHelpers.extends({}, NavigationPropTypes.SceneRendererProps, {
  onComponentRef: PropTypes.func.isRequired,
  panHandlers: NavigationPropTypes.panHandlers,
  pointerEvents: PropTypes.string.isRequired,
  renderScene: PropTypes.func.isRequired,
  style: PropTypes.any
}), _temp2);


var styles = StyleSheet.create({
  main: {
    backgroundColor: 'white',
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0
  }
});

NavigationCard = NavigationPointerEventsContainer.create(NavigationCard);
NavigationCard = NavigationContainer.create(NavigationCard);

NavigationCard.CardStackPanResponder = NavigationCardStackPanResponder;
NavigationCard.CardStackStyleInterpolator = NavigationCardStackStyleInterpolator;
NavigationCard.PagerPanResponder = NavigationPagerPanResponder;
NavigationCard.PagerStyleInterpolator = NavigationPagerStyleInterpolator;

module.exports = NavigationCard;