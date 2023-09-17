/* eslint-disable react/no-unstable-nested-components */
import { useEffect, useState } from 'react';
import { TextInput, View } from 'react-native';
import { Button, FAB, Text } from '@components';
import api from '@services/api';
import { useLocalSearchParams, useRouter } from 'expo-router';
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
interface CreateAppointment {
  data: {
    title: string;
    doctor: string;
    active: boolean;
    datetime: Date;
  };
}

const AppointmentScreen = () => {
  const router = useRouter();
  const createAppointment = async () => {
    try {
      await api.post<CreateAppointment>('/appointments', {
        data: { title: 'TESTOWA', doctor: 'string', active: true, datetime: moment() },
      });
      router.back();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View className="flex-1 bg-background p-4">
      <Button
        className="mt-4"
        onPress={() => {
          void createAppointment();
        }}
      >
        Dodaj wizytę
      </Button>
    </View>
  );
};

export default AppointmentScreen;
