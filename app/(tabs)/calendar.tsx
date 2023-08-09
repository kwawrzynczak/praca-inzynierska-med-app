import { Fragment, useState } from 'react';
import { FlatList, Pressable, SafeAreaView, View } from 'react-native';
import { Button, Text } from '@components';
import { Link } from 'expo-router';
import { twMerge } from 'tailwind-merge';

const sectionButtons = [
  { id: 'active', text: 'Nadchodzące' },
  { id: 'inactive', text: 'Zakończone' },
];

const CalendarScreen = () => {
  const [selectedId, setSelectedId] = useState('active');

  return (
    <SafeAreaView className="flex-1 items-center bg-background">
      <View className="mt-4 flex-row items-center justify-center rounded-xl bg-accent p-1.5">
        {sectionButtons.map(({ id, text }) => (
          <Fragment key={id}>
            <Pressable
              className={twMerge('w-44 items-center bg-accent py-2 rounded-lg', selectedId === id && 'bg-white')}
              onPress={() => setSelectedId(id)}
            >
              <Text className={twMerge('font-medium text-base text-white', selectedId === id && 'text-accent')}>
                {text}
              </Text>
            </Pressable>
          </Fragment>
        ))}
      </View>
      {selectedId === 'active' && <Text>Nadchodzące</Text>}
      {selectedId === 'inactive' && <Text>Zakończone</Text>}
    </SafeAreaView>
  );
};

export default CalendarScreen;
