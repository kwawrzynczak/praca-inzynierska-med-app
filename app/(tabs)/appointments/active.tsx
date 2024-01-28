/* eslint-disable react/no-unstable-nested-components */
import { View } from 'react-native';
import { AppointmentsList, FAB, Text } from '@components';
import { type Appointment } from '@types';
import { Link } from 'expo-router';

interface AppointmentsListProps {
  activeAppointments: Appointment[];
}

const ActiveScreen = ({ activeAppointments }: AppointmentsListProps) => {
  return (
    <View className="flex-1 items-center bg-background">
      {activeAppointments.length === 0 && (
        <Text className="mt-3 text-center" variant="subtitle">
          Brak nadchodzących wizyt. {'\n'}Naciśnij +, aby dodać wizytę!
        </Text>
      )}

      {activeAppointments.length !== 0 && (
        <>
          <Text className="my-3 text-center" variant="subtitle">
            Nadchodzące wizyty
          </Text>
          <AppointmentsList appointments={activeAppointments} />
        </>
      )}
      <Link asChild href="appointment/create">
        <FAB className="absolute bottom-0 right-0 m-4" type="add" />
      </Link>
    </View>
  );
};

export default ActiveScreen;
