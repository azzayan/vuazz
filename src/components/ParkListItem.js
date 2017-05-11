import React from 'react';
import { Card, CardItem, Text, Body } from 'native-base';

const ParkListItem = ({ park }) => {
  const { name, designation, states } = park;
  const { headerContentStyle, headerTextStyle } = styles;

  return (
    <Card>
      <CardItem>
        <Body>
          <Text style={headerTextStyle}>{name}</Text>
          <Text style={headerContentStyle}>{designation}</Text>
          <Text style={headerContentStyle}>State(s): {states}</Text>
        </Body>
      </CardItem>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerTextStyle: {
    fontSize: 18,
    fontWeight: 'bold'
  }
};

export default ParkListItem;
