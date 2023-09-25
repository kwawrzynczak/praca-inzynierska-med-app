/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactNode } from 'react';
import { Animated, Pressable, PressableProps, View } from 'react-native';
import { Text } from '@components/Text';
import { FontAwesome5 } from '@expo/vector-icons';
import { useAnimation } from '@hooks';
import { Meal, type Medication } from '@types';
import { Link } from 'expo-router';
import moment from 'moment';
import { twMerge } from 'tailwind-merge';

interface ListElementProps extends Omit<PressableProps, 'id'> {
  id: number;
  name: string;
  time: string;
  meal: Meal;
}
export const MedicationListElement = ({ id, name, time, meal, ...rest }: ListElementProps) => {
  const { opacityValue, fadeIn, fadeOut } = useAnimation();

  return (
    <Link
      asChild
      href={{
        pathname: 'medication/[id]',
        params: { id },
      }}
    >
      <Pressable
        className="w-[360px] flex-row items-center justify-between border border-accent/20 bg-white px-4 py-3"
        onPressIn={fadeIn}
        onPressOut={fadeOut}
        {...rest}
      >
        <Animated.View
          className={twMerge('absolute left-0 top-0 h-24 w-[360px] rounded-lg bg-accent/10')}
          style={{ opacity: opacityValue }}
        />
        <View className="flex-row">
          <View>
            <Text className="font-bold text-lg">{name}</Text>
            <Text className="font-bold text-lg">{meal}</Text>
          </View>
          <Text className="font-bold text-lg">{time.toString().slice(0, 5)}</Text>
        </View>
      </Pressable>
    </Link>
  );
};
