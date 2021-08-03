import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './Login'
import Profile from './Profile'
import Friends from './Friends'

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <View style={styles.container}>
                <NavigationContainer>
                  <Stack.Navigator initialRouteName="Login">
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Friends" component={Friends} />
                    <Stack.Screen name="Profile" component={Profile} />
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
