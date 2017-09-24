import React, {Component} from "react";
import {connect} from "react-redux";
import {parkCheckInUpdate} from "../actions";
import {View} from "react-native";
import ParkCheckInDatePicker from "./ParkCheckInDatePicker";
import ParkCheckInRating from "./ParkCheckInRating";
import ParkCheckInReview from "./ParkCheckInReview";

class ParkCheckInForm extends Component {
    render() {
        return (
            <View>
                <ParkCheckInDatePicker />
                <ParkCheckInRating />
                <ParkCheckInReview />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const {startDate, endDate, rating, review} = state.parkCheckInForm;

    return {startDate, endDate, rating, review};
};

export default connect(mapStateToProps, {parkCheckInUpdate})(ParkCheckInForm);
