/* eslint-disable react/no-unstable-nested-components */
import { Fragment, useState } from 'react';
import { FlatList, Pressable, SafeAreaView, View } from 'react-native';
import { AppointmentsList, AppointmentsListElement, Button, FAB, Text } from '@components';
import { Link } from 'expo-router';
import { twMerge } from 'tailwind-merge';

const elements = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }];
const InactiveScreen = () => {
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
      <AppointmentsList appointments={elements} />

      <FAB type="add" className="absolute bottom-6 right-6" />
    </View>
  );
};

export default InactiveScreen;
