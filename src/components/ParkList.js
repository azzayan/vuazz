import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import ParkDetail from './ParkDetail';

export default class ParkList extends Component {
  state = { parks: [] };

  componentWillMount() {
    fetch('https://developer.nps.gov/api/v0/parks?limit=50', {
      method: 'GET',
      headers: {
        'Authorization': 'C127CF67-F403-4823-AA42-B87B1E235D23',
      }
    })
    .then((response) => {
      return response.json();
    })
    .then((responseData) => {
      console.log(responseData.data);
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
      <ParkDetail key={park.id} park={park} />
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
