import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import Register from './src/screens/RegisterScreen';
import HomeScreen from './src/screens/HomeScreen';
import RootNavigator from './src/navigation/RootNavigator';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import GlobalStyles from './src/shared/GlobalStyles';



const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
      <RootNavigator />
    </SafeAreaView>
  );
}

export default App;