import { SafeAreaView } from 'react-native';
import { FloatingActionButton, Text } from '@components';
import { Link } from 'expo-router';

const MedicineScreen = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-background">
      <Text>Medicine</Text>
      <FloatingActionButton />
    </SafeAreaView>
  );
};

export default MedicineScreen;
