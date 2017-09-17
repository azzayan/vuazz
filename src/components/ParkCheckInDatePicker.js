import React, {Component} from "react";
import {Text, View} from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import {CardItem} from "native-base";

export default class ParkCheckInDatePicker extends Component {
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
            <View>
                <CalendarPicker
                    allowRangeSelection={true}
                    minDate={minDate}
                    maxDate={maxDate}
                    todayBackgroundColor="#e1f3cc"
                    selectedDayColor="#6AC700"
                    selectedDayTextColor="#FFFFFF"
                    onDateChange={this.onDateChange}
                />
                <CardItem>
                    <Text style={{fontWeight: "bold"}}>Start Date: </Text><Text>{startDate}</Text>
                </CardItem>
                <CardItem>
                    <Text style={{fontWeight: "bold"}}>End Date: </Text><Text>{endDate}</Text>
                </CardItem>
            </View>

        );
    }
}