import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import ParkList from './components/ParkList';

const RouterComponent = () => {
  const { routerStyle } = styles;

  return (
    <Router sceneStyle={routerStyle}>
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
  }
};

export default RouterComponent;
