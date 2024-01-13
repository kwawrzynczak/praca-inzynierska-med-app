/* eslint-disable react/no-unstable-nested-components */
import { useState } from 'react';
import { View } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Text } from '@components';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { useIsFocused } from '@react-navigation/native';
import moment from 'moment';

const HomeScreen = () => {
  const today = moment();
  const isFocused = useIsFocused();
  const [selectedDate, setSelectedDate] = useState(today);

  return (
    <View className="w-full flex-1 gap-y-4 bg-background">
      <View className="container rounded-b-3xl bg-gray-100 pb-3 pt-12 shadow">
        <View className="mx-4 flex-row justify-center">
          {/* Calendar container */}
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
          {/* Calendar container */}
        </View>
      </View>
      {/* Current caretaker info */}
      <View className="mx-4 flex-row items-center justify-between rounded-full bg-gray-100 p-3 pr-4 shadow">
        <View className="h-14 w-14 rounded-full bg-red" />
        <View className="flex items-center justify-center">
          <Text variant="subtitle">Sprawdź, jak ma się Marek</Text>
          <Text className="text-gray-500">Naciśnij, aby zmienić podopiecznego</Text>
        </View>
        <FontAwesome name="angle-right" size={24} color="#666" />
      </View>
      {/* Current caretaker info */}
      <View>
        <Text variant="title" className="text-center text-lg uppercase tracking-tighter">
          {selectedDate.format('DDMMYY') === moment().format('DDMMYY')
            ? `dzisiaj, ${selectedDate.format('LL')}`
            : selectedDate.format('dddd, LL')}
        </Text>
        <View className="flex h-44 items-center justify-center">
          <Text>Brak planów na dziś</Text>
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
