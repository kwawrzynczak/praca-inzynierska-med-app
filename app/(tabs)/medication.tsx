import { FlatList, SafeAreaView } from 'react-native';
import { FloatingActionButton, MedicationListElement, Text } from '@components';

const MEDICATION_LIST = [
  {
    id: '1',
    name: 'Ibuprofen',
    amount: '1',
    substance: '10',
    time: '10:00',
    done: true,
  },
  {
    id: '2',
    name: 'Ibuprofen2',
    amount: '1',
    substance: '10',
    time: '10:00',
    done: false,
  },
];

const MedicationScreen = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-background">
      <Text>Medicine</Text>
      <FlatList
        contentContainerStyle={{ alignItems: 'center' }}
        className="w-screen"
        data={MEDICATION_LIST}
        renderItem={({ item }) => (
          <MedicationListElement
            name={item.name}
            amount={item.amount}
            substance={item.substance}
            time={item.time}
            done={item.done}
          />
        )}
        keyExtractor={(item) => item.id}
      />
      <FloatingActionButton className="absolute bottom-2" />
    </SafeAreaView>
  );
};

export default MedicationScreen;
