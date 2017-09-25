import React, {Component} from "react";
import {Text, TextInput} from "react-native";
import {Card, CardItem} from "native-base";
import {connect} from "react-redux";
import {parkCheckInUpdate} from "../actions";

class ParkCheckInReview extends Component {
    constructor(props) {
        super(props);
        this.state = {rating: ""};
    }

    render() {
        return (
            <Card style={descriptionContainerStyle}>
                <CardItem style={subHeaderTitleContainerStyle}>
                    <Text style={subHeaderTextStyle}>Review</Text>
                </CardItem>
                <CardItem>
                    <TextInput
                        value={this.state.rating}
                        onChangeText={(rating) => this.setState({rating})}
                        style={textInput}
                        multiline={true}
                        numberOfLines={10}
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
    descriptionContainerStyle: {
        marginRight: 10,
        marginLeft: 10,
        flex: 1
    }
};
const {
    textInput,
    subHeaderTextStyle,
    subHeaderTitleContainerStyle,
    descriptionContainerStyle
} = styles;

const mapStateToProps = (state) => {
    const {rating} = state.parkCheckInForm;

    return {rating};
};

export default connect(mapStateToProps, {parkCheckInUpdate})(ParkCheckInReview);