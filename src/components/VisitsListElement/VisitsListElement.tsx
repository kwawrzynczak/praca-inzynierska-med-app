import React from 'react';
import { Pressable, View } from 'react-native';
import { Text } from '@components/Text';
import { Link } from 'expo-router';

interface VisitProps {
  id: string;
}
export const VisitsListElement = ({ id }: VisitProps) => {
  return (
    <Link asChild href={`/${id}`}>
      <Pressable>
        <View className="rounded bg-white p-2 shadow">
          <Text variant="subtitle">Kardiolog</Text>
          <Text>9 sierpnia 2023</Text>
          <Text>lek. med. Jan Nowak</Text>
          <Text>lek. med. Jan Nowak</Text>
          <Text>lek. med. Jan Nowak</Text>
          <Text>lek. med. Jan Nowak</Text>
        </View>
      </Pressable>
    </Link>
  );
};
