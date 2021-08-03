import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './Login'
import Profile from './Profile'
import Friends from './Friends'

const Stack = createStackNavigator();
export default function App() {
  return (
    <View style={styles.container}>
    <Profile/>
           <NavigationContainer>
                          <Stack.Navigator>
                          <Stack.Screen name="Login" component={Login} />
                          <Stack.Screen name="Profile" component={Profile} />
                          <Stack.Screen name="Friends" component={Friends} />
                          </Stack.Navigator>
            </NavigationContainer>
    </View>
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
