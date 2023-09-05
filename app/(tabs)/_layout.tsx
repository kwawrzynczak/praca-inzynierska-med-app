/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

const TabsLayout = () => (
  <Tabs>
    <Tabs.Screen
      name="medication"
      options={{
        tabBarLabel: 'Leki',
        headerShown: false,
        tabBarIcon: ({ color, size }) => <FontAwesome5 name="pills" size={size} color={color} />,
        unmountOnBlur: false,
      }}
    />
    <Tabs.Screen
      name="appointments"
      options={{
        headerShown: false,
        tabBarLabel: 'Wizyty',
        tabBarIcon: ({ color, size }) => <FontAwesome5 name="stethoscope" size={size} color={color} />,
      }}
    />
    <Tabs.Screen
      name="patients"
      options={{
        tabBarLabel: 'Pacjenci',
        headerTitle: 'Pacjenci',
        tabBarIcon: ({ color, size }) => <FontAwesome5 name="users" size={size} color={color} />,
      }}
    />
    <Tabs.Screen
      name="settings"
      options={{
        tabBarLabel: 'Ustawienia',
        headerTitle: 'Ustawienia',
        tabBarIcon: ({ color, size }) => <FontAwesome5 name="cog" size={size} color={color} />,
      }}
    />
  </Tabs>
);

export default TabsLayout;
