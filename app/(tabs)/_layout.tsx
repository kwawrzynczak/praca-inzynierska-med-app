/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

const activeLabel = '#111111';
const inctiveLabel = '#222222';
const TabsLayout = () => (
  <Tabs>
    <Tabs.Screen
      name="medication"
      options={{
        tabBarLabel: 'Leki',
        tabBarLabelStyle: { fontSize: 12, fontWeight: '500' },
        headerShown: false,
        // eslint-disable-next-line react/jsx-props-no-spreading
        tabBarIcon: ({ size, focused }) => (
          <FontAwesome5 name="pills" size={size} color={focused ? '#111' : '#809fff'} />
        ),
        tabBarActiveTintColor: activeLabel,
        tabBarInactiveTintColor: inctiveLabel,
        unmountOnBlur: false,
      }}
    />
    <Tabs.Screen
      name="appointments"
      options={{
        headerShown: false,
        tabBarLabel: 'Wizyty',
        tabBarLabelStyle: { fontSize: 12, fontWeight: '500' },
        tabBarIcon: ({ size, focused }) => (
          <FontAwesome5 name="stethoscope" size={size} color={focused ? '#111' : '#809fff'} />
        ),

        tabBarActiveTintColor: activeLabel,
        tabBarInactiveTintColor: inctiveLabel,
      }}
    />
    <Tabs.Screen
      name="settings"
      options={{
        tabBarLabel: 'Ustawienia',
        tabBarLabelStyle: { fontSize: 12, fontWeight: '500' },
        headerTitle: 'Ustawienia',
        tabBarIcon: ({ size, focused }) => <FontAwesome5 name="cog" size={size} color={focused ? '#111' : '#809fff'} />,
        tabBarActiveTintColor: activeLabel,
        tabBarInactiveTintColor: inctiveLabel,
      }}
    />
  </Tabs>
);

export default TabsLayout;
