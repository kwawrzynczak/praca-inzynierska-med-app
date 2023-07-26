import { FlatList, SafeAreaView, View } from 'react-native';
import { Button, Text } from '@components';
import { Link } from 'expo-router';

const DATA = [
  { name: '1' },
  { name: '2' },
  { name: '3' },
  { name: '4' },
  { name: '5' },
  { name: '5' },
  { name: '5' },
  { name: '5' },
  { name: '5' },
  { name: '5' },
  { name: '5' },
];

const CalendarScreen = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-background">
      <Text>Kalendarz</Text>

      <FlatList
        horizontal
        data={DATA}
        renderItem={({ item }) => (
          <View className="mx-3 h-12 w-12 items-center justify-center rounded-full bg-accent">
            <Text className="font-semibold text-xl text-white">{item.name}</Text>
          </View>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeAreaView>
  );
};

export default CalendarScreen;
