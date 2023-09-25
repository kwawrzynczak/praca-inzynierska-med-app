import React, { ReactNode } from 'react';
import { Pressable, PressableProps, View } from 'react-native';
import { Text } from '@components/Text';
import { FontAwesome5 } from '@expo/vector-icons';
import { Meal, type Medication } from '@types';
import moment from 'moment';

interface ListElementProps extends Omit<PressableProps, 'id'> {
  id: number;
  name: string;
  time: string;
  meal: Meal;
}
export const MedicationListElement = ({ name, time, meal, ...rest }: ListElementProps) => {
  console.log(typeof meal);
  // const translateMeal = () => {
  //   if (!meal) return console.error('No meal provided');
  //   if (meal == 'independently') return 'niezależnie';
  // };
  return (
    <View className="w-[360px] flex-row items-center justify-between border border-accent/20 bg-white px-4 py-3">
      <View className="flex-row">
        <View>
          <Text className="font-bold text-lg">{name}</Text>
          <Text className="font-bold text-lg">{meal}</Text>
        </View>
        <Text className="font-bold text-lg">{time.toString().slice(0, 5)}</Text>
      </View>
    </View>
  );
};
