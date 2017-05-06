import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import ParkList from './components/ParkList';

const RouterComponent = () => {
  const { headerBarStyle, titleStyle, routerStyle } = styles;

  return (
    <Router headerBarStyle={headerBarStyle} titleStyle={titleStyle} sceneStyle={routerStyle}>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Sign Up / Log In" />
      </Scene>

      <Scene key="main">
        <Scene key="parkList" component={ParkList} title="National Park Units" />
      </Scene>
    </Router>
  );
};

const styles = {
  routerStyle: {
    paddingTop: 65
  },
  headerBarStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  titleStyle: {
    marginTop: 19,
    marginBottom: 5,
    color: 'white',
    backgroundColor: '#6E1100',
    fontSize: 22,
    fontWeight: 'bold'
  }
};

export default RouterComponent;
