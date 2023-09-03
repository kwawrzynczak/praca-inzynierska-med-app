import { FlatList, View } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import { Text } from '@components/Text';
import moment from 'moment';

import 'moment/locale/pl';

export const Calendar = () => {
  return (
    <View className="container">
      <CalendarStrip
        scrollable
        calendarHeaderStyle={{ color: '#666', fontFamily: 'NunitoSans_700Bold' }}
        style={{ height: 80 }}
      />
      <Text className="my-2 text-center font-bold">{moment().format('LL')}</Text>
    </View>
  );
};
