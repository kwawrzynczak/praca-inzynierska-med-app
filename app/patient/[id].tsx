import { SafeAreaView } from 'react-native';
import { Text } from '@components';
import { useLocalSearchParams } from 'expo-router';

const PatientScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <SafeAreaView>
      <Text>{id}</Text>
    </SafeAreaView>
  );
};

export default PatientScreen;
