/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { FlatList } from 'react-native';
import { AppointmentsListElement } from '@components/AppointmentsListElement';

interface ListProps {
  appointments: { id: number }[];
}

export const AppointmentsList = ({ appointments }: ListProps) => {
  return (
    <FlatList
      className="grow"
      contentContainerStyle={{ gap: 20, justifyContent: 'center' }}
      data={appointments}
      renderItem={({ item }) => <AppointmentsListElement key={item.id} id={`${item.id}`} />}
    />
  );
};
