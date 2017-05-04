import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import ParkDetail from './ParkDetail';

export default class ParkList extends Component {
  state = { parks: [] };

  componentWillMount() {
    fetch('https://developer.nps.gov/api/v0/parks', {
      method: 'GET',
      headers: {
        'Authorization': 'C127CF67-F403-4823-AA42-B87B1E235D23',
        'Content-Type': 'application/json',
      }
    })
    .then((response) => {
      return response.json();
    })
    .then((responseData) => {
      return this.setState({
        parks: responseData.data
      });
    })
    .catch((error) => {
      console.log('There has been a problem with your fetch operation:', error.message);
    });
  }

  renderParks() {
    return this.state.parks.map(park =>
      <ParkDetail key={park.fullName} park={park} />
    );
  }

  render() {
    return (
      <ScrollView>
        {this.renderParks()}
      </ScrollView>
    );
  }
}
