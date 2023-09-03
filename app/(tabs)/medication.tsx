import React, { useMemo, useRef, useState } from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';
import { Button, Calendar, FAB, MedicationForm, MedicationListElement, Text } from '@components';
import BottomSheet, { useBottomSheetSpringConfigs } from '@gorhom/bottom-sheet';
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
  const [medicationList, setMedicationList] = useState(initialMedicationList);
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);
  const handleClosePress = () => bottomSheetRef?.current?.close();
  const handleExpandPress = () => bottomSheetRef?.current?.expand();
  // variables
  const snapPoints = useMemo(() => ['100%'], []);

  const animationConfigs = useBottomSheetSpringConfigs({
    damping: 80,
    overshootClamping: true,
    restDisplacementThreshold: 0.1,
    restSpeedThreshold: 0.1,
    stiffness: 200,
  });

  const addMediaction = ({ id, name, amount, substance, time, isDone }: Medication) => {
    const newMedication = {
      id,
      name,
      amount,
      substance,
      time,
      isDone,
    };
    setMedicationList((prev) => [newMedication, ...prev]);
  };

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-background">
      <Calendar />

      {/* SectionList */}
      <FlatList
        contentContainerStyle={{ alignItems: 'center' }}
        className="h-full w-screen"
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

      <FAB type="add" className="absolute bottom-6 right-6" onPress={handleExpandPress} />

      {/* BottomSheet component */}
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        onClose={handleClosePress}
        animationConfigs={animationConfigs}
        enablePanDownToClose
      >
        <View className="flex-1 items-center bg-background pt-4">
          <MedicationForm onPress={handleClosePress} />
        </View>
      </BottomSheet>
    </SafeAreaView>
  );
};

export default MedicationScreen;
