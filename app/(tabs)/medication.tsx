import React, { useEffect, useMemo, useRef, useState } from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';
import { Easing } from 'react-native-reanimated';
import { Button, FloatingActionButton, MedicationListElement, Text } from '@components';
import BottomSheet, { useBottomSheetSpringConfigs, useBottomSheetTimingConfigs } from '@gorhom/bottom-sheet';
import { Medication } from '@types';
import { Tabs, usePathname, useRouter, useSegments } from 'expo-router';

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
  const snapPoints = useMemo(() => ['92%'], []);

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
      <Text className="mt-12 font-bold text-2xl text-accent">Przypomnienia o lekach</Text>
      {/* <Text className="mt-4 text-center font-medium text-lg text-secondary">
        Zaloguj się, aby móc zarządzać swoją dokumentacją medyczną.
      </Text> */}
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
          />
        )}
        keyExtractor={(item) => item.id}
      />

      <Button
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
      </Button>

      <FloatingActionButton className="absolute bottom-2" onPress={handleExpandPress} />

      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        onClose={handleClosePress}
        animationConfigs={animationConfigs}
        enablePanDownToClose
      >
        <View className="flex-1 items-center">
          <Text>Awesome 🎉</Text>
        </View>
      </BottomSheet>
    </SafeAreaView>
  );
};

export default MedicationScreen;
