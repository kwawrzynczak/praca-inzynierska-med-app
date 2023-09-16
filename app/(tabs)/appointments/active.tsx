/* eslint-disable react/no-unstable-nested-components */
import { View } from 'react-native';
import { AppointmentsList, AppointmentsListElement, FAB, Text } from '@components';

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

interface AppointmentsListProps {
  activeAppointments: Appointment[];
}

const ActiveScreen = ({ activeAppointments }: AppointmentsListProps) => {
  return (
    <View className="flex-1 items-center bg-background">
      <Text>Najbliższa wizyta</Text>
      <AppointmentsListElement
        id={activeAppointments[0]?.id}
        title={activeAppointments[0]?.attributes.title}
        datetime={activeAppointments[0]?.attributes.datetime}
        doctor={activeAppointments[0]?.attributes.doctor}
      />
      <Text>Wszystkie nadchodzące wizyty</Text>
      <AppointmentsList appointments={activeAppointments.slice(1)} />
      <FAB type="add" className="absolute bottom-6 right-6" />
    </View>
  );
};

export default ActiveScreen;
