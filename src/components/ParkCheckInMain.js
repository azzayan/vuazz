import React from "react";
import {Text} from "react-native";
import {Body, Container, Content} from "native-base";
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
                {/* park intro */}
                <Body>
                <Text style={headerTextStyle}>{name}</Text>
                <Text style={headerContentStyle}>{designation}</Text>
                <Text style={headerContentStyle}>Location: {states}</Text>
                </Body>

                {/*dates the user visited the park*/}
                <ParkCheckInDatePicker />

                {/*user rating*/}
                <ParkCheckInRating />

                {/*user review*/}
                <ParkCheckInReview />
            </Content>
        </Container>
    );
};

const styles = {
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
    headerContentStyle,
    headerTextStyle
} = styles;

export default ParkCheckInMain;
