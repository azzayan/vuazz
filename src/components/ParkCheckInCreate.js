import React, {Component} from "react";
import {Text} from "react-native";
import {connect} from "react-redux";
import {parkCheckInCreate, parkCheckInUpdate} from "../actions";
import {Button, Container, Content} from "native-base";
import ParkCheckInRating from "./ParkCheckInRating";
import ParkCheckInReview from "./ParkCheckInReview";
import ParkCheckInDatePicker from "./ParkCheckInDatePicker";

class ParkCheckInCreate extends Component {
    onButtonPress() {
        const {startDate, endDate, rating, review} = this.props;

        this.props.parkCheckInCreate({startDate, endDate, rating, review});
    }

    render() {
        return (
            <Container>
                <Content>
                    <ParkCheckInRating {...this.props} />

                    <ParkCheckInReview {...this.props} />

                    <ParkCheckInDatePicker {...this.props} />

                    <Button block success
                            style={checkInButtonStyle}
                            onPress={this.onButtonPress.bind(this)}>
                        <Text style={buttonTextStyle}>
                            SUBMIT!
                        </Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

const styles = {
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
    buttonTextStyle,
    checkInButtonStyle
} = styles;

const mapStateToProps = (state) => {
    const {startDate, endDate, rating, review} = state.parkCheckInForm;

    return {startDate, endDate, rating, review};
};

export default connect(mapStateToProps, {parkCheckInUpdate, parkCheckInCreate})(ParkCheckInCreate);
