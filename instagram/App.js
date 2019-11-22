import React from 'react';
import TabNavigator from './navigation/TabNavigator.js';
import reducer from './reducers/index.js'
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

//create a store from the import of {createStore} and pass in reducer
const store = createStore(reducer);


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <TabNavigator />
      </Provider>
    );
  }
}

//when expo loads, it first  load App.js (the parent)
//and then everything below it (the child)

