import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  PARK_CHECK_IN_UPDATE,
  PARK_CHECK_IN_CREATE,
  PARKS_FETCH_SUCCESS,
  PARK_CHECK_IN_SAVE_SUCCESS
} from './types';

export const parkUpdate = ({ prop, value }) => {
  return {
    type: PARK_CHECK_IN_UPDATE,
    payload: { prop, value }
  };
};

export const parkCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/parks`)
      .push({ name, phone, shift })
      .then(() => {
        dispatch({ type: PARK_CHECK_IN_CREATE });
        Actions.parkList({ type: 'reset' });
      });
  };
};

export const parksFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/parks`)
      .on('value', snapshot => {
        dispatch({ type: PARKS_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const parkSave = ({ name, phone, shift, uid }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/parks/${uid}`)
      .set({ name, phone, shift })
      .then(() => {
        dispatch({ type: PARK_CHECK_IN_SAVE_SUCCESS });
        Actions.parkList({ type: 'reset' });
      });
  };
};

export const parkDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/parks/${uid}`)
      .remove()
      .then(() => {
        Actions.parkList({ type: 'reset' });
      });
  };
};
