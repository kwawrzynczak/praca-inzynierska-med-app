/* eslint-disable react/no-unstable-nested-components */
import { useMemo, useState } from 'react';
import { Pressable, View } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Button, Input, Text } from '@components';
import api from '@services/api';
import { useRouter } from 'expo-router';
import moment from 'moment';

interface CreateMedication {
  data: {
    title: string;
  };
}

const CreateMedicationScreen = () => {
  const router = useRouter();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(moment());
  const [selectedTime, setSelectedTime] = useState(moment());
  const [title, setTitle] = useState<string>();

  // const [active, setActive] = useState<boolean>(false);

  const formattedDate = selectedDate.format('DD.MM.YYYY');
  const preparedDate = selectedDate.format('YYYY-MM-DD');
  const formattedTime = selectedTime.format('HH:mm');
  const datetime = useMemo(() => new Date(`${preparedDate}T${formattedTime}`), [formattedTime, preparedDate]);

  // useEffect(() => {
  //   const checkIfActive = () => {
  //     const today = moment();
  //     if (datetime.diff(today) > 0) setActive(true);
  //   };
  //   checkIfActive();
  // }, [datetime]);

  const createMedication = async () => {
    try {
      await api.post<CreateMedication>('/medication', {
        data: { title },
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
          <Input title="Nazwa lekarstwa" value={title} onChangeText={setTitle} />
          <View className="flex-row items-center gap-2">
            <Text className="mr-[72px]">Wybierz datę</Text>
            <Pressable className="rounded bg-white p-2" onPress={() => showDatePicker()}>
              <Text>{formattedDate}</Text>
            </Pressable>
            <Pressable className="rounded bg-white p-2" onPress={() => showTimePicker()}>
              <Text>{formattedTime}</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View className="flex-row justify-around">
        <Button size="small" variant="secondary" className="mt-4" onPress={() => router.back()}>
          Anuluj
        </Button>
        <Button
          size="small"
          className="mt-4"
          onPress={() => {
            void createMedication();
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

export default CreateMedicationScreen;
