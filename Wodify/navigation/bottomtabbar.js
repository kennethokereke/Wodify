//Home
//Exploretab
//Workout
//Journaltab
//Profile

import React  from 'react'
import {Text, View, StyleSheet} from 'react-native'
import {createMaterialBottomTabNavigator, createAppContainer, createSwitchNavigator, createBottomTabNavigator, createNavigationContainer, createStackNavigator} from 'react-navigation'
import Home from '../screens/Home'
import Explore from '../screens/Exploretab'

import Journal from '../screens/Journaltab'
import Profile from '../screens/Profile'
import {theme} from '../constants'
import topNav from './Topbarnavigator'
import {Icon} from 'react-native-elements'








const Appstack = createBottomTabNavigator(
    {
        Home,
        Explore,
        topNav,
        Journal,
        Profile
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({tintcolor}) => {
                let {routeName} = navigation.state; 
                let iconName;
                if(routeName === 'Home') {
                    iconName = 'home'
                } else if (routeName === 'Explore') {
                    iconName = 'search';
                } else if (routeName === 'topNav') {
                    iconName = 'star';
                }else if (routeName === 'Journal') {
                    iconName = 'heart';
                }else if (routeName === 'Profile') {
                    iconName = 'user';
                }
                return (<Icon
                    color={`${tintcolor}`}
                    type='font-awesome'
                    name={`${iconName}`}
                    size={25} />
                    );
            }
        }),
        tabBarOptions: {
            activeBackgroundColor: theme.colors.primary,
            inactiveBackgroundColor: '#EDEDED',
            activeTintColor: '#fff',
            inactiveTintColor: theme.colors.gray2
        }
    }
);

export default createAppContainer(Appstack)






