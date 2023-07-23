import { SafeAreaView } from 'react-native';
import { StepAccountType, StepRegisterForm, Text } from '@components';
import { useMultistepForm } from '@hooks';

const RegisterScreen = () => {
  const { length, index, next } = useMultistepForm(2);

  return (
    <SafeAreaView className="flex-1 items-center bg-background">
      <Text className="text-center">
        Krok {index + 1}/{length}
      </Text>
      {index === 0 && <StepAccountType onPatientPress={next} onCaretakerPress={next} />}
      {index === 1 && <StepRegisterForm />}
    </SafeAreaView>
  );
};

export default RegisterScreen;
