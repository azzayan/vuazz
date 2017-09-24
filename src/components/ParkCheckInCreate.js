import React, {Component} from "react";
import {connect} from "react-redux";
import {parkCheckInCreate, parkCheckInUpdate} from "../actions";
import {Button, Card, CardItem} from "native-base";
import ParkCheckInMain from "./ParkCheckInMain";

class ParkCheckInCreate extends Component {
    onButtonPress() {
        const {startDate, endDate, rating, review} = this.props;

        this.props.parkCheckInCreate({startDate, endDate, rating, review});
    }

    render() {
        return (
            <Card>
                <ParkCheckInMain {...this.props} />
                <CardItem>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Create
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

export default connect(mapStateToProps, {parkCheckInUpdate, parkCheckInCreate})(ParkCheckInCreate);
