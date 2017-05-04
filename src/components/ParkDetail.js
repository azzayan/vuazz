import React from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const ParkDetail = ({ park }) => {
  const { fullName, description } = park;

  return (
    <Card>
      <CardSection>
          <Text>{fullName}</Text>
          <Text>{description}</Text>
      </CardSection>
    </Card>
  );
};

export default ParkDetail;
