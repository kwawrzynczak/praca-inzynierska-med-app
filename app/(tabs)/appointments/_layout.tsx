/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unstable-nested-components */
import { useEffect, useState } from 'react';
import { CustomTabBar } from '@components';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import api from '@services/api';

import ActiveScreen from './active';
import InactiveScreen from './inactive';

interface Appointment {
  id: number;
  attributes: {
    title: string;
    doctor: string;
    active: boolean;
    notes?: string;
    datetime: Date;
  };
}

interface AppointmentsResponse {
  data: Appointment[];
}

const Tab = createMaterialTopTabNavigator();

const AppointmentLayout = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    const getAppointments = async () => {
      try {
        const { data } = await api.get<AppointmentsResponse>('/appointments');
        setAppointments(data.data);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      }
    };

    void getAppointments();
  }, []);
  return (
    <Tab.Navigator
      screenOptions={{ animationEnabled: false, swipeEnabled: false, tabBarPressOpacity: 0 }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen name="Nadchodzące">
        {(props) => (
          <ActiveScreen
            activeAppointments={appointments.filter((appointment) => appointment.attributes.active)}
            {...props}
          />
        )}
      </Tab.Screen>
      <Tab.Screen name="Historia">
        {(props) => (
          <InactiveScreen
            inactiveAppointments={appointments.filter((appointment) => !appointment.attributes.active)}
            {...props}
          />
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default AppointmentLayout;
