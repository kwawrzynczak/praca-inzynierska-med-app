/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

const activeLabel = '#00008B';
const inctiveLabel = '#9B9B9B';
const TabsLayout = () => (
  <Tabs>
    <Tabs.Screen
      name="medication"
      options={{
        tabBarLabel: 'Leki',
        tabBarLabelStyle: { fontSize: 12, fontWeight: '500', marginTop: -2 },
        // eslint-disable-next-line react/jsx-props-no-spreading
        tabBarIcon: ({ size, focused }) => (
          <FontAwesome5 name="pills" size={22} color={focused ? activeLabel : inctiveLabel} />
        ),
        tabBarActiveTintColor: activeLabel,
        tabBarInactiveTintColor: inctiveLabel,
        headerShown: false,
        unmountOnBlur: false,
      }}
    />
    <Tabs.Screen
      name="appointments"
      options={{
        headerShown: false,
        tabBarLabel: 'Wizyty',
        tabBarLabelStyle: { fontSize: 12, fontWeight: '500', marginTop: -2 },
        tabBarIcon: ({ focused }) => (
          <FontAwesome5 name="notes-medical" size={22} color={focused ? activeLabel : inctiveLabel} />
        ),

        tabBarActiveTintColor: activeLabel,
        tabBarInactiveTintColor: inctiveLabel,
      }}
    />
    <Tabs.Screen
      name="patients"
      options={{
        headerShown: false,
        tabBarLabel: 'Pacjenci',
        tabBarLabelStyle: { fontSize: 12, fontWeight: '500', marginTop: -2 },
        tabBarIcon: ({ focused }) => (
          <FontAwesome5 name="users" size={22} color={focused ? activeLabel : inctiveLabel} />
        ),

        tabBarActiveTintColor: activeLabel,
        tabBarInactiveTintColor: inctiveLabel,
      }}
    />
    <Tabs.Screen
      name="settings"
      options={{
        tabBarLabel: 'Ustawienia',
        tabBarLabelStyle: { fontSize: 12, fontWeight: '500', marginTop: -2 },
        headerTitle: 'Ustawienia',
        tabBarIcon: ({ focused }) => <FontAwesome5 name="cog" size={22} color={focused ? activeLabel : inctiveLabel} />,
        tabBarActiveTintColor: activeLabel,
        tabBarInactiveTintColor: inctiveLabel,
      }}
    />
  </Tabs>
);

export default TabsLayout;
