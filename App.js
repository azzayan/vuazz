import React, {Component} from "react";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import firebase from "firebase";
import ReduxThunk from "redux-thunk";
import reducers from "./src/reducers";
import Router from "./src/Router";

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

    reloadReducer() {
        if (module.hot) {
            module.hot.accept('./src/reducers', () => {
                store.replaceReducer(nextRootReducer);
            });
        }

        return store;
    }

    render() {
        return (
            <Provider store={this.reloadReducer()}>
                <Router />
            </Provider>
        );
    }
}

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
const nextRootReducer = require('./src/reducers/index');
