/* eslint-disable react/no-unstable-nested-components */
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FAB, MedicationList } from '@components';
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
        <FAB type="add" className="absolute bottom-6 right-6" onPress={() => console.log('temp')} />
      </Link>
    </SafeAreaView>
  );
};

export default MedicationScreen;
