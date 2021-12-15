import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RootNavigator from './src/navigation/RootNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';
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