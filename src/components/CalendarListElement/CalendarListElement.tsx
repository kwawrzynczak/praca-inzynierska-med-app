import React from 'react';
import { View } from 'react-native';
import { Text } from '@components/Text';

export const CalendarListElement = () => {
  return (
    <View className="rounded bg-white p-2 shadow">
      <Text variant="subtitle">Kardiolog</Text>
      <Text>9 sierpnia 2023</Text>
      <Text>lek. med. Jan Nowak</Text>
      <Text>lek. med. Jan Nowak</Text>
      <Text>lek. med. Jan Nowak</Text>
      <Text>lek. med. Jan Nowak</Text>
    </View>
  );
};
