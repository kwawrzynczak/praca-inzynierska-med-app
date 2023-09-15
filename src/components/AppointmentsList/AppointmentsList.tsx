/* eslint-disable react/jsx-props-no-spreading */
import { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { AppointmentsListElement } from '@components/AppointmentsListElement';
import { Text } from '@components/Text';
import api from '@services/api';

interface Appointment {
  id: number;
  attributes: {
    title: string;
    doctor: string;
    active: boolean;
    notes?: string;
    datetime: Date;
  };
}

interface AppointmentsResponse {
  data: Appointment[];
}

interface AppointmentsListProps {
  appointments: Appointment[];
}
interface ConnectedProps {
  active?: boolean;
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
        />
      )}
    />
  );
};

export const ConnectedAppointmentsList = ({ active }: ConnectedProps) => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    const getAppointments = async () => {
      try {
        const { data } = await api.get<AppointmentsResponse>('/appointments');
        setAppointments(data.data);
      } catch (error) {
        console.error(error);
      }
    };

    void getAppointments();
  }, []);

  return (
    <>
      {active && (
        <>
          <Text>Najbliższa wizyta</Text>
          <AppointmentsListElement
            id={appointments[0]?.id}
            title={appointments[0]?.attributes.title}
            datetime={appointments[0]?.attributes.datetime}
            doctor={appointments[0]?.attributes.doctor}
          />
          <Text>Wszystkie wizyty</Text>
          <AppointmentsList appointments={appointments} />
        </>
      )}
    </>
  );
};
