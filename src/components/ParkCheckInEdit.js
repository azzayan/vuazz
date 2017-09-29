import _ from "lodash";
import React, {Component} from "react";
import {connect} from "react-redux";
import {parkCheckInDelete, parkCheckInSave, parkCheckInUpdate} from "../actions";
import {Button, Container, Content} from "native-base";
import ParkCheckInRating from "./ParkCheckInRating";
import ParkCheckInReview from "./ParkCheckInReview";
import ParkCheckInDatePicker from "./ParkCheckInDatePicker";

class ParkCheckInEdit extends Component {
    componentWillMount() {
        _.each(this.props.park, (value, prop) => {
            this.props.parkCheckInUpdate({prop, value});
        });
    }

    onButtonPress() {
        const {startDate, endDate, rating, review} = this.props;

        this.props.parkCheckInSave({startDate, endDate, rating, review, uid: this.props.park.uid});
    }

    render() {
        return (
            <Container>
                <Content>
                    <ParkCheckInRating />

                    <ParkCheckInReview />

                    <ParkCheckInDatePicker />

                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save changes
                    </Button>

                    <Button>
                        Delete check-in
                    </Button>
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    const {startDate, endDate, rating, review} = state.parkCheckInForm;

    return {startDate, endDate, rating, review};
};

export default connect(mapStateToProps, {parkCheckInUpdate, parkCheckInSave, parkCheckInDelete})(ParkCheckInEdit);
