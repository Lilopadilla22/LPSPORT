import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from '../screens/Welcome/Welcome';
import AuthStack from './authStack';
import { useUser } from '../store/context/userContext';
import LoadingScreen from '../components/LoadingScreen';
import AppTabs from './AppTabs';
import ComplexScreen from '../screens/Complex/ComplexScreen';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  const { user, loading } = useUser();

  console.log(user, 'hay usuario?')

  if (loading) {
    return <LoadingScreen/>;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <>
            <Stack.Screen name="AppTabs" component={AppTabs} />
            <Stack.Screen name="Complexes" component={ComplexScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="AuthStack" component={AuthStack} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
