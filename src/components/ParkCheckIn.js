import React from "react";
import {Text} from "react-native";
import {Body, Card, CardItem, Container, Content, Form, Input, Item} from "native-base";
import Stars from "react-native-stars-rating";

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
        ratingSliderStyle
    } = styles;

    return (
        <Container>
            <Content>
                {/* intro */}
                <Body>
                <Text style={headerTextStyle}>{name}</Text>
                <Text style={headerContentStyle}>{designation}</Text>
                <Text style={headerContentStyle}>State(s): {states}</Text>
                </Body>

                {/*user rating*/}
                <Card style={descriptionContainerStyle}>
                    <CardItem style={subHeaderTitleContainerStyle}>
                        <Text style={subHeaderTextStyle}>Rate this park!</Text>
                    </CardItem>
                    <CardItem style={ratingSliderStyle}>
                        <Stars
                            isActive={true}
                            rateMax={5}
                            isHalfStarEnabled={true}
                            onStarPress={(rating) => console.log(rating)}
                            rate={1}
                            size={55}
                        />
                    </CardItem>
                </Card>

                {/*user review of park*/}
                <Card style={descriptionContainerStyle}>
                    <CardItem style={subHeaderTitleContainerStyle}>
                        <Text style={subHeaderTextStyle}>Review</Text>
                    </CardItem>
                    <Form>
                        <Item>
                            <Input placeholder="Tell your friends about your experience!"
                                   multiline={true}
                                   maxLength={1000}
                            />
                        </Item>
                    </Form>
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
        fontSize: 14,
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
    }
};

export default ParkCheckIn;
