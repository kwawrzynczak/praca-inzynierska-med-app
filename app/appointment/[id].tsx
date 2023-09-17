/* eslint-disable react/no-unstable-nested-components */
import { useEffect, useState } from 'react';
import { TextInput, View } from 'react-native';
import { Button, FAB, Text } from '@components';
import api from '@services/api';
import { useLocalSearchParams } from 'expo-router';

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

interface AppointmentResponse {
  data: Appointment;
}

interface UpdateNotes {
  attributes: {
    notes: string;
  };
}

const AppointmentScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [appointment, setAppointment] = useState<Appointment>();
  const [editable, setEditable] = useState(false);
  const [notes, setNotes] = useState(appointment?.attributes.notes);

  useEffect(() => {
    const getAppointmentById = async () => {
      if (!id) {
        console.error('no id provided');
      } else {
        try {
          const { data } = await api.get<AppointmentResponse>(`/appointments/${id}`);
          setAppointment(data.data);
        } catch (error) {
          console.error(error);
        }
      }
      setNotes(appointment?.attributes.notes);
    };

    void getAppointmentById();
  }, [appointment?.attributes.notes, id]);

  const updateNotes = async () => {
    if (!id) {
      console.error('no id provided');
    } else {
      try {
        const { data } = await api.patch<UpdateNotes>(
          `/appointments/${id}`,
          { notes: 'notatka' },
          {
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
          },
        );
      } catch (error) {
        console.error(error);
      }
    }
    setNotes(appointment?.attributes.notes);
  };

  return (
    <View className="flex-1 bg-background p-4">
      <TextInput className="font-bold text-2xl text-accent" editable={editable}>
        {appointment?.attributes.title}
      </TextInput>
      <TextInput className="font-normal text-lg text-secondary" editable={editable}>
        {appointment?.attributes.doctor}
      </TextInput>
      <Text className="mb-2 mt-8 text-base">Notatki do wizyty: </Text>
      <TextInput
        className="rounded-lg border border-white bg-white px-4 py-3 focus:border-accent"
        multiline
        editable={editable}
        value={notes}
        onChangeText={setNotes}
      />

      <View className="absolute right-4 top-4 flex-row gap-4">
        {!editable && <FAB type="edit" onPress={() => setEditable(true)} />}
        <FAB type="delete" />
      </View>

      {editable && (
        <Button
          className="mt-4"
          onPress={() => {
            setEditable(false);
            void updateNotes();
          }}
        >
          Zapisz zmiany
        </Button>
      )}
    </View>
  );
};

export default AppointmentScreen;
