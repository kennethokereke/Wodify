import React from 'react'
import {createMaterialTopTabNavigator, createAppContainer} from 'react-navigation'
import TodayWOD from '../screens/TodayWOD'
import CustomWOD from '../screens/customWOD'
import PastWOD from '../screens/pastWOD'
import {theme} from '../constants'





const topNav = createMaterialTopTabNavigator (
   {
    TodayWOD,
    CustomWOD,
    PastWOD,

   } ,{
    initialRouteName: 'TodayWOD',
    
    tabBarOptions: {
        activeBackgroundColor: '#7818C9',
        inactiveBackgroundColor: '#EDEDED',
        activeTintColor: '#fff',
        inactiveTintColor: theme.colors.gray2,
        pressColor: theme.colors.white,
        style: {
            backgroundColor: theme.colors.purple,
            paddingTop: 60
    
        }
        
    }, 
}

);

export default createAppContainer(topNav);
