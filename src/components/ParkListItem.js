import React from "react";
import {CardItem, Text} from "native-base";

const ParkListItem = ({park}) => {
    const {fullName} = park;
    const {headerTextStyle} = styles;

    return (
        <CardItem>
            <Text style={headerTextStyle}>{fullName}</Text>
        </CardItem>
    );
};

const styles = {
    headerTextStyle: {
        fontSize: 16,
        fontWeight: 'bold'
    }
};

export default ParkListItem;
