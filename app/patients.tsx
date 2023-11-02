import { View } from 'react-native';
import { Button, Text } from '@components';
import { Link } from 'expo-router';

const PatientsScreen = () => {
  return (
    <View>
      <Text>PatientsScreen</Text>
      <Link
        asChild
        href={{
          pathname: 'patient/1',
        }}
      >
        <Button>PatientScreen</Button>
      </Link>
    </View>
  );
};

export default PatientsScreen;
