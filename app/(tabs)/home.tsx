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
  const [selectedDate, setSelectedDate] = useState(today);

  return (
    <View className="flex-1 bg-background">
      <View className="container rounded-3xl bg-white pb-3 pt-16 shadow">
        <Text variant="title" className="text-center text-lg uppercase tracking-tighter">
          {selectedDate.format('DDMMYY') === moment().format('DDMMYY')
            ? `dzisiaj, ${selectedDate.format('LL')}`
            : selectedDate.format('dddd, LL')}
        </Text>
        <View className="mx-4 mt-2 flex-row justify-center">
          <View className="container">
            <CalendarStrip
              scrollable
              daySelectionAnimation={{
                type: 'border',
                duration: 200,
                borderWidth: 1,
                borderHighlightColor: '#666',
              }}
              calendarHeaderStyle={{ color: '#666', fontFamily: 'NunitoSans_700Bold', fontSize: 16 }}
              dateNameStyle={{ fontFamily: 'NunitoSans_600SemiBold', fontSize: 12 }}
              dateNumberStyle={{ fontFamily: 'NunitoSans_700Bold', fontSize: 16 }}
              highlightDateNameStyle={{ fontFamily: 'NunitoSans_700Bold', fontSize: 12 }}
              highlightDateNumberStyle={{ fontFamily: 'NunitoSans_700Bold', fontSize: 16 }}
              style={{ height: 80 }}
              iconLeft={null}
              iconRight={null}
              onDateSelected={(date) => {
                setSelectedDate(date);
              }}
              startingDate={moment().subtract(3, 'days')}
              selectedDate={selectedDate}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

//  <DateTimePickerModal
// isVisible={isDatePickerVisible}
// display="spinner"
// mode="date"
// onConfirm={handleConfirm}
// onCancel={hideDatePicker}
// confirmTextIOS="Wybierz"
// cancelTextIOS="Wróć"
// themeVariant="light"
// locale="pl_PL"
// />

// const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

// const showDatePicker = () => {
//   setDatePickerVisibility(true);
// };

// const hideDatePicker = () => {
//   setDatePickerVisibility(false);
// };

// const handleConfirm = (date: Date) => {
//   hideDatePicker();
//   setSelectedDate(moment(date));
// };
