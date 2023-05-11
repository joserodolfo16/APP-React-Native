import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';


import Home from '../screens/Home';
import Login from '../screens/Login';


const Tab = createBottomTabNavigator();

type TabNavigation = {
  Home: undefined;
  Login: undefined;
}

export type TabType = BottomTabNavigationProp<TabNavigation>;


export default function TabComponent(){
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Login' component={Login} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}