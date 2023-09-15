/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Animated, Pressable, type PressableProps } from 'react-native';
import { Text } from '@components/Text';
import { useAnimation } from '@hooks';
import { Link } from 'expo-router';
import moment from 'moment';
import { twMerge } from 'tailwind-merge';

interface ListElementProps extends Omit<PressableProps, 'id'> {
  id: number;
  title: string;
  doctor: string;
  datetime: Date;
}
export const AppointmentsListElement = ({ id, title, doctor, datetime, ...rest }: ListElementProps) => {
  const { opacityValue, fadeIn, fadeOut } = useAnimation();

  const formattedDate = moment(datetime).format('HH:mm DD.MM.YYYY');

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
        <Text variant="subtitle">{title}</Text>
        <Text>{formattedDate}</Text>
        <Text>lek. med. {doctor}</Text>
      </Pressable>
    </Link>
  );
};
