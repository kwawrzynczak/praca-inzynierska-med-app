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
  };
}

const CreateMedicationScreen = () => {
  const router = useRouter();
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [selectedTime, setSelectedTime] = useState(moment());
  const [name, setName] = useState<string>();
  const [meal, setMeal] = useState<string>();
  const [dosage, setDosage] = useState<string>();
  const [days, setDays] = useState<string>();
  const time = selectedTime.format('HH:mm');

  const createMedication = async () => {
    try {
      await api.post<CreateMedication>('/medications', {
        data: { name, meal, time, dosage, days },
      });
      router.back();
    } catch (error) {
      console.error(error);
    }
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
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
          <View className="flex-row items-center gap-2 pt-2">
            <Text className="mr-[86px] text-base">Wybierz godzinę</Text>
            <Pressable className="rounded bg-white p-2 px-4" onPress={() => showTimePicker()}>
              <Text className="text-base">{time}</Text>
            </Pressable>
          </View>

          <View className="mt-6 rounded-lg bg-white">
            <RNPickerSelect
              onValueChange={(value: string) => setMeal(value)}
              placeholder={{ label: 'Wybierz posiłek', value: null, color: 'gray' }}
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
    </View>
  );
};

export default CreateMedicationScreen;
