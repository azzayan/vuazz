import React, {Component} from "react";
import {Text} from "react-native";
import {Container, Content} from "native-base";
import FooterBar from "./FooterBar";

export default class ActivityFeed extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Text>This is the placeholder for the user's Activity Feed.</Text>
                </Content>
                <FooterBar/>
            </Container>
        );
    }
}
