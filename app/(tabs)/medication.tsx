/* eslint-disable react/no-unstable-nested-components */
import React, { useEffect, useState } from 'react';
import { Pressable, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FAB, MedicationList, Text } from '@components';
import { FontAwesome5 } from '@expo/vector-icons';
import { useIsFocused } from '@react-navigation/native';
import api from '@services/api';
import { useUserStore } from '@stores';
import { type Medication } from '@types';
import { Link } from 'expo-router';

interface MedicationResponse {
  data: Medication[];
}

const MedicationScreen = () => {
  const [medication, setMedication] = useState<Medication[]>([]);
  const isFocused = useIsFocused();
  const code = useUserStore((state) => state.userCode);

  useEffect(() => {
    const getMedication = async () => {
      if (!isFocused) return;
      try {
        const { data } = await api.get<MedicationResponse>(
          `/medications?populate=*&filters[patient][code][$eq]=${code}`,
        );
        setMedication(data.data);
      } catch (error) {
        console.error(error);
      }
    };

    void getMedication();
  }, [isFocused]);

  return (
    <SafeAreaView className="flex-1 bg-background">
      {medication.length === 0 && (
        <Text className="mt-3 text-center" variant="subtitle">
          Brak leków
        </Text>
      )}
      <MedicationList medication={medication} />
      <Link asChild href="medication/create">
        <FAB className="absolute bottom-0 right-0 m-4" type="add" />
      </Link>
    </SafeAreaView>
  );
};

export default MedicationScreen;
