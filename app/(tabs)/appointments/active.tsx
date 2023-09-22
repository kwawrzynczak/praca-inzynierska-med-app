/* eslint-disable react/no-unstable-nested-components */
import { Pressable, TextInput, View } from 'react-native';
import { AppointmentsList, AppointmentsListElement, FAB, Input, Text } from '@components';
import api from '@services/api';
import { type Appointment } from '@types';
import { Link } from 'expo-router';
import moment from 'moment';

interface AppointmentsListProps {
  activeAppointments: Appointment[];
}

const ActiveScreen = ({ activeAppointments }: AppointmentsListProps) => {
  return (
    <View className="flex-1 items-center bg-background">
      <View className="flex-row gap-10">
        <Pressable className="h-fit justify-center rounded-lg bg-accent p-2 text-center">
          <Text className="text-white">Data</Text>
        </Pressable>
        <TextInput
          className="rounded-lg bg-white p-2"
          placeholder="uzytkownik@example.com"
          placeholderTextColor="#666"
          textContentType="emailAddress"
          keyboardType="email-address"
        />
      </View>
      {activeAppointments.length === 0 && (
        <Text className="mt-2 text-center" variant="subtitle">
          Brak nadchodzących wizyt. {'\n'}Naciśnij +, aby dodać wizytę!
        </Text>
      )}

      {activeAppointments.length !== 0 && (
        <>
          <Text className="my-2 text-center" variant="subtitle">
            Nadchodzące wizyty
          </Text>
          <AppointmentsList appointments={activeAppointments} />
        </>
      )}
      <Link asChild href="appointment/create">
        <FAB type="add" className="absolute bottom-6 right-6" />
      </Link>
    </View>
  );
};

export default ActiveScreen;
