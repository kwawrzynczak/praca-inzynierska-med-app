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
        tabBarIcon: ({ size }) => <FontAwesome5 name="pills" size={size} color="#00008B" />,
        unmountOnBlur: false,
      }}
    />
    <Tabs.Screen
      name="appointments"
      options={{
        headerShown: false,
        tabBarLabel: 'Wizyty',
        tabBarIcon: ({ size }) => <FontAwesome5 name="stethoscope" size={size} color="#00008B" />,
      }}
    />
    <Tabs.Screen
      name="settings"
      options={{
        tabBarLabel: 'Ustawienia',
        headerTitle: 'Ustawienia',
        tabBarIcon: ({ size }) => <FontAwesome5 name="cog" size={size} color="#00008B" />,
      }}
    />
  </Tabs>
);

export default TabsLayout;
