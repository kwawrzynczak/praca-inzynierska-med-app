/* eslint-disable react/no-unstable-nested-components */
import { useEffect, useState } from 'react';
import { TextInput, View } from 'react-native';
import { Button, FAB, Text } from '@components';
import api from '@services/api';
import { useLocalSearchParams, useRouter } from 'expo-router';

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

interface AppointmentResponse {
  data: Appointment;
}

interface UpdateAppointment {
  data: {
    title: string;
    doctor: string;
    notes: string;
  };
}

const AppointmentScreen = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const [appointment, setAppointment] = useState<Appointment>();
  const [editable, setEditable] = useState(false);
  // TODO: wsadzić to w jeden state
  const [title, setTitle] = useState(appointment?.attributes.title);
  const [doctor, setDoctor] = useState(appointment?.attributes.doctor);
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
      setTitle(appointment?.attributes.title);
      setDoctor(appointment?.attributes.doctor);
      setNotes(appointment?.attributes.notes);
    };

    void getAppointmentById();
  }, [appointment?.attributes.doctor, appointment?.attributes.notes, appointment?.attributes.title, id]);

  const updateAppointmentData = async () => {
    if (!id) {
      console.error('no id provided');
    } else {
      try {
        const { data } = await api.put<UpdateAppointment>(`/appointments/${id}`, { data: { title, doctor, notes } });
        return data;
      } catch (error) {
        console.error(error);
      }
    }
    return null;
  };

  const deleteAppointment = async () => {
    if (!id) {
      console.error('no id provided');
    } else {
      try {
        await api.delete(`/appointments/${id}`);
        router.back();
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <View className="flex-1 bg-background p-4">
      <TextInput className="font-bold text-2xl text-accent" editable={editable} value={title} onChangeText={setTitle} />

      <TextInput
        className="font-normal text-lg text-secondary"
        editable={editable}
        value={doctor}
        onChangeText={setDoctor}
      />

      <Text className="mb-2 mt-8 text-base">Notatki do wizyty: </Text>
      <TextInput
        className="rounded-lg border border-white bg-white px-4 py-3 focus:border-accent"
        multiline
        placeholder="Brak notatek"
        editable={editable}
        value={notes}
        onChangeText={setNotes}
      />

      <View className="absolute right-4 top-4 flex-row gap-4">
        {!editable && <FAB type="edit" onPress={() => setEditable(true)} />}
        <FAB
          type="delete"
          onPress={() => {
            void deleteAppointment();
          }}
        />
      </View>

      {editable && (
        <Button
          className="mt-4"
          onPress={() => {
            setEditable(false);
            void updateAppointmentData();
          }}
        >
          Zapisz zmiany
        </Button>
      )}
    </View>
  );
};

export default AppointmentScreen;
