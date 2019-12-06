import React from 'react';
import { Text, View } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Home from '../screens/Home.js';
import Search from '../screens/Search.js';
import Activity from '../screens/Activity.js';
import Profile from '../screens/Profile.js';
import Upload from '../screens/Upload.js';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';


//we need to wrap them in createAppContainer to make it work. No reason
const TabNavigator = createBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: ' ',
            //add a space in between the quote, 'Home'will disappear under the icon
            tabBarIcon: () => (
                <Ionicons name="ios-home" size={32} color="black" />
            )
        }
    },
    Search: {
        screen: Search,
        navigationOptions: {
            tabBarLabel: ' ',
            //add a space in between the quote, 'Home'will disappear under the icon
            tabBarIcon: () => (
                <Ionicons name="ios-search" size={32} color="black" />
            )
        }
    },
    Upload: {
        screen: Upload,
        navigationOptions: {
            tabBarLabel: ' ',
            //add a space in between the quote, 'Home'will disappear under the icon
            tabBarIcon: () => (
                <Ionicons name="md-add-circle-outline" size={32} color="black" />
            )
        }
    },
    Activity: {
        screen: Activity,
        navigationOptions: {
            tabBarLabel: ' ',
            //add a space in between the quote, 'Home'will disappear under the icon
            tabBarIcon: ({ focused }) => (
                <Ionicons name={focused ? 'ios-heart' : 'ios-heart-empty'} size={32} color="black" />
                //focused is when you are on that screen it's one icon, otherwise it's a different icon
                //ex: liked is stuffed heart, unliked is an empty heart
            )
        }
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            tabBarLabel: ' ',
            //add a space in between the quote, 'Home'will disappear under the icon
            tabBarIcon: () => (
                <MaterialCommunityIcons name="alien" size={32} color="black" />
            )
        }
    },
});

export default createAppContainer(TabNavigator);