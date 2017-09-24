import React, {Component} from "react";
import {AutoGrowingTextInput} from "react-native-autogrow-textinput";
import {Text} from "react-native";
import {Card, CardItem} from "native-base";

export default  class ParkCheckInReview extends Component {
    constructor(props) {
        super(props);
        this.state = {textValue: ""};
    }

    render() {
        return (
            <Card style={descriptionContainerStyle}>
                <CardItem style={subHeaderTitleContainerStyle}>
                    <Text style={subHeaderTextStyle}>Review</Text>
                </CardItem>
                <CardItem>
                    <AutoGrowingTextInput
                        value={this.state.textValue}
                        onChange={(event) => this._onChange(event)}
                        style={textInput}
                        placeholder={"Tell your friends about your experience!"}
                        maxHeight={200}
                        minHeight={70}
                        ref={(r) => {
                            this._textInput = r;
                        }}
                    />
                </CardItem>
            </Card>

        );
    }

    _onChange(event) {
        this.setState({textValue: event.nativeEvent.text || ""});
    }

    _resetTextInput() {
        this._textInput.clear();
        this._textInput.resetHeightToMin();
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
