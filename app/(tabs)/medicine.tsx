import { SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { FloatingActionButton, Text } from '@components';
import { Link } from 'expo-router';

const MedicineScreen = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-background">
      <Text>Medicine</Text>
      <ScrollView className="w-screen" />
      <FloatingActionButton className="absolute bottom-2" />
    </SafeAreaView>
  );
};

export default MedicineScreen;
