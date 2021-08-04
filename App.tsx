import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './Login'
import Profile from './Profile'
import Friends from './Friends'
import NavBar from './NavBar'

const Stack = createStackNavigator();
export default function App() {
  return (
                <NavigationContainer>
                  <Stack.Navigator initialRouteName="Login">
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Friends" component={Friends} />
                    <Stack.Screen name="Profile" component={Profile} />
                  </Stack.Navigator>
                </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
