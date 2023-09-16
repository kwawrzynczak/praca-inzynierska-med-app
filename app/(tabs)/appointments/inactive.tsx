/* eslint-disable react/no-unstable-nested-components */
import { View } from 'react-native';
import { AppointmentsList, FAB, Text } from '@components';

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
  inactiveAppointments: Appointment[];
}
const InactiveScreen = ({ inactiveAppointments }: AppointmentsListProps) => {
  return (
    <View className="flex-1 items-center bg-background">
      {/* if AppointmentsList is empty */}
      {/* <View className="h-full justify-center">
        <Text className="text-center" variant="subtitle">
          Brak historii wizyt.
        </Text>
      </View> */}

      {/* show all inactive appointments */}
      <Text>Wszystkie minione wizyty</Text>
      <AppointmentsList appointments={inactiveAppointments} />

      <FAB type="add" className="absolute bottom-6 right-6" />
    </View>
  );
};

export default InactiveScreen;
