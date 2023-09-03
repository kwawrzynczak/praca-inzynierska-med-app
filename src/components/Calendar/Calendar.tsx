import { useState } from 'react';
import { FlatList, View } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import { Text } from '@components/Text';
import moment from 'moment';

import 'moment/locale/pl';

export const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(moment());
  return (
    <View className="container">
      <CalendarStrip
        scrollable
        calendarHeaderStyle={{ color: '#666', fontFamily: 'NunitoSans_700Bold' }}
        daySelectionAnimation={{ type: 'background', duration: 200, highlightColor: '#60a5fa' }}
        highlightDateNumberStyle={{ color: 'white' }}
        highlightDateNameStyle={{ color: 'white' }}
        style={{ height: 80 }}
        iconLeft={null}
        iconRight={null}
        onDateSelected={(date) => {
          setSelectedDate(date);
        }}
        selectedDate={moment()}
        startingDate={moment().subtract(3, 'days')}
      />
      {selectedDate.format('LL') === moment().format('LL') && (
        <Text className="my-2 text-center font-bold">Dzisiaj</Text>
      )}
      <Text className="my-2 text-center font-bold">{selectedDate.format('LL')}</Text>
    </View>
  );
};
