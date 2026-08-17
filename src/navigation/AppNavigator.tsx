import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '@/screens/Splash';
import Login from '@/screens/Login';
import Dashboard from '@/screens/Dashboard';

export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  Dashboard: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
        animation: 'fade',
      }}
    >
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
