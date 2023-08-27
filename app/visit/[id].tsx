/* eslint-disable react/no-unstable-nested-components */
import { View } from 'react-native';
import { FAB, Text } from '@components';
import { useLocalSearchParams } from 'expo-router';

const VisitScreen = () => {
  const { id } = useLocalSearchParams();
  return (
    <View className="flex-1 bg-background p-4">
      <View className="absolute right-4 top-4 flex-row gap-4">
        <FAB type="edit" />
        <FAB type="delete" />
      </View>

      <Text variant="title">Kardiolog</Text>
      <Text variant="subtitle">lek. med. Jan Nowak</Text>
      <Text>Notatki do wizyty: </Text>
      <View>
        <Text className="rounded-lg bg-white p-2">Pić dużo wody, skierowanie na usg, konsultacje po badaniu usg</Text>
      </View>
    </View>
  );
};

export default VisitScreen;
