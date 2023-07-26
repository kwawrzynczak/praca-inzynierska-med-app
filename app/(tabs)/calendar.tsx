import { SafeAreaView } from 'react-native';
import { Button, Text } from '@components';
import { Link } from 'expo-router';

const CalendarScreen = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-background">
      <Text>Kalendarz</Text>
    </SafeAreaView>
  );
};

export default CalendarScreen;
