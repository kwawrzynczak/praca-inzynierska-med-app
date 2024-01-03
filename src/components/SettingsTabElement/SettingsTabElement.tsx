/* eslint-disable react/jsx-props-no-spreading */
import React, { FC } from 'react';
import { Pressable, PressableProps, View } from 'react-native';
import { Text } from '@components/Text';
import { FontAwesome5 } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { twMerge } from 'tailwind-merge';

interface SettingsTabElementProps extends PressableProps {
  name?: string;
  icon?: string;
  path?: string;
  className?: string;
}

export const SettingsTabElement: FC<SettingsTabElementProps> = ({ className, name, icon, path = '', ...rest }) => {
  return (
    <Link href={path} asChild>
      <Pressable
        {...rest}
        className={twMerge(
          'h-12 w-screen flex-row border-b-2 border-slate-400 bg-slate-300 items-center pl-6',
          className,
        )}
      >
        <View className="w-6">
          <FontAwesome5 name={icon} size={20} color="black" />
        </View>
        <Text className="pl-4 font-semibold text-base">{name}</Text>
      </Pressable>
    </Link>
  );
};
