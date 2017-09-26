import React, {Component} from "react";
import Stars from "react-native-stars-rating";
import {Card, CardItem} from "native-base";
import {Text} from "react-native";
import {connect} from "react-redux";
import {parkCheckInUpdate} from "../actions";


class ParkCheckInRating extends Component {
    constructor(props) {
        super(props);
        this.state = {rating: 1};

        this.onRatingChange = this.onRatingChange.bind(this);
    }

    onRatingChange(rating) {
        this.setState({
            rating: rating
        });
    }

    render() {
        return (
            <Card style={descriptionContainerStyle}>
                <CardItem style={subHeaderTitleContainerStyle}>
                    <Text style={subHeaderTextStyle}>Rate this park!</Text>
                </CardItem>
                <CardItem style={ratingSliderStyle}>
                    <Stars
                        isActive={true}
                        rateMax={5}
                        isHalfStarEnabled={true}
                        onStarPress={this.onRatingChange}
                        rate={0}
                        size={55}
                    />
                </CardItem>
            </Card>
        )
    }
}

const styles = {
    subHeaderTextStyle: {
        fontSize: 16,
        fontWeight: "bold",
    },
    subHeaderTitleContainerStyle: {
        marginTop: 0,
    },
    descriptionContainerStyle: {
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

const {
    subHeaderTextStyle,
    subHeaderTitleContainerStyle,
    descriptionContainerStyle,
    ratingSliderStyle
} = styles;

const mapStateToProps = (state) => {
    const {rating} = state.parkCheckInForm;

    return {rating};
};

export default connect(mapStateToProps, {parkCheckInUpdate})(ParkCheckInRating);