/* eslint-disable react/no-unstable-nested-components */
import { useState } from 'react';
import { Pressable, View } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import RNPickerSelect from 'react-native-picker-select';
import { Button, Input, Text } from '@components';
import api from '@services/api';
import { useRouter } from 'expo-router';
import moment from 'moment';

interface CreateMedication {
  data: {
    name: string;
    meal: string;
    time: string;
    patient?: string | number;
    dosage: string;
    days: string;
    since: Date;
  };
}

const CreateMedicationScreen = () => {
  const router = useRouter();
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(moment());
  const [selectedTime, setSelectedTime] = useState(moment());
  const [name, setName] = useState<string>();
  const [meal, setMeal] = useState<string>();
  const [dosage, setDosage] = useState<string>();
  const since = selectedDate.format('DD-MM-YYYY');
  const [days, setDays] = useState<string>();
  const time = selectedTime.format('HH:mm');

  const createMedication = async () => {
    try {
      await api.post<CreateMedication>('/medications', {
        data: { name, meal, time, dosage, days, since: selectedDate.toDate() },
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
          <Input title="Nazwa lekarstwa" value={name} onChangeText={setName} />
          <Input title="Dawka" value={dosage} onChangeText={setDosage} />
          <Input keyboardType="numeric" title="Przez ile dni?" value={days} onChangeText={setDays} />
          <View className="flex-row items-center justify-between pt-2">
            <View>
              <Text className="text-base">Wybierz godzinę</Text>
              <Pressable className="mt-1 rounded bg-white p-2 px-4" onPress={() => showTimePicker()}>
                <Text className="text-center text-base">{time}</Text>
              </Pressable>
            </View>

            <View>
              <Text className="text-center text-base">Od kiedy?</Text>
              <Pressable className="mt-1 rounded bg-white p-2 px-4" onPress={() => showDatePicker()}>
                <Text className="text-base">{since}</Text>
              </Pressable>
            </View>
          </View>
          <Text className="mt-6 text-base">Z posiłkiem?</Text>
          <View className="mt-1 rounded-lg bg-white">
            <RNPickerSelect
              onValueChange={(value: string) => setMeal(value)}
              placeholder={{ label: 'Wybierz opcję', value: null, color: 'gray' }}
              items={[
                { label: 'w trakcie posiłku', value: 'with', color: 'black' },
                { label: 'przed posiłkiem', value: 'before' },
                { label: 'po posiłku', value: 'after' },
                { label: 'niezależnie od posiłku', value: 'independently' },
              ]}
            />
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
            void createMedication();
          }}
        >
          Dodaj lek
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
