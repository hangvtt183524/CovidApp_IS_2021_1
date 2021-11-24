import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import Register from './src/screens/RegisterScreen';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import RootNavigator from './src/navigation/RootNavigator';
import { PRIMARY_COLOR, WHITE_COLOR } from './src/shared/const';

const Stack = createNativeStackNavigator();
const App = () => {
  return <RootNavigator />
}

export default App;