import firebase from "firebase";
import {Actions} from "react-native-router-flux";
import {PARK_CHECK_IN_CREATE, PARK_CHECK_IN_SAVE_SUCCESS, PARK_CHECK_IN_UPDATE} from "./types";

export const parkCheckInUpdate = ({prop, value}) => {
    return {
        type: PARK_CHECK_IN_UPDATE,
        payload: {prop, value}
    };
};

export const parkCheckInCreate = ({startDate, endDate, rating, review}) => {
    const {currentUser} = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/checkins`)
            .push({startDate, endDate, rating, review})
            .then(() => {
                dispatch({type: PARK_CHECK_IN_CREATE});
                Actions.userProfile({type: "reset"});
            });
    };
};

export const parkCheckInSave = ({startDate, endDate, rating, review, uid}) => {
    const {currentUser} = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/checkins/${uid}`)
            .set({startDate, endDate, rating, review})
            .then(() => {
                dispatch({type: PARK_CHECK_IN_SAVE_SUCCESS});
                Actions.userProfile({type: "reset"});
            });
    };
};

export const parkCheckInDelete = ({uid}) => {
    const {currentUser} = firebase.auth();

    return () => {
        firebase.database().ref(`/users/${currentUser.uid}/checkins/${uid}`)
            .remove()
            .then(() => {
                Actions.userProfile({type: "reset"});
            });
    };
};