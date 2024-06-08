import {StyleSheet, Text, View, Button} from 'react-native';
import React, {useReducer} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/views/Home/Index';
import Main from './src/views/Main/Index';
import Login from './src/views/Login/Index';
import Counter from './src/views/HitCounter/Index';
import Utama from './src/views/Utama/Index';
import Biasa from './src/views/LoginBiasa/Index';
import Latihan from './src/views/LatFLatList/Index';
import Uts from './src/views/LatUTS/Index';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: '', headerShown: false}}
        />
        <Stack.Screen name="Main" component={Main}  options={{title: '', headerShown: false}}/>
        <Stack.Screen name="Login" component={Login}  options={{title: '', headerShown: false}} />
        <Stack.Screen name="Counter" component={Counter}  options={{title: '', headerShown: false}} />
        <Stack.Screen name="Utama" component={Utama}  options={{title: '', headerShown: false}} />
        <Stack.Screen name="Biasa" component={Biasa}  options={{title: '', headerShown: false}} />
        <Stack.Screen name="Latihan" component={Latihan}  options={{title: '', headerShown: false}} />
        <Stack.Screen name="Uts" component={Uts}  options={{title: '', headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
