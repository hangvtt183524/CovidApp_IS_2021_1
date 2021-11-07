import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import Register from './src/screens/Register';
//import Home from './src/screens/Home';
import { PRIMARY_COLOR, WHITE_COLOR } from './src/shared/const';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <LoginScreen />
    </NavigationContainer>
  );
}

export default App;