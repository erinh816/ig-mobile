import React from 'react';
import { Text, View } from 'react-native';
import HomeScreen from '../screens/Home.js';
import Search from '../screens/Search.js';
import Activity from '../screens/Activity.js';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';


//we need to wrap them in createAppContainer to make it work. No reason
const TabNavigator = createBottomTabNavigator({
    Home: HomeScreen,
    Search: Search,
    Activity: Activity
});

export default createAppContainer(TabNavigator);