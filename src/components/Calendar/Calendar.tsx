import { useState } from 'react';
import { View } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import { Text } from '@components/Text';
import moment from 'moment';

import 'moment/locale/pl';

export const Calendar = () => {
  const today = moment();
  const [selectedDate, setSelectedDate] = useState(today);

  return (
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
        selectedDate={today}
      />
      {selectedDate.format('LL') === today.format('LL') && <Text className="my-2 text-center font-bold">Dzisiaj</Text>}
      <Text className="my-2 text-center font-bold">{selectedDate.format('LL')}</Text>
    </View>
  );
};
