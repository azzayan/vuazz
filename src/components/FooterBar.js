import React, {Component} from "react";
import {Text} from "react-native";
import {Button, Footer, FooterTab, Icon} from "native-base";
import {Actions} from "react-native-router-flux";

export default class FooterBar extends Component {
    render() {
        const {textStyle} = styles;

        return (
            <Footer>
                <FooterTab>
                    <Button vertical onPress={() => Actions.activityFeed()}>
                        <Icon name="md-paper"/>
                        <Text style={textStyle}>Feed</Text>
                    </Button>
                    <Button vertical onPress={() => Actions.parkList()}>
                        <Icon name="md-search"/>
                        <Text style={textStyle}>Search</Text>
                    </Button>
                    <Button vertical onPress={() => Actions.userProfile()}>
                        <Icon name="md-person"/>
                        <Text style={textStyle}>Profile</Text>
                    </Button>
                    <Button vertical onPress={() => Actions.userAlerts()}>
                        <Icon name="md-notifications"/>
                        <Text style={textStyle}>Alerts</Text>
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}

const styles = {
    textStyle: {
        color: "#fff"
    }
};