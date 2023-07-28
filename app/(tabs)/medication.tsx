import React, { useCallback, useMemo, useRef, useState } from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';
import { Button, FloatingActionButton, MedicationListElement, Text } from '@components';
import BottomSheet from '@gorhom/bottom-sheet';
import { Medication } from '@types';

const initialMedicationList = [
  {
    id: '1',
    name: 'Ibuprofen',
    amount: '1',
    substance: '10',
    time: '10:00',
    isDone: false,
  },
  {
    id: '2',
    name: 'Ibuprofen2',
    amount: '1',
    substance: '10',
    time: '10:00',
    isDone: false,
  },
];

const MedicationScreen = () => {
  const [bottom, setBottom] = useState(false);
  const [medicationList, setMedicationList] = useState(initialMedicationList);
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['90%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);
  const addMediaction = ({ id, name, amount, substance, time, isDone }: Medication) => {
    const newMedication = {
      id,
      name,
      amount,
      substance,
      time,
      isDone,
    };
    setMedicationList([newMedication, ...medicationList]);
  };
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-background">
      <Text className="mt-12 font-bold text-2xl text-accent">Przypomnienia o lekach</Text>
      {/* <Text className="mt-4 text-center font-medium text-lg text-secondary">
        Zaloguj się, aby móc zarządzać swoją dokumentacją medyczną.
      </Text> */}
      <Button onPress={() => setBottom((prev) => !prev)}>Reset</Button>
      <FlatList
        contentContainerStyle={{ alignItems: 'center' }}
        className="mt-5 h-full w-screen border-red-500"
        data={medicationList}
        renderItem={({ item }) => (
          <MedicationListElement
            key={item.id}
            id={item.id}
            name={item.name}
            amount={item.amount}
            substance={item.substance}
            time={item.time}
            isDone
            onPress={() => console.log('press1')}
          />
        )}
        keyExtractor={(item) => item.id}
      />

      {/* <Button
        onPress={() =>
          addMediaction({
            id: 'test',
            name: 'test',
            amount: '1',
            substance: '10',
            time: '10:00',
            isDone: false,
          })
        }
      >
        Add test
      </Button> */}
      <FloatingActionButton className="absolute bottom-2" onPress={() => setBottom(true)} />
      {bottom && (
        <BottomSheet
          ref={bottomSheetRef}
          index={0}
          snapPoints={snapPoints}
          onChange={(index) => {
            handleSheetChanges(index);
            if (index !== 0) setBottom(false);
          }}
          enablePanDownToClose
        >
          <View className="flex-1 items-center">
            <Text>Awesome 🎉</Text>
          </View>
        </BottomSheet>
      )}
    </SafeAreaView>
  );
};

export default MedicationScreen;
