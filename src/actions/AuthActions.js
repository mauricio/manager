import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOADING_STATE_CHANGE,
} from "./types";
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const emailChange = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text,
  }
};

export const passwordChange = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text,
  }
};

const loadingStateChange = (dispatch, status) => {
  dispatch({type: LOADING_STATE_CHANGE, payload: status});
};

const loginUserSuccess = (dispatch, user) => {
  loadingStateChange(dispatch, false);
  dispatch({type: LOGIN_USER_SUCCESS, payload: user});
  Actions.main();
};

const loginUserFail = (dispatch, error) => {
  loadingStateChange(dispatch, false);
  dispatch({type: LOGIN_USER_FAIL, payload: `Authentication failed. ${error.code} - ${error.message}.`})
};

export const loginUser = ({email, password}) => {
  return (dispatch) => {
    loadingStateChange(dispatch, true);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch, user))
          .catch(error => loginUserFail(dispatch, error));
      })
    ;
  };
};