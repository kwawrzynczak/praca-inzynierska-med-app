import React, { useMemo, useRef, useState } from 'react';
import { FlatList, Pressable, SafeAreaView, View } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Button, Calendar, FAB, MedicationForm, MedicationListElement, Text } from '@components';
import { FontAwesome5 } from '@expo/vector-icons';
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
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    console.warn('A date has been picked: ', date);
    hideDatePicker();
  };

  // // ref
  // const bottomSheetRef = useRef<BottomSheet>(null);
  // const handleClosePress = () => bottomSheetRef?.current?.close();
  // const handleExpandPress = () => bottomSheetRef?.current?.expand();
  // // variables
  // const snapPoints = useMemo(() => ['100%'], []);

  // const animationConfigs = useBottomSheetSpringConfigs({
  //   damping: 80,
  //   overshootClamping: true,
  //   restDisplacementThreshold: 0.1,
  //   restSpeedThreshold: 0.1,
  //   stiffness: 200,
  // });

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
      <View className="container mr-8 mt-6 items-end ">
        <Pressable onPress={showDatePicker}>
          <FontAwesome5 name="calendar-alt" color="#60a5fa" size={25} />
        </Pressable>
      </View>

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

      <FAB type="add" className="absolute bottom-6 right-6" onPress={() => console.log('temp')} />

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        display="inline"
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        confirmTextIOS="Wybierz"
        cancelTextIOS="Wróć"
        locale="pl_PL"
        themeVariant="light"
      />
    </SafeAreaView>
  );
};

export default MedicationScreen;
