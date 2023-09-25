import React from 'react';
import { Pressable, View } from 'react-native';
import { Text } from '@components/Text';
import { FontAwesome5 } from '@expo/vector-icons';
import { type Medication } from '@types';

export const MedicationListElement = ({ name, time, meal }: Medication) => {
  return (
    <View className="mb-3 w-80 flex-row items-center justify-between rounded-2xl bg-white px-4 py-3">
      <View>
        <Text className="font-bold text-lg">{name}</Text>
        <View className="flex-row" />
      </View>
    </View>
  );
};
