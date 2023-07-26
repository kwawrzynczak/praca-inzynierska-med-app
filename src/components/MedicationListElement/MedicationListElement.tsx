import React from 'react';
import { Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { type Medication } from '@types';

export const MedicationListElement = ({ name, amount, substance, time, done }: Medication) => {
  return (
    <View className="mb-3 w-80 flex-row items-center justify-between rounded-2xl bg-white p-4">
      <View>
        <Text className="font-semibold text-lg">{name}</Text>
        <View className="flex-row">
          <Text className="text-secondary">{amount} tab,</Text>
          <Text className="text-secondary">{substance}mg</Text>
        </View>
      </View>

      <View className="flex-row items-center gap-1">
        <FontAwesome5 name="clock" size={16} />
        <Text>{time}</Text>
        {done ? (
          <FontAwesome5 solid name="check-circle" size={32} color="#60a5fa" />
        ) : (
          <FontAwesome5 name="circle" size={32} color="#60a5fa" />
        )}
      </View>
    </View>
  );
};
