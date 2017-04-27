import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './src/reducers';
import Header from './src/components/Header';
import LoginForm from './src/components/LoginForm';
import Button from './src/components/Button';
import Spinner from './src/components/Spinner';
import LibraryList from './src/components/LibraryList';

export default class App extends Component {
  state = { loggedIn: null }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBvNybWuCqTS8by01nZ3k_FoyiD0M3yjuU',
      authDomain: 'vuazz-159200.firebaseapp.com',
      databaseURL: 'https://vuazz-159200.firebaseio.com',
      projectId: 'vuazz-159200',
      storageBucket: 'vuazz-159200.appspot.com',
      messagingSenderId: '380754719060'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  reloadReducer() {
    if (module.hot) {
      module.hot.accept('./src/reducers', () => {
        store.replaceReducer(nextRootReducer);
      });
    }

    return store;
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
      }
  }

  render() {
    return (
      <Provider store={this.reloadReducer()}>
        <View style={{ flex: 1 }}>
          <Header headerText="Tech Stack" />
          <LibraryList />
        </View>
      </Provider>
    );
  }
}

const store = createStore(reducers);
const nextRootReducer = require('./src/reducers/index');
