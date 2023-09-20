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
  location: string;
  street: string;
  room?: string;
}
export const AppointmentsListElement = ({
  id,
  title,
  doctor,
  datetime,
  location,
  street,
  room,
  ...rest
}: ListElementProps) => {
  const { opacityValue, fadeIn, fadeOut } = useAnimation();

  const formattedDate = moment(datetime).format('DD MMMM YYYY HH:mm');

  return (
    <>
      <Text className="mb-1 ml-3">{formattedDate}</Text>
      <Link
        asChild
        href={{
          pathname: 'appointment/[id]',
          params: { id },
        }}
      >
        <Pressable
          className="h-24 w-[360px] rounded-lg bg-white p-2 shadow"
          onPressIn={fadeIn}
          onPressOut={fadeOut}
          {...rest}
        >
          <Animated.View
            className={twMerge('absolute left-0 top-0 h-24 w-[360px] rounded-lg bg-accent/10')}
            style={{ opacity: opacityValue }}
          />
          <Text variant="subtitle">{title}</Text>
          <Text className="uppercase">{doctor}</Text>
          <Text variant="subtitle">
            {location} - {street}
          </Text>

          {!!room && <Text>Numer pokoju: {room}</Text>}
        </Pressable>
      </Link>
    </>
  );
};
