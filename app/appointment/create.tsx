/* eslint-disable react/no-unstable-nested-components */
import { useMemo, useState } from 'react';
import { Pressable, View } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Button, Input, Text } from '@components';
import api from '@services/api';
import { useRouter } from 'expo-router';
import moment from 'moment';

interface CreateAppointment {
  data: {
    title: string;
    doctor: string;
    datetime: Date;
    location: string;
    street: string;
  };
}

const CreateAppointmentScreen = () => {
  const router = useRouter();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(moment());
  const [selectedTime, setSelectedTime] = useState(moment());
  const [title, setTitle] = useState<string>();
  const [doctor, setDoctor] = useState<string>();
  const [location, setLocation] = useState<string>();
  const [street, setStreet] = useState<string>();

  const formattedDate = selectedDate.format('DD.MM.YYYY');
  const preparedDate = selectedDate.format('YYYY-MM-DD');
  const formattedTime = selectedTime.format('HH:mm');
  const datetime = useMemo(() => new Date(`${preparedDate}T${formattedTime}`), [formattedTime, preparedDate]);

  const createAppointment = async () => {
    try {
      await api.post<CreateAppointment>('/appointments', {
        data: { title, doctor, datetime, location, street },
      });
      router.back();
    } catch (error) {
      console.error(error);
    }
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

  return (
    <View className="flex-1 bg-background p-4">
      <View className="items-center">
        <View>
          <Input title="Nazwa wizyty" value={title} onChangeText={setTitle} />
          <Input title="Lekarz" value={doctor} onChangeText={setDoctor} />
          <Input title="Placówka" value={location} onChangeText={setLocation} />
          <Input title="Ulica" value={street} onChangeText={setStreet} />
          <View className="flex-row items-center gap-2 pt-2">
            <Text className="mr-[20px] text-base">Wybierz datę</Text>
            <Pressable className="rounded bg-white p-2" onPress={() => showDatePicker()}>
              <Text className="text-base">{formattedDate}</Text>
            </Pressable>
            <Pressable className="rounded bg-white p-2" onPress={() => showTimePicker()}>
              <Text className="text-base">{formattedTime}</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View className="mt-6 flex-row justify-around">
        <Button size="small" variant="secondary" className="mt-4" onPress={() => router.back()}>
          Anuluj
        </Button>
        <Button
          size="small"
          className="mt-4"
          onPress={() => {
            void createAppointment();
          }}
        >
          Dodaj wizytę
        </Button>
      </View>

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

export default CreateAppointmentScreen;
