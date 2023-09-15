/* eslint-disable react/no-unstable-nested-components */
import { View } from 'react-native';
import { AppointmentsList, AppointmentsListElement, FAB, Text } from '@components';

const elements = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }];
const ActiveScreen = () => {
  return (
    <View className="flex-1 items-center bg-background">
      {/* if AppointmentsList is empty */}
      {/* <View className="h-full justify-center">
        <Text className="text-center" variant="subtitle">
          Nie masz zaplanowanych żadnych wizyt. Naciśnij +, aby dodać wizytę!
        </Text>
      </View> */}
      <Text>Najbliższa wizyta</Text>
      <AppointmentsListElement id={elements[0].id.toString()} />

      {/* show all active appointments */}
      <Text>Wszystkie wizyty</Text>
      <AppointmentsList appointments={elements} />

      <FAB type="add" className="absolute bottom-6 right-6" />
    </View>
  );
};

export default ActiveScreen;
