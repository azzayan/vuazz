import React, {Component} from "react";
import {AutoGrowingTextInput} from "react-native-autogrow-textinput";

export default  class ParkCheckInReview extends Component {
    constructor(props) {
        super(props);
        this.state = {textValue: ""};
    }

    render() {
        return (
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
    }
};
const {textInput} = styles;