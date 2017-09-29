import React, {Component} from "react";
import {Text, View} from "react-native";
import DatePicker from "react-native-datepicker";
import {connect} from "react-redux";
import {Card, CardItem} from "native-base";
import {parkCheckInUpdate} from "../actions";

class ParkCheckInDatePicker extends Component {
    render() {
        return (
            <Card style={datePickerContainerStyle}>
                <CardItem style={subHeaderTitleContainerStyle}>
                    <Text style={subHeaderTextStyle}>Date(s) visited</Text>
                </CardItem>

                {/*date picker for start date*/}
                <CardItem>
                    <View style={startAndEndDateContainerStyle}>
                        <Text style={startAndEndDateTextStyle}>Start date</Text>
                    </View>
                    <DatePicker
                        style={datePickerStyle}
                        date={this.props.startDate}
                        mode="date"
                        placeholder="select date"
                        format="ddd, MMM D, YYYY"
                        minDate={new Date(1916, 8, 25)}
                        maxDate={new Date()}
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: "absolute",
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36
                            }
                        }}
                        onDateChange={value => this.props.parkCheckInUpdate({prop: "startDate", value})}
                    />
                </CardItem>

                {/*date picker for end date*/}
                <CardItem>
                    <View style={startAndEndDateContainerStyle}>
                        <Text style={startAndEndDateTextStyle}>End date  </Text>
                    </View>
                    <DatePicker
                        style={datePickerStyle}
                        date={this.props.endDate}
                        mode="date"
                        placeholder="select date"
                        format="ddd, MMM D, YYYY"
                        minDate={this.props.startDate}
                        maxDate={new Date()}
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: "absolute",
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36
                            }
                        }}
                        disabled={this.props.startDate === ""}
                        onDateChange={value => this.props.parkCheckInUpdate({prop: "endDate", value})}
                    />
                </CardItem>
            </Card>
        )
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
    datePickerContainerStyle: {
        marginRight: 10,
        marginLeft: 10,
        flex: 1
    },
    startAndEndDateTextStyle: {
        fontWeight: "bold"
    },
    datePickerStyle: {
        width: 200
    },
    startAndEndDateContainerStyle: {
        marginRight: 15
    }
};

const {
    subHeaderTextStyle,
    subHeaderTitleContainerStyle,
    datePickerContainerStyle,
    startAndEndDateTextStyle,
    datePickerStyle,
    startAndEndDateContainerStyle
} = styles;

const mapStateToProps = (state) => {
    const {startDate, endDate} = state.parkCheckInForm;

    return {startDate, endDate};
};

export default connect(mapStateToProps, {parkCheckInUpdate})(ParkCheckInDatePicker);