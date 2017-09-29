import React, {Component} from "react";
import {Text, TextInput} from "react-native";
import {Card, CardItem} from "native-base";
import {connect} from "react-redux";
import {parkCheckInUpdate} from "../actions";

class ParkCheckInReview extends Component {
    render() {
        return (
            <Card style={reviewContainerStyle}>
                <CardItem style={subHeaderTitleContainerStyle}>
                    <Text style={subHeaderTextStyle}>Review</Text>
                </CardItem>
                <CardItem>
                    <TextInput
                        value={this.props.review}
                        onChangeText={value => this.props.parkCheckInUpdate({prop: "review", value})}
                        style={textInput}
                        multiline={true}
                        placeholder="Tell your friends about your experience!"
                        numberOfLines={5}
                        maxLength={1000}
                    />
                </CardItem>
            </Card>
        );
    }
}

const styles = {
    textInput: {
        fontSize: 14,
        flex: 1,
        backgroundColor: "white",
        borderWidth: 0
    },
    subHeaderTextStyle: {
        fontSize: 16,
        fontWeight: "bold",
    },
    subHeaderTitleContainerStyle: {
        marginTop: 0,
    },
    reviewContainerStyle: {
        marginRight: 10,
        marginLeft: 10,
        flex: 1
    }
};
const {
    textInput,
    subHeaderTextStyle,
    subHeaderTitleContainerStyle,
    reviewContainerStyle
} = styles;

const mapStateToProps = (state) => {
    const {review} = state.parkCheckInForm;

    return {review};
};

export default connect(mapStateToProps, {parkCheckInUpdate})(ParkCheckInReview);