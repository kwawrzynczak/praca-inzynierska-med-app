/* eslint-disable react/no-unstable-nested-components */
import { Fragment, useState } from 'react';
import { FlatList, Pressable, SafeAreaView, View } from 'react-native';
import { AppointmentsListElement, Button, FAB, Text } from '@components';
import { Link } from 'expo-router';
import { twMerge } from 'tailwind-merge';

const elements = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }];
const ActiveScreen = () => {
  return (
    <View className="flex-1 items-center bg-background">
      {/* if AppointmentsList is empty */}
      <View className="h-full justify-center">
        <Text className="text-center" variant="subtitle">
          Nie masz zaplanowanych żadnych wizyt. Naciśnij +, aby dodać wizytę!
        </Text>
      </View>

      {/* show all active appointments */}

      {/* <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        className="grow"
        contentContainerStyle={{ padding: 20, gap: 20 }}
        columnWrapperStyle={{ gap: 20 }}
        data={elements}
        renderItem={({ item }) => <AppointmentsListElement key={item.id} id={`${item.id}`} />}
      /> */}
      <FAB type="add" className="absolute bottom-6 right-6" />
    </View>
  );
};

export default ActiveScreen;
