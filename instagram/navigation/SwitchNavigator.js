import React from 'react';
import { Text, View } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Home from '../screens/Home.js';
import TabNavigator from './TabNavigator.js';
import AuthNavigator from './AuthNavigator.js'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';


//we need to wrap them in createAppContainer to make it work. No reason
const SwitchNavigator = createSwitchNavigator({
    Home: {
        screen: TabNavigator,
    },
    Auth: {
        screen: AuthNavigator,
    }
},
    {
        initialRouteName: 'Auth',
    }
);

export default createAppContainer(SwitchNavigator);

//if users are logged in, it'll go the TabNavigator
//if not logged in, go to AuthNavigator(signUp and logIn)