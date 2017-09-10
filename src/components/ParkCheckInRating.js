import React, {Component} from "react";
import Stars from "react-native-stars-rating";

export default class ParkCheckInRating extends Component {
    render() {
        return (
            <Stars
                isActive={true}
                rateMax={5}
                isHalfStarEnabled={true}
                onStarPress={(rating) => console.log(rating)}
                rate={0}
                size={55}
            />
        )
    }
}