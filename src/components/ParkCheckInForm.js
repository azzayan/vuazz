import React, {Component} from "react";
import {View} from "react-native";
import ParkCheckInDatePicker from "./ParkCheckInDatePicker";
import ParkCheckInRating from "./ParkCheckInRating";
import ParkCheckInReview from "./ParkCheckInReview";

export default class ParkCheckInForm extends Component {
    render() {
        return (
            <View>
                <ParkCheckInRating />
                <ParkCheckInReview />
                <ParkCheckInDatePicker />
            </View>
        );
    }
}