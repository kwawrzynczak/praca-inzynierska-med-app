import { SafeAreaView, View } from 'react-native';
import { Button, StepAccountType, StepRegisterForm, Text } from '@components';

const RegisterScreen = () => {
  return (
    <SafeAreaView className="flex-1 items-center bg-background">
      <StepAccountType />
    </SafeAreaView>
  );
};

export default RegisterScreen;
