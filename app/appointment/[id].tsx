/* eslint-disable react/no-unstable-nested-components */
import React, { useEffect, useMemo, useState } from 'react';
import { Pressable, TextInput, View } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Button, FAB, Text } from '@components';
import api from '@services/api';
import { type Appointment } from '@types';
import { useLocalSearchParams, useRouter } from 'expo-router';
import moment from 'moment';

interface AppointmentResponse {
  data: Appointment;
}

interface UpdateAppointment {
  data: {
    title: string;
    doctor: string;
    datetime: Date;
    notes?: string;
    location: string;
    street: string;
  };
}

const AppointmentScreen = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const [appointment, setAppointment] = useState<Appointment>();
  const [editable, setEditable] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(moment());
  const [selectedTime, setSelectedTime] = useState(moment());
  const preparedDate = selectedDate.format('YYYY-MM-DD');
  const formattedTime = selectedTime.format('HH:mm');
  const datetime = useMemo(() => new Date(`${preparedDate}T${formattedTime}`), [formattedTime, preparedDate]);

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
    };

    void getAppointmentById();
  }, [id]);

  const updateAppointmentData = async () => {
    if (!id) {
      console.error('no id provided');
    } else {
      try {
        const { data } = await api.put<UpdateAppointment>(`/appointments/${id}`, {
          data: {
            appointment: appointment?.attributes.title,
            doctor: appointment?.attributes.doctor,
            datetime,
            notes: appointment?.attributes.notes,
            location: appointment?.attributes.location,
            street: appointment?.attributes.street,
          },
        });
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

  const handleTextChange = <T extends keyof Appointment['attributes']>(key: T, value: Appointment['attributes'][T]) => {
    setAppointment((prev) => {
      if (!prev) return prev;
      return { ...prev, attributes: { ...prev?.attributes, [key]: value } };
    });
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleDateConfirm = (date: Date) => {
    hideDatePicker();
    setSelectedDate(moment(date));
  };
  const handleTimeConfirm = (date: Date) => {
    hideTimePicker();
    setSelectedTime(moment(date));
  };

  if (!appointment) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-background p-4">
      <TextInput
        className="font-bold text-2xl text-accent focus:border-accent"
        editable={editable}
        value={appointment?.attributes.title}
        onChangeText={(value) => handleTextChange('title', value)}
      />

      <TextInput
        className="font-normal text-lg text-secondary focus:border-accent"
        editable={editable}
        value={appointment?.attributes.doctor}
        onChangeText={(value) => handleTextChange('doctor', value)}
      />
      <View className="flex-row items-center py-2">
        <Pressable className="rounded" onPress={() => showTimePicker()}>
          <Text className="mr-2 text-center text-base">{selectedDate.format('DD MMMM YYYY')}</Text>
        </Pressable>

        <Pressable className="rounded" onPress={() => showDatePicker()}>
          <Text className="text-base">{selectedTime.format('HH:MM')}</Text>
        </Pressable>
      </View>

      <TextInput
        className="font-normal text-lg text-secondary focus:border-accent"
        editable={editable}
        value={appointment?.attributes.location}
        onChangeText={(value) => handleTextChange('location', value)}
      />
      <TextInput
        className="font-normal text-lg text-secondary focus:border-accent"
        editable={editable}
        value={appointment?.attributes.street}
        onChangeText={(value) => handleTextChange('street', value)}
      />

      <Text className="mb-2 mt-8 text-base">Notatki do wizyty: </Text>
      <TextInput
        className="rounded-lg border border-white bg-white px-4 py-3 focus:border-accent"
        multiline
        placeholder="Brak notatek"
        editable={editable}
        value={appointment?.attributes.notes}
        onChangeText={(value) => handleTextChange('notes', value)}
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

      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        onConfirm={handleTimeConfirm}
        onCancel={hideTimePicker}
        confirmTextIOS="Wybierz"
        cancelTextIOS="Wróć"
        themeVariant="light"
        locale="pl_PL"
        mode="time"
      />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        onConfirm={handleDateConfirm}
        onCancel={hideDatePicker}
        confirmTextIOS="Wybierz"
        cancelTextIOS="Wróć"
        themeVariant="light"
        locale="pl_PL"
        mode="date"
      />
    </View>
  );
};

export default AppointmentScreen;
