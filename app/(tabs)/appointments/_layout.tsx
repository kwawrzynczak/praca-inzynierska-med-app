/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unstable-nested-components */
import { useEffect, useState } from 'react';
import { CustomTabBar } from '@components';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useIsFocused } from '@react-navigation/native';
import api from '@services/api';
import { useUserStore } from '@stores';
import { type Appointment } from '@types';

import ActiveScreen from './active';
import InactiveScreen from './inactive';

interface AppointmentsResponse {
  data: Appointment[];
}

const Tab = createMaterialTopTabNavigator();

const AppointmentLayout = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const isFocused = useIsFocused();
  const today = new Date();
  const code = useUserStore((state) => state.userCode);

  useEffect(() => {
    const getAppointments = async () => {
      if (!isFocused) return;
      try {
        const { data } = await api.get<AppointmentsResponse>(
          `/appointments?sort=datetime:asc&populate=*&filters[patient][code][$eq]=${code}`,
        );
        setAppointments(data.data);
      } catch (error) {
        console.error(error);
      }
    };

    void getAppointments();
  }, [isFocused]);

  return (
    <Tab.Navigator
      screenOptions={{ animationEnabled: false, swipeEnabled: false, tabBarPressOpacity: 0 }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen name="Nadchodzące">
        {(props) => (
          <ActiveScreen
            activeAppointments={appointments?.filter(
              (appointment) => new Date(appointment.attributes.datetime) > today,
            )}
            {...props}
          />
        )}
      </Tab.Screen>
      <Tab.Screen name="Historia">
        {(props) => (
          <InactiveScreen
            inactiveAppointments={appointments.filter(
              (appointment) => new Date(appointment.attributes.datetime) < today,
            )}
            {...props}
          />
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default AppointmentLayout;
