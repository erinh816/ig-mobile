import React from 'react';
// import TabNavigator from './navigation/TabNavigator.js';
import SwitchNavigator from './navigation/SwitchNavigator.js'
import reducer from './reducers/index.js'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
//if we create a store in here, every component below it will have access to this store
import thunkMiddleware from 'redux-thunk';



const middleware = applyMiddleware(thunkMiddleware);

//create a store from the import of {createStore} and pass in reducer
const store = createStore(reducer, middleware);


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

