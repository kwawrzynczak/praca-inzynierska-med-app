import { FlatList, View } from 'react-native';
import { Text } from '@components/Text';

const DATA = [
  { name: 'pon', day: 1 },
  { name: 'wt', day: 2 },
  { name: 'śr', day: 3 },
  { name: 'czw', day: 4 },
  { name: 'pt', day: 5 },
  { name: 'sob', day: 6 },
];
export const Calendar = () => {
  return (
    <View className="container items-center">
      <Text variant="subtitle">styczeń 2024</Text>
      <FlatList
        className="h-24 pt-2"
        contentContainerStyle={{ alignItems: 'center' }}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={DATA}
        renderItem={({ item }) => (
          <View className="mx-3 h-16 w-12 items-center justify-center rounded-lg bg-accent">
            <Text className="font-bold text-white">{item.name}</Text>
            <Text className="font-semibold text-xl text-white">{item.day}</Text>
          </View>
        )}
        keyExtractor={(item) => item.name}
      />
      <Text variant="subtitle" className="my-2">
        poniedziałek, 1 stycznia
      </Text>
    </View>
  );
};
