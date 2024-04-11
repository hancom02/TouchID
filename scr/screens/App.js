import React from 'react';
// import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
//import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Trending from './Trending';
import Latest from './Latest';
import HomeScreen from './HomeScreen';
import LoginScren from './LoginScreen';

//const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() { 


  return (    
    <NavigationContainer>     
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen name='Login' component={LoginScren} options={{headerShown: false}}/> 
          <Stack.Screen name='Home' component={HomeScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  

  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textLogo: {
    fontSize: 30,
    // fontVariant: 12,
    fontWeight: '500',
    letterSpacing: 6,
    color: 'lightblue',
    marginBottom: 30
},
});

