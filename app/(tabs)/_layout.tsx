/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

const activeLabel = '#809fff';
const inactiveLabel = '#E6E6E6';
const TabsLayout = () => (
  <Tabs
    screenOptions={{
      tabBarStyle: { backgroundColor: '#000d33', height: 88 },
    }}
  >
    <Tabs.Screen
      name="home"
      options={{
        tabBarLabel: 'Home',
        tabBarLabelStyle: { fontSize: 14, fontWeight: '500', marginTop: -4 },
        // eslint-disable-next-line react/jsx-props-no-spreading
        tabBarIcon: ({ focused }) => (
          <FontAwesome5 name="house-user" size={22} color={focused ? activeLabel : inactiveLabel} />
        ),
        tabBarActiveTintColor: activeLabel,
        tabBarInactiveTintColor: inactiveLabel,
        headerShown: false,
        unmountOnBlur: false,
      }}
    />
    <Tabs.Screen
      name="medication"
      options={{
        tabBarLabel: 'Leki',
        tabBarLabelStyle: { fontSize: 14, fontWeight: '500', marginTop: -4 },
        // eslint-disable-next-line react/jsx-props-no-spreading
        tabBarIcon: ({ focused }) => (
          <FontAwesome5 name="pills" size={22} color={focused ? activeLabel : inactiveLabel} />
        ),
        tabBarActiveTintColor: activeLabel,
        tabBarInactiveTintColor: inactiveLabel,
        headerShown: false,
        unmountOnBlur: false,
      }}
    />
    <Tabs.Screen
      name="appointments"
      options={{
        headerShown: false,
        tabBarLabel: 'Wizyty',
        tabBarLabelStyle: { fontSize: 14, fontWeight: '500', marginTop: -4 },
        tabBarIcon: ({ focused }) => (
          <FontAwesome5 name="notes-medical" size={22} color={focused ? activeLabel : inactiveLabel} />
        ),

        tabBarActiveTintColor: activeLabel,
        tabBarInactiveTintColor: inactiveLabel,
      }}
    />

    <Tabs.Screen
      name="more"
      options={{
        tabBarLabel: 'Więcej',
        tabBarLabelStyle: { fontSize: 14, fontWeight: '500', marginTop: -4 },
        headerTitle: 'Ustawienia',
        tabBarIcon: ({ focused }) => (
          <FontAwesome5 name="ellipsis-h" size={22} color={focused ? activeLabel : inactiveLabel} />
        ),
        tabBarActiveTintColor: activeLabel,
        tabBarInactiveTintColor: inactiveLabel,
      }}
    />
  </Tabs>
);

export default TabsLayout;
