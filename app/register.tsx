import { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { Button, StepAccountType, StepRegisterForm } from '@components';
import { useMultistepForm } from '@hooks';
import { Link } from 'expo-router';

const RegisterScreen = () => {
  const [selectedId, setSelectedId] = useState<string>();
  const { steps, currentStepIndex, step, back, next } = useMultistepForm([<StepAccountType />, <StepRegisterForm />]);
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-background">
      {step}
      {currentStepIndex !== 0 && <Button onPress={back}>Back</Button>}
      {currentStepIndex !== steps.length - 1 && <Button onPress={next}>Next</Button>}
      {currentStepIndex === steps.length - 1 && (
        <Link href="/invite" asChild>
          <Button className="mt-3">Zatwierdź (opiekun)</Button>
        </Link>
      )}
    </SafeAreaView>
  );
};

export default RegisterScreen;
