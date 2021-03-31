import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ComponentScreen from '../screens/ComponentScreen';
import ListScreen from '../screens/ListScreen';
import ImageScreen from '../screens/ImageScreen';
import CounterScreen from '../screens/CounterScreen';
import ColorScreen from '../screens/ColorScreen';
import SquareScreen from '../screens/SquareScreen';
import SquareScreen1 from '../screens/SquareScreen1';
import CounterScreen1 from '../screens/CounterScreen1';
import TextScreen from '../screens/TextScreen';



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
        <Stack.Screen name="Square" component={SquareScreen} />
        <Stack.Screen name="Square1" component={SquareScreen1} />
        <Stack.Screen name="Count1" component={CounterScreen1} />
        <Stack.Screen name="Text" component={TextScreen} />

      </Stack.Navigator>
      </NavigationContainer>
    );
  }