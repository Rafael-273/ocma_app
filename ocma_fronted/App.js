import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import { loadFonts } from './fonts';
import React, { useEffect } from 'react';

import Login from './screens/login';
import Register from './screens/register';
import Home from './screens/home';
import RegisterRestaurant from './screens/registerRestaurant';
import EditRestaurant from './screens/editRestaurant';

export default function App() {
  useEffect(() => {
    loadFonts();
  }, []);


  const Stack = createNativeStackNavigator();
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown:false
        }}>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="RegisterRestaurant" component={RegisterRestaurant} />
        <Stack.Screen name="EditRestaurant" component={EditRestaurant} />
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
