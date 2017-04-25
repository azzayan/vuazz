import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import Header from './src/components/Header';
import LoginForm from './src/components/LoginForm';

export default class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBvNybWuCqTS8by01nZ3k_FoyiD0M3yjuU',
      authDomain: 'vuazz-159200.firebaseapp.com',
      databaseURL: 'https://vuazz-159200.firebaseio.com',
      projectId: 'vuazz-159200',
      storageBucket: 'vuazz-159200.appspot.com',
      messagingSenderId: '380754719060'
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}
