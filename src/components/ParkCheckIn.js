import React from "react";
import {Text} from "react-native";
import {Body, Card, CardItem, Container, Content, Form, Input, Item} from "native-base";
import MultiSlider from "react-native-multi-slider";

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
                        <MultiSlider
                            sliderLength={280}
                            min={0}
                            max={5}
                            step={0.25}
                            allowOverlap
                            snapped
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
        flex: 0
    },
    ratingSliderStyle: {
        flex: 1,
        marginLeft: 25,
        marginRight: 25,
        marginTop: 20
    }
};

export default ParkCheckIn;
