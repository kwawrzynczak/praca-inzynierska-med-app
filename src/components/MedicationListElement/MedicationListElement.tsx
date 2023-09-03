import React from 'react';
import { Pressable, View } from 'react-native';
import { Text } from '@components/Text';
import { FontAwesome5 } from '@expo/vector-icons';
import { type Medication } from '@types';

interface MedicationListElementProps extends Medication {
  onPress?: () => void;
}

export const MedicationListElement = ({
  name,
  amount,
  substance,
  time,
  isDone,
  onPress,
}: MedicationListElementProps) => {
  return (
    <View className="mb-3 w-80 flex-row items-center justify-between rounded-2xl bg-white px-4 py-3">
      <View>
        <Text className="font-bold text-lg">{name}</Text>
        <View className="flex-row">
          <Text>{amount} tab, </Text>
          <Text>{substance}mg</Text>
        </View>
      </View>
    </View>
  );
};
