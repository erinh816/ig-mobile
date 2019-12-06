import React from 'react';
// import TabNavigator from './navigation/TabNavigator.js';
import SwitchNavigator from './navigation/SwitchNavigator.js'
import reducer from './reducers/index.js'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
//if we create a store in here, every component below it will have access to this store
import thunkMiddleware from 'redux-thunk';



const middleware = applyMiddleware(thunkMiddleware, logger);


//create a store from the import of {createStore} and pass in reducer
const store = createStore(reducer, middleware);
console.disableYellowBox = true;

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <SwitchNavigator />
      </Provider>
    );
  }
}

//when expo loads, it first  load App.js (the parent)
//and then everything below it (the child)

