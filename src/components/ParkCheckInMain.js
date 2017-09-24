import React from "react";
import {Image, Text} from "react-native";
import {Body, Container, Content} from "native-base";
import ParkCheckInForm from "./ParkCheckInForm";

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

                <ParkCheckInForm />
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
    }
};

const {
    containerStyle,
    headerContentStyle,
    headerTextStyle
} = styles;

export default ParkCheckInMain;
