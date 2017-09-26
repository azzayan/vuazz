import React from "react";
import {Image, Linking, Text} from "react-native";
import {Body, Button, Card, CardItem, Container, Content} from "native-base";
import {Actions} from "react-native-router-flux";
import FooterBar from "./FooterBar";

const ParkOverviewMain = ({park}) => {
    const {
        name,
        designation,
        states,
        description,
        weatherInfo,
        url
    } = park;

    return (
        <Container>
            <Content>
                {/* intro */}
                <Body style={containerStyle}>
                <Text style={headerTextStyle}>{name}</Text>
                <Text style={headerContentStyle}>{designation}</Text>
                <Text style={headerContentStyle}>Location: {states}</Text>
                </Body>

                {/*park image*/}
                <Body style={containerStyle}>
                <Image source={require(`../../assets/images/parks/arrowhead.png`)}/>
                </Body>

                {/*check in button*/}
                <Button block success style={checkInButtonStyle} onPress={() => Actions.parkCheckInMain({park})}>
                    <Text style={buttonTextStyle}>
                        CHECK IN!
                    </Text>
                </Button>

                {/* description */}
                <Card style={descriptionContainerStyle}>
                    <CardItem style={subHeaderTitleContainerStyle}>
                        <Text style={subHeaderTextStyle}>Description</Text>
                    </CardItem>
                    <CardItem>
                        <Text>{description}</Text>
                    </CardItem>
                </Card>

                {/* weather info */}
                <Card style={{flex: 1, marginRight: 10, marginLeft: 10}}>
                    <CardItem style={subHeaderTitleContainerStyle}>
                        <Text style={subHeaderTextStyle}>Weather</Text>
                    </CardItem>
                    <CardItem>
                        <Text>{weatherInfo}</Text>
                    </CardItem>
                </Card>

                {/*link to park's official NPS page*/}
                <Button block style={urlButtonStyle} onPress={() => {
                    Linking.openURL(url).catch(err => console.error(`The NPS page for ${name} don't work`, err));
                }}>
                    <Text style={buttonTextStyle}>
                        Visit this park's official NPS page
                    </Text>
                </Button>
            </Content>
            <FooterBar/>
        </Container>
    );
};

const styles = {
    containerStyle: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        marginBottom: 10
    },
    headerContentStyle: {
        flexDirection: "column",
        justifyContent: "space-around",
        fontSize: 14
    },
    headerTextStyle: {
        fontSize: 18,
        fontWeight: "bold"
    },
    subHeaderTextStyle: {
        fontSize: 14,
        fontWeight: "bold",
    },
    subHeaderTitleContainerStyle: {
        marginTop: 0,
        marginBottom: -14
    },
    descriptionContainerStyle: {
        marginTop: 20,
        marginRight: 10,
        marginLeft: 10,
        flex: 1
    },
    buttonTextStyle: {
        flexDirection: "column",
        justifyContent: "space-around",
        fontSize: 14,
        fontWeight: "bold",
        color: "white"
    },
    checkInButtonStyle: {
        flex: 1,
        marginLeft: 25,
        marginRight: 25,
        marginTop: 20
    },
    urlButtonStyle: {
        flex: 1,
        marginLeft: 25,
        marginRight: 25,
        marginTop: 20,
        marginBottom: 20
    }
};

const {
    containerStyle,
    headerContentStyle,
    headerTextStyle,
    subHeaderTextStyle,
    subHeaderTitleContainerStyle,
    descriptionContainerStyle,
    checkInButtonStyle,
    urlButtonStyle,
    buttonTextStyle
} = styles;

export default ParkOverviewMain;
