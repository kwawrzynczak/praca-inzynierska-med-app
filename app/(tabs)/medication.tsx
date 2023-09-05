/* eslint-disable react/no-unstable-nested-components */
import React, { useState } from 'react';
import { Pressable, View } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { FAB, MedicationList, Text } from '@components';
import moment from 'moment';
import { twMerge } from 'tailwind-merge';

import 'moment/locale/pl';

const MedicationScreen = () => {
  const today = moment();

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(today);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    hideDatePicker();
    setSelectedDate(moment(date));
  };

  const start = moment(selectedDate).subtract(3, 'days');

  const getWeek = (day: moment.Moment) => {
    const list = [day];
    // eslint-disable-next-line no-plusplus
    for (let i = 1; i < 7; i++) {
      list.push(moment(day).add(i, 'days'));
    }
    return list;
  };
  const weekList = getWeek(start);

  return (
    <View className="flex-1 bg-background">
      {/* okienko górne */}
      <View className="container rounded-3xl bg-white pb-3 pt-10 shadow">
        <Text variant="title" className="my-2 pl-3 text-start text-lg uppercase tracking-tighter">
          {selectedDate.format('DDMMYY') === moment().format('DDMMYY')
            ? `dzisiaj, ${selectedDate.format('D MMMM')}`
            : selectedDate.format('dddd, D MMMM')}
        </Text>
        {/* Komponent kalendarza */}
        <View className="container flex-row justify-center">
          {weekList.map((item) => (
            <View className="items-center" key={item.format('D')}>
              <Text className="font-bold">{item.format('dd')}</Text>
              <Pressable
                onPress={() => setSelectedDate(item)}
                className={twMerge(
                  'border-2 items-center justify-center border-accent rounded-full h-10 w-10 m-1 bg-white',
                  item.format('D') === moment(selectedDate).format('D') && 'bg-accent',
                )}
              >
                <Text
                  className={twMerge(
                    'font-extrabold',
                    item.format('D') === moment(selectedDate).format('D') && 'text-white',
                  )}
                >
                  {item.format('D')}
                </Text>
              </Pressable>
            </View>
          ))}
        </View>
        <View className="mx-4 flex-row justify-center">
          <Pressable className="mt-2 rounded-lg bg-accent p-2" onPress={showDatePicker}>
            {/* <FontAwesome5 name="calendar-alt" color="#60a5fa" size={25} /> */}
            <Text variant="subtitle" className="text-white">
              Wybierz datę
            </Text>
          </Pressable>
        </View>
      </View>
      {/* okienko górne koniec */}
      <MedicationList />
      <FAB type="add" className="absolute bottom-6 right-6" onPress={() => console.log('temp')} />

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        display="spinner"
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        confirmTextIOS="Wybierz"
        cancelTextIOS="Wróć"
        themeVariant="light"
        locale="pl_PL"
      />
    </View>
  );
};

export default MedicationScreen;
