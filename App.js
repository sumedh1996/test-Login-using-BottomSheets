import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import FirstScreen from './Screens/FirstScreen';

import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Screens/LoginScreen';
import NewAccountScreen from './Screens/NewAccountScreen';


export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={FirstScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="NewAccount" component={NewAccountScreen} />
      </Stack.Navigator>

    </NavigationContainer>

  );
}
