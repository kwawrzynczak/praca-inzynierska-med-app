/* eslint-disable react/no-unstable-nested-components */
import { useEffect, useState } from 'react';
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
  const filterAppointments = (text: string) => {};
  return (
    <View className="flex-1 items-center bg-background">
      <View className="w-screen flex-row justify-around pt-3">
        {/* Datepicker */}
        <Pressable className="h-fit justify-center rounded-lg border border-white bg-white px-3 py-2 text-center">
          <Text className="text-black">Data</Text>
        </Pressable>
        {/* SearchBar */}
        <TextInput
          className="w-48 rounded-lg border border-white bg-white p-2 focus:border-accent"
          placeholder="Szukaj..."
          placeholderTextColor="#666"
          onChangeText={(text) => filterAppointments(text)}
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
