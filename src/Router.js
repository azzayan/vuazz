import React from "react";
import {Router, Scene} from "react-native-router-flux";
import LoginForm from "./components/LoginForm";
import ParkList from "./components/ParkList";
import ParkOverviewMain from "./components/ParkOverviewMain";
import ParkCheckIn from "./components/ParkCheckIn";

const RouterComponent = () => {
    const {routerStyle} = styles;

    return (
        <Router sceneStyle={routerStyle}>
            <Scene key="auth">
                <Scene key="login" component={LoginForm} title="Sign Up / Log In"/>
            </Scene>

            <Scene key="main">
                <Scene key="parkList" component={ParkList} title="National Park Units"/>
                <Scene key="parkOverview" component={ParkOverviewMain} title="Park Overview"/>
                <Scene key="parkCheckIn" component={ParkCheckIn} title="Check In to Park!"/>
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
