/* eslint-disable react/no-unstable-nested-components */
import { useEffect, useState } from 'react';
import { Pressable, TextInput, View } from 'react-native';
import { AppointmentsList, AppointmentsListElement, Button, FAB, Input, Text } from '@components';
import { FontAwesome5 } from '@expo/vector-icons';
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
        <Pressable className="absolute bottom-0 right-0 m-4 flex flex-row items-center justify-between rounded-full border-2 border-accent bg-white p-2 px-3 shadow active:scale-[.98]">
          <View className="mr-2 flex h-9 w-9 items-center justify-center rounded-full bg-accent">
            <FontAwesome5 name="plus" color="white" size={20} />
          </View>
          <Text className="font-bold text-base">Dodaj przypomnienie</Text>
        </Pressable>
      </Link>
    </View>
  );
};

export default ActiveScreen;
