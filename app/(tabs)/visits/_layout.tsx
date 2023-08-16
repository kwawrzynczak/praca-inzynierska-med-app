/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unstable-nested-components */
import { CustomTabBar } from '@components';
import { createMaterialTopTabNavigator, MaterialTopTabBarProps } from '@react-navigation/material-top-tabs';

import ActiveScreen from './active';
import InactiveScreen from './inactive';

const Tab = createMaterialTopTabNavigator();

const CalendarLayout = () => {
  return (
    <Tab.Navigator
      screenOptions={{ animationEnabled: false, swipeEnabled: false, tabBarPressOpacity: 0 }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen name="Nadchodzące" component={ActiveScreen} />
      <Tab.Screen name="Zakończone" component={InactiveScreen} />
    </Tab.Navigator>
  );
};

export default CalendarLayout;
