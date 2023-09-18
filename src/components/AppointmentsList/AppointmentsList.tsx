/* eslint-disable react/jsx-props-no-spreading */
import { FlatList } from 'react-native';
import { AppointmentsListElement } from '@components/AppointmentsListElement';

interface Appointment {
  id: number;
  attributes: {
    title: string;
    doctor: string;
    active: boolean;
    notes?: string;
    datetime: Date;
    location?: string;
    street?: string;
    room?: string;
  };
}

interface AppointmentsListProps {
  appointments: Appointment[];
}

export const AppointmentsList = ({ appointments }: AppointmentsListProps) => {
  return (
    <FlatList
      className="grow"
      contentContainerStyle={{ gap: 20, justifyContent: 'center' }}
      data={appointments}
      renderItem={({ item }) => (
        <AppointmentsListElement
          key={item.id}
          id={item.id}
          title={item.attributes.title}
          datetime={item.attributes.datetime}
          doctor={item.attributes.doctor}
          location={item.attributes.location}
          street={item.attributes.street}
          room={item.attributes.room}
        />
      )}
    />
  );
};
