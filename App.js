import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Chatroom from './pages/Chatroom';
import Settings from './pages/Settings';
import Diary from './pages/Diary';
import Calendar from './pages/Calendar';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import Avatar from './pages/Avatar';
import Name from './pages/Name';
import Nav from './pages/Nav';


const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
         <Stack.Screen name="Home" component={Home} options={{ title: 'Welcome' }} />
          <Stack.Screen name="SignIn" component={SignIn} options={{ title: 'Welcome' }} />
          <Stack.Screen name="Avatar" component={Avatar} options={{ title: 'Welcome' }} />
          <Stack.Screen name="Calendar" component={Calendar} options={{ title: 'Welcome' }} />
          <Stack.Screen name="Diary" component={Diary} options={{ title: 'Welcome' }} />
          <Stack.Screen name="Chatroom" component={Chatroom} options={{ title: 'Welcome' }} />
          <Stack.Screen name="Settings" component={Settings} options={{ title: 'Welcome' }} />
          <Stack.Screen name="Name" component={Name} options={{ title: 'Welcome' }} />
          <Stack.Screen name="Nav" component={Nav} options={{ title: 'Welcome' }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}


