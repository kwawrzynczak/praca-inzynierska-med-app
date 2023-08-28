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
        headerTitle: 'Leki',
        tabBarIcon: ({ color, size }) => <FontAwesome5 name="pills" size={size} color={color} />,
        unmountOnBlur: true,
      }}
    />
    <Tabs.Screen
      name="visits"
      options={{
        headerShown: false,
        tabBarLabel: 'Kalendarz',
        tabBarIcon: ({ color, size }) => <FontAwesome5 name="calendar-alt" size={size} color={color} />,
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
