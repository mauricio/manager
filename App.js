import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';
import firebase from 'firebase'
import LoginForm from './src/components/LoginForm';
import ReduxThunk from 'redux-thunk';
import Router from  './src/Router';

export default class App extends React.Component {

  componentWillMount() {

  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
      <Router/>
      </Provider>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
