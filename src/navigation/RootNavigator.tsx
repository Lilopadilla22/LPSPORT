import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from '../screens/Welcome/Welcome';
import AuthStack from './authStack';

import LoadingScreen from '../components/LoadingScreen';
import AppTabs from './AppTabs';
import ComplexScreen from '../screens/Complex/ComplexScreen';
import MatchSearchScreen from '../screens/MatchesSearch/MatchSearchScreen';
import AccountScreen from '../screens/Account/AccountScreen';
import { useUserStore } from '../store/context/userStore';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  const user = useUserStore(state => state.user);
  const loading = useUserStore(state => state.loading);

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
            <Stack.Screen name="MatchSearch" component={MatchSearchScreen} />
            <Stack.Screen name="Account" component={AccountScreen} />
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
