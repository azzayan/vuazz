import React, {Component} from "react";
import {Text} from "react-native";
import {connect} from "react-redux";
import {parkCheckInUpdate} from "../actions";
import CalendarPicker from "react-native-calendar-picker";
import {Card, CardItem} from "native-base";

class ParkCheckInDatePicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedStartDate: null,
            selectedEndDate: null,
        };
        this.onDateChange = this.onDateChange.bind(this);
    }

    onDateChange(date, type) {
        if (type === "END_DATE") {
            this.setState({
                selectedEndDate: date,
            });
        } else {
            this.setState({
                selectedStartDate: date,
                selectedEndDate: null,
            });
        }
    }

    render() {
        // used for printing out names of months and dates from Date() object
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        // start and end date stuff
        const {selectedStartDate, selectedEndDate} = this.state;
        const minDate = new Date(1916, 8, 25);  // creation of National Park Service
        const maxDate = new Date(); // today
        const startDate = selectedStartDate ? `${days[selectedStartDate.getDay()]},  ${months[selectedStartDate.getMonth()]} ${selectedStartDate.getDate()}, ${selectedStartDate.getFullYear()}`.toString() : "";
        const endDate = selectedEndDate ? `${days[selectedEndDate.getDay()]},  ${months[selectedEndDate.getMonth()]} ${selectedEndDate.getDate()}, ${selectedEndDate.getFullYear()}`.toString() : "";

        return (
            <Card style={calendarContainerStyle}>
                <CardItem style={subHeaderTitleContainerStyle}>
                    <Text style={subHeaderTextStyle}>Date(s) visited</Text>
                </CardItem>
                <CardItem>
                    <CalendarPicker
                        allowRangeSelection={true}
                        minDate={minDate}
                        maxDate={maxDate}
                        selectedDayColor="#1984C4"
                        todayBackgroundColor="#BADAED"
                        selectedDayTextColor="#FFFFFF"
                        onDateChange={this.onDateChange}
                    />
                </CardItem>
                <CardItem style={startDateContainerStyle}>
                    <Text style={startAndEndDateTextStyle}>Start date: </Text><Text>{startDate}</Text>
                </CardItem>
                <CardItem>
                    <Text style={startAndEndDateTextStyle}>End date:   </Text><Text>{endDate}</Text>
                </CardItem>
            </Card>
        );
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
    calendarContainerStyle: {
        flex: 1
    },
    startDateContainerStyle: {
        marginBottom: -13
    },
    startAndEndDateTextStyle: {
        fontWeight: "bold"
    }
};

const {
    subHeaderTextStyle,
    subHeaderTitleContainerStyle,
    calendarContainerStyle,
    startDateContainerStyle,
    startAndEndDateTextStyle
} = styles;

const mapStateToProps = (state) => {
    const {selectedStartDate, selectedEndDate} = state.parkCheckInForm;

    return {selectedStartDate, selectedEndDate};
};

export default connect(mapStateToProps, {parkCheckInUpdate})(ParkCheckInDatePicker);