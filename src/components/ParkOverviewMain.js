import React from "react";
import {Text} from "react-native";
import {Body, Card, CardItem, Container, Content} from "native-base";

const ParkOverviewMain = ({park}) => {
    const {fullName, description, states, url, weatherInfo} = park;
    const {headerContentStyle, headerTextStyle, subHeaderTextStyle} = styles;

    return (

        <Container>
            <Content>
                {/* intro */}
                <Body>
                <Text style={headerTextStyle}>{fullName}</Text>
                <Text style={headerContentStyle}>State(s): {states}</Text>
                </Body>

                {/* description */}
                <Text style={subHeaderTextStyle}>Description</Text>
                <Card style={{flex: 0}}>
                    <CardItem>
                        <Text>{description}</Text>
                    </CardItem>
                </Card>

                {/* weather info */}
                <Text style={subHeaderTextStyle}>Weather</Text>
                <Card style={{flex: 0}}>
                    <CardItem>
                        <Text>{weatherInfo}</Text>
                    </CardItem>
                </Card>

            </Content>
        </Container>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    headerTextStyle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    subHeaderTextStyle: {
        fontSize: 14,
        fontWeight: 'bold'
    }
};

export default ParkOverviewMain;
