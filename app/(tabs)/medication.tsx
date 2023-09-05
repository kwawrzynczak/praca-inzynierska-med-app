import React, { useRef, useState } from 'react';
import { Pressable, SafeAreaView, View } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { FAB, Text } from '@components';
import { FontAwesome5 } from '@expo/vector-icons';
import moment from 'moment';

import 'moment/locale/pl';

const MedicationScreen = () => {
  const today = moment();

  const calendarStripRef = useRef<CalendarStrip>(null);
  const setDate = (date: moment.Moment) => calendarStripRef?.current?.setSelectedDate(date);
  const updateView = (date: moment.Moment) => calendarStripRef?.current?.updateWeekView(date);

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
    updateView(moment(date));
  };

  return (
    <SafeAreaView className="flex-1 items-center bg-background">
      <View className="container mr-8 mt-6 items-end " />

      <View className="container">
        {/* <CalendarStrip
          minDate={moment('19200101')}
          scrollable
          daySelectionAnimation={{ type: 'background', duration: 200, highlightColor: '#60a5fa' }}
          calendarHeaderStyle={{ color: '#666', fontFamily: 'NunitoSans_700Bold' }}
          dateNameStyle={{ fontFamily: 'NunitoSans_600SemiBold' }}
          dateNumberStyle={{ fontFamily: 'NunitoSans_700Bold' }}
          highlightDateNameStyle={{ color: 'white', fontFamily: 'NunitoSans_600SemiBold' }}
          highlightDateNumberStyle={{ color: 'white', fontFamily: 'NunitoSans_700Bold' }}
          style={{ height: 100 }}
          rightSelector={[]}
          leftSelector={[]}
          onDateSelected={(date) => {
            setSelectedDate(date);
          }}
          startingDate={moment().subtract(3, 'days')}
          selectedDate={selectedDate}
        /> */}
        <View className="mx-4 flex-row justify-between">
          <Text className="my-2 text-center font-bold">{selectedDate.format('dddd, LL')}</Text>
          <Pressable onPress={showDatePicker}>
            {/* <FontAwesome5 name="calendar-alt" color="#60a5fa" size={25} /> */}
            <Text>Wybierz datę</Text>
          </Pressable>
        </View>
      </View>

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
    </SafeAreaView>
  );
};

export default MedicationScreen;
