import React from 'react';
import Login from '../screens/Login.js';
import SignupScreen from '../screens/Signup.js';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


//we need to wrap them in createAppContainer to make it work. No reason
const StackNavigator = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            header: null
        }
        // navigationOptions null will remove the header of the screen
    },
    Signup: {
        screen: SignupScreen
    }
});

export default createAppContainer(StackNavigator);