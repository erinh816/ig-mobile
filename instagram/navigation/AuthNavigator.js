import React from 'react';
import Login from '../screens/Login.js';
import Signup from '../screens/Signup.js';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


//we need to wrap them in createAppContainer to make it work. No reason
const StackNavigator = createStackNavigator({
    Login: {
        screen: Login,
    },
    Signup: {
        screen: Signup
    }
});

export default createAppContainer(StackNavigator);