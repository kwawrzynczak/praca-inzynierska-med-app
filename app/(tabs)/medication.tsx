/* eslint-disable react/no-unstable-nested-components */
import React, { useEffect, useState } from 'react';
import { Pressable, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FAB, MedicationList, Text } from '@components';
import { FontAwesome5 } from '@expo/vector-icons';
import { useIsFocused } from '@react-navigation/native';
import api from '@services/api';
import { type Medication } from '@types';
import { Link } from 'expo-router';

interface MedicationResponse {
  data: Medication[];
}

const MedicationScreen = () => {
  const [medication, setMedication] = useState<Medication[]>([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    const getMedication = async () => {
      if (!isFocused) return;
      try {
        const { data } = await api.get<MedicationResponse>('/medications');
        setMedication(data.data);
      } catch (error) {
        console.error(error);
      }
    };

    void getMedication();
  }, [isFocused]);

  return (
    <SafeAreaView className="flex-1 bg-background">
      <MedicationList medication={medication} />
      <Link asChild href="medication/create">
        <Pressable className="absolute bottom-0 right-0 m-4 flex flex-row items-center justify-between rounded-full border-2 border-accent bg-white p-2 px-3 shadow active:scale-[.98]">
          <View className="mr-2 flex h-9 w-9 items-center justify-center rounded-full bg-accent">
            <FontAwesome5 name="plus" color="white" size={20} />
          </View>
          <Text className="font-bold text-base">Dodaj dawkę leku</Text>
        </Pressable>
      </Link>
    </SafeAreaView>
  );
};

export default MedicationScreen;
