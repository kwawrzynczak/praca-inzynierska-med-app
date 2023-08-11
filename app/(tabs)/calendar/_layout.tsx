/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unstable-nested-components */
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import ActiveScreen from './active';
import InactiveScreen from './inactive';

const Tab = createMaterialTopTabNavigator();

const CalendarLayout = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        swipeEnabled: false,
        lazy: true,
        // tabBarActiveTintColor: '#AFAFAF',
        // tabBarInactiveTintColor: '#E4E4',
        // tabBarIndicatorStyle: {
        //   backgroundColor: '#E4',
        // },
        // tabBarIndicatorContainerStyle: {
        //   backgroundColor: 'blue',
        // },
        // tabBarContentContainerStyle: {
        //   backgroundColor: 'green',
        // },
        tabBarStyle: {
          backgroundColor: 'pink',
        },
      }}
    >
      <Tab.Screen name="Active" component={ActiveScreen} options={{ tabBarLabel: 'Aktywne' }} />
      <Tab.Screen name="Inactive" component={InactiveScreen} options={{ tabBarLabel: 'Zakończone' }} />
    </Tab.Navigator>
  );
};

export default CalendarLayout;
