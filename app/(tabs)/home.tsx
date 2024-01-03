/* eslint-disable react/no-unstable-nested-components */
import { useState } from 'react';
import { View } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import { Text } from '@components';
import { useIsFocused } from '@react-navigation/native';
import moment from 'moment';

const HomeScreen = () => {
  const today = moment();
  const isFocused = useIsFocused();

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
  return (
    <View className="flex-1 bg-background">
      {/* okienko górne */}
      <View className="container rounded-3xl bg-white pb-3 pt-10 shadow">
        <Text variant="title" className="my-2 pl-3 text-start text-lg uppercase tracking-tighter">
          {selectedDate.format('DDMMYY') === moment().format('DDMMYY')
            ? `dzisiaj, ${selectedDate.format('D MMMM')}`
            : selectedDate.format('dddd, D MMMM')}
        </Text>

        <View className="mx-4 flex-row justify-center">
          <View className="container">
            <CalendarStrip
              scrollable
              daySelectionAnimation={{ type: 'background', duration: 200, highlightColor: '#60a5fa' }}
              calendarHeaderStyle={{ color: '#666', fontFamily: 'NunitoSans_700Bold' }}
              dateNameStyle={{ fontFamily: 'NunitoSans_600SemiBold' }}
              dateNumberStyle={{ fontFamily: 'NunitoSans_700Bold' }}
              highlightDateNameStyle={{ color: 'white', fontFamily: 'NunitoSans_600SemiBold' }}
              highlightDateNumberStyle={{ color: 'white', fontFamily: 'NunitoSans_700Bold' }}
              style={{ height: 80 }}
              iconLeft={null}
              iconRight={null}
              onDateSelected={(date) => {
                setSelectedDate(date);
              }}
              startingDate={moment().subtract(3, 'days')}
              selectedDate={selectedDate}
            />
            {selectedDate.format('LL') === today.format('LL') && (
              <Text className="my-2 text-center font-bold">Dzisiaj</Text>
            )}
            <Text className="my-2 text-center font-bold">{selectedDate.format('LL')}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
