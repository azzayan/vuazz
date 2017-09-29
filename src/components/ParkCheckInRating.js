import React, {Component} from "react";
import Stars from "react-native-stars-rating";
import {Card, CardItem} from "native-base";
import {Text} from "react-native";
import {connect} from "react-redux";
import {parkCheckInUpdate} from "../actions";


class ParkCheckInRating extends Component {
    render() {
        return (
            <Card style={ratingContainerStyle}>
                <CardItem style={subHeaderTitleContainerStyle}>
                    <Text style={subHeaderTextStyle}>Rate this park!</Text>
                </CardItem>
                <CardItem style={ratingSliderStyle}>
                    <Stars
                        isActive={true}
                        rateMax={5}
                        isHalfStarEnabled={true}
                        onStarPress={value => this.props.parkCheckInUpdate({prop: "rating", value})}
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
    ratingContainerStyle: {
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
    ratingContainerStyle,
    ratingSliderStyle
} = styles;

const mapStateToProps = (state) => {
    const {rating} = state.parkCheckInForm;
    
    return {rating};
};

export default connect(mapStateToProps, {parkCheckInUpdate})(ParkCheckInRating);