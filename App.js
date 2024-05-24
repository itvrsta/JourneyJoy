import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import Beranda from './screens/Beranda';
import ItemScreen from './screens/ItemScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
     <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Beranda" component={Beranda} />
      <Stack.Screen name="ItemScreen" component={ItemScreen} />
      </Stack.Navigator>
  </NavigationContainer>
  );
}