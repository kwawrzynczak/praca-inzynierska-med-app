import { SafeAreaView, View } from 'react-native';
import { Button, StepAccountType, StepRegisterForm, Text } from '@components';
import { useMultistepForm } from '@hooks';

const RegisterScreen = () => {
  const { steps, currentStepIndex, step } = useMultistepForm([<StepAccountType />, <StepRegisterForm />]);
  return (
    <SafeAreaView className="flex-1 items-center bg-background">
      <Text className="text-center">
        Krok {currentStepIndex + 1}/{steps.length}
      </Text>
      {step}
    </SafeAreaView>
  );
};

export default RegisterScreen;
