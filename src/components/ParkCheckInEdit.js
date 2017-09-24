import _ from "lodash";
import React, {Component} from "react";
import {connect} from "react-redux";
import ParkCheckInMain from "./ParkCheckInMain";
import {parkCheckInDelete, parkCheckInSave, parkCheckInUpdate} from "../actions";
import {Button, Card, CardItem} from "native-base";

class ParkCheckInEdit extends Component {
    state = {showModal: false};

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
            <Card>
                <ParkCheckInMain />

                <CardItem>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save changes
                    </Button>
                </CardItem>

                <CardItem>
                    <Button>
                        Delete check-in
                    </Button>
                </CardItem>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const {startDate, endDate, rating, review} = state.parkCheckInForm;

    return {startDate, endDate, rating, review};
};

export default connect(mapStateToProps, {parkCheckInUpdate, parkCheckInSave, parkCheckInDelete})(ParkCheckInEdit);
