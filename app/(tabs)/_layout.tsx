/* eslint-disable react/no-unstable-nested-components */
import { FontAwesome5 } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

const TabsLayout = () => (
  <Tabs>
    <Tabs.Screen
      name="calendar"
      options={{
        tabBarLabel: 'Kalendarz',
        headerTitle: 'HomeScreen',
        tabBarIcon: ({ color, size }) => <FontAwesome5 name="list" size={size} color={color} />,
      }}
    />
    <Tabs.Screen
      name="settings"
      options={{
        tabBarLabel: 'Ustawienia',
        headerTitle: 'Settings',
        tabBarIcon: ({ color, size }) => <FontAwesome5 name="user" size={size} color={color} />,
      }}
    />
  </Tabs>
);

export default TabsLayout;
