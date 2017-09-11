import React from "react";
import {Text} from "react-native";
import {Body, Card, CardItem, Container, Content} from "native-base";
import ParkCheckInRating from "./ParkCheckInRating";
import ParkCheckInReview from "./ParkCheckInReview";
import ParkCheckInDatePicker from "./ParkCheckInDatePicker";

const ParkCheckIn = ({park}) => {
    const {
        name,
        designation,
        states
    } = park;
    const {
        headerContentStyle,
        headerTextStyle,
        subHeaderTextStyle,
        subHeaderTitleContainerStyle,
        descriptionContainerStyle,
        ratingSliderStyle,
        calendarContainerStyle
    } = styles;

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
                <Card style={calendarContainerStyle}>
                    <CardItem style={subHeaderTitleContainerStyle}>
                        <Text style={subHeaderTextStyle}>Dates visited</Text>
                    </CardItem>
                    <CardItem>
                        <ParkCheckInDatePicker />
                    </CardItem>
                </Card>

                {/*user rating*/}
                <Card style={descriptionContainerStyle}>
                    <CardItem style={subHeaderTitleContainerStyle}>
                        <Text style={subHeaderTextStyle}>Rate this park!</Text>
                    </CardItem>
                    <CardItem style={ratingSliderStyle}>
                        <ParkCheckInRating />
                    </CardItem>
                </Card>

                {/*user review*/}
                <Card style={descriptionContainerStyle}>
                    <CardItem style={subHeaderTitleContainerStyle}>
                        <Text style={subHeaderTextStyle}>Review</Text>
                    </CardItem>
                    <CardItem>
                        <ParkCheckInReview />
                    </CardItem>
                </Card>
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
    },
    subHeaderTextStyle: {
        fontSize: 16,
        fontWeight: "bold",
    },
    subHeaderTitleContainerStyle: {
        marginTop: 0,
    },
    descriptionContainerStyle: {
        marginTop: 20,
        marginRight: 10,
        marginLeft: 10,
        flex: 1
    },
    ratingSliderStyle: {
        flex: 1,
        marginLeft: 25,
        marginRight: 25,
    },
    calendarContainerStyle: {
        flex: 1
    }
};

export default ParkCheckIn;
