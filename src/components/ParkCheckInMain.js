import React from "react";
import {Image, Text} from "react-native";
import {Body, Container, Content, Button} from "native-base";
import ParkCheckInRating from "./ParkCheckInRating";
import ParkCheckInReview from "./ParkCheckInReview";
import ParkCheckInDatePicker from "./ParkCheckInDatePicker";

const ParkCheckInMain = ({park}) => {
    const {
        name,
        designation,
        states
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

                <ParkCheckInRating />

                <ParkCheckInReview />

                <ParkCheckInDatePicker />

                {/*submit button*/}
                <Button block success style={checkInButtonStyle}>
                    <Text style={buttonTextStyle}>
                        SUBMIT!
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
        marginBottom: 20
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
        marginTop: 20,
        marginBottom: 20
    }
};

const {
    containerStyle,
    headerContentStyle,
    headerTextStyle,
    buttonTextStyle,
    checkInButtonStyle
} = styles;

export default ParkCheckInMain;
