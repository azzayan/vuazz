import React from "react";
import {Image, Linking, Text} from "react-native";
import {Body, Button, Card, CardItem, Container, Content} from "native-base";
import {Actions} from "react-native-router-flux";

const ParkOverviewMain = ({park}) => {
    const {
        name,
        designation,
        states,
        description,
        weatherInfo,
        url,
        directionsInfo,
        directionsUrl,
        latLong
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
                <Button block success style={checkInButtonStyle} onPress={() => Actions.parkCheckInCreate({park})}>
                    <Text style={buttonTextStyle}>
                        CHECK IN!
                    </Text>
                </Button>

                {/* description */}
                <Card style={topCardContainerStyle}>
                    <CardItem style={subHeaderTitleContainerStyle}>
                        <Text style={subHeaderTextStyle}>DESCRIPTION</Text>
                    </CardItem>
                    <CardItem>
                        <Text>{description}</Text>
                    </CardItem>
                </Card>

                {/* how to get there */}
                <Card style={cardContainerStyle}>
                    <CardItem style={subHeaderTitleContainerStyle}>
                        <Text style={subHeaderTextStyle}>HOW TO GET THERE</Text>
                    </CardItem>
                    <CardItem>
                        <Text>Directions: {directionsInfo}</Text>
                    </CardItem>
                    <CardItem>
                        <Text>Lat/Long: {latLong}</Text>
                    </CardItem>
                    <CardItem>
                        <Text style={{fontWeight: "bold"}}
                              onPress={() => {
                                  Linking.openURL(directionsUrl).catch(err => console.error(`The directions URL for ${name} don't work`, err));
                              }}>
                            Tap here for more info on directions (if any)
                        </Text>
                    </CardItem>
                </Card>

                {/* weather info */}
                <Card style={cardContainerStyle}>
                    <CardItem style={subHeaderTitleContainerStyle}>
                        <Text style={subHeaderTextStyle}>WEATHER</Text>
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
        marginBottom: -13
    },
    topCardContainerStyle: {
        marginTop: 20,
        marginRight: 10,
        marginLeft: 10,
        flex: 1
    },
    cardContainerStyle: {
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
    cardContainerStyle,
    checkInButtonStyle,
    urlButtonStyle,
    buttonTextStyle,
    topCardContainerStyle
} = styles;

export default ParkOverviewMain;
