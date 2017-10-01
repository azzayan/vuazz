import React from "react";
import {Router, Scene} from "react-native-router-flux";
import LoginForm from "./components/LoginForm";
import ParkList from "./components/ParkList";
import ParkOverviewMain from "./components/ParkOverviewMain";
import ParkCheckInCreate from "./components/ParkCheckInCreate";
import ActivityFeed from "./components/ActivityFeed";
import UserProfile from "./components/UserProfile";
import Alerts from "./components/Alerts";

const RouterComponent = () => {
    const {routerStyle} = styles;

    return (
        <Router sceneStyle={routerStyle}>
            <Scene key="auth">
                <Scene key="login" component={LoginForm} title="Sign Up / Log In"/>
            </Scene>

            <Scene key="main">
                <Scene key="activityFeed" component={ActivityFeed} title="Activity Feed"/>
                <Scene key="parkList" component={ParkList} title="National Park Units"/>
                <Scene key="parkOverview" component={ParkOverviewMain} title="Park Overview"/>
                <Scene key="parkCheckInCreate" component={ParkCheckInCreate} title="Check In to Park!"/>
                <Scene key="userProfile" component={UserProfile} title="Your Profile"/>
                <Scene key="userAlerts" component={Alerts} title="Alerts"/>
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
