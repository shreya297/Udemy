import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ComponentScreen from '../screens/ComponentScreen';
import ListScreen from '../screens/ListScreen';
import ImageScreen from '../screens/ImageScreen';
import CounterScreen from '../screens/CounterScreen';
import ColorScreen from '../screens/ColorScreen';

const Stack = createStackNavigator();

export default function MainNavigator() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Component" component={ComponentScreen} />
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="Image" component={ImageScreen} />
        <Stack.Screen name="Count" component={CounterScreen} />
        <Stack.Screen name="Color" component={ColorScreen} />
      </Stack.Navigator>
      </NavigationContainer>
    );
  }