import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Beranda from './screens/Beranda';
import Home from './screens/Home';
import Item from './screens/Item';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
     <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Beranda" component={Beranda} />
      <Stack.Screen name="Item" component={Item} />  
      </Stack.Navigator>
  </NavigationContainer>
  );
}