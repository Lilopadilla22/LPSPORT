import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home/HomeScreen';
import AccountIcon from '../icons/AccountIcon';
import HomeIcon from '../icons/HomeIcon';
import BalloonIcon from '../icons/BalloonIcon';
import MatchesScreen from '../screens/Matches/MatchesScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';


const Tab = createBottomTabNavigator();

export default function AppTabs() {

  const renderAccountIcon = ({ focused }: { focused: boolean }) => (
    <AccountIcon fill={focused ? '#000' : '#AAA'} width={24} height={24}/>
  );
  const renderHomeIcon = ({ focused }: { focused: boolean }) => (
    <HomeIcon fill={focused ? '#000' : '#AAA'} width={24} height={24}/>
  );

  const renderBallonIcon = ({ focused }: { focused: boolean }) => (
    <BalloonIcon fill={focused ? '#000' : '#aaa'} width={24} height={24} />
  );

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#aaa',
        tabBarLabelStyle: { fontWeight: 'bold', fontSize: 12 },
        tabBarStyle: {
          height: 60,
          backgroundColor: '#fff',
          borderTopWidth: 0.5,
          borderTopColor: '#ddd',
          position: 'absolute',
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: renderHomeIcon,
        }}
      />
      <Tab.Screen
        name="Matches"
        component={MatchesScreen}
        options={{
          tabBarLabel: 'Partidos',
          tabBarIcon: renderBallonIcon,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: renderAccountIcon,
        }}
      />
    </Tab.Navigator>
  );
}
