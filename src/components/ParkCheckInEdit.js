import _ from "lodash";
import React, {Component} from "react";
import {connect} from "react-redux";
import ParkCheckInForm from "./ParkCheckInForm";
import {parkCheckInDelete, parkCheckInSave, parkCheckInUpdate} from "../actions";
import {Button, Container, Content} from "native-base";

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
                    <ParkCheckInForm />

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
