/* eslint-disable react/no-unstable-nested-components */
import { View } from 'react-native';
import { AppointmentsList, AppointmentsListElement, FAB, Text } from '@components';
import api from '@services/api';
import { Link } from 'expo-router';
import moment from 'moment';

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
      {activeAppointments.length === 0 && (
        <Text className="mt-2 text-center" variant="subtitle">
          Brak nadchodzących wizyt. Naciśnij +, aby dodać wizytę!
        </Text>
      )}

      {activeAppointments.length !== 0 && (
        <>
          <Text className="my-2 text-center" variant="subtitle">
            Najbliższa wizyta
          </Text>
          <AppointmentsListElement
            id={activeAppointments[0]?.id}
            title={activeAppointments[0]?.attributes.title}
            datetime={activeAppointments[0]?.attributes.datetime}
            doctor={activeAppointments[0]?.attributes.doctor}
          />
          <Text className="my-2 text-center" variant="subtitle">
            Nadchodzące wizyty
          </Text>
          <AppointmentsList appointments={activeAppointments.slice(1)} />
        </>
      )}
      <Link asChild href="appointment/create">
        <FAB type="add" className="absolute bottom-6 right-6" />
      </Link>
    </View>
  );
};

export default ActiveScreen;
