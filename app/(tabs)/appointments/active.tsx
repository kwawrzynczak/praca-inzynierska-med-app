/* eslint-disable react/no-unstable-nested-components */
import { View } from 'react-native';
import { AppointmentsList, AppointmentsListElement, ConnectedAppointmentsList, FAB, Text } from '@components';

const ActiveScreen = () => {
  return (
    <View className="flex-1 items-center bg-background">
      <ConnectedAppointmentsList active />
      <FAB type="add" className="absolute bottom-6 right-6" />
    </View>
  );
};

export default ActiveScreen;
