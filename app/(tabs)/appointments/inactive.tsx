/* eslint-disable react/no-unstable-nested-components */
import { View } from 'react-native';
import { AppointmentsList, FAB, Text } from '@components';
import { type Appointment } from '@types';
import { Link } from 'expo-router';

interface AppointmentsListProps {
  inactiveAppointments: Appointment[];
}
const InactiveScreen = ({ inactiveAppointments }: AppointmentsListProps) => {
  return (
    <View className="flex-1 items-center bg-background">
      {inactiveAppointments.length === 0 && (
        <Text className="mt-3 text-center" variant="subtitle">
          Brak historii wizyt.
        </Text>
      )}

      {/* show all inactive appointments */}
      {inactiveAppointments.length !== 0 && (
        <>
          <Text className="my-3 text-center" variant="subtitle">
            Wszystkie minione wizyty
          </Text>
          <AppointmentsList appointments={inactiveAppointments} />
        </>
      )}

      <Link asChild href="appointment/create">
        <FAB className="absolute bottom-0 right-0 m-4" type="add" />
      </Link>
    </View>
  );
};

export default InactiveScreen;
