/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Animated, Pressable, type PressableProps } from 'react-native';
import { Text } from '@components/Text';
import { useAnimation } from '@hooks';
import { Link } from 'expo-router';
import { twMerge } from 'tailwind-merge';

interface ListElementProps extends PressableProps {
  id: string;
}
export const AppointmentsListElement = ({ id, ...rest }: ListElementProps) => {
  const { opacityValue, fadeIn, fadeOut } = useAnimation();

  return (
    <Link
      asChild
      href={{
        pathname: 'appointment/[id]',
        params: { id },
      }}
    >
      <Pressable
        className="h-28 w-[360px] rounded-lg bg-white p-2 shadow"
        onPressIn={fadeIn}
        onPressOut={fadeOut}
        {...rest}
      >
        <Animated.View
          className={twMerge('absolute left-0 top-0 h-28 w-[360px] rounded-lg bg-accent/10')}
          style={{ opacity: opacityValue }}
        />
        <Text variant="subtitle">Kardiolog</Text>
        <Text>9 sierpnia 2023</Text>
        <Text>lek. med. Jan Nowak</Text>
      </Pressable>
    </Link>
  );
};
