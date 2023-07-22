import { SafeAreaView, View } from 'react-native';
import { CalendarIcon } from 'react-native-heroicons/solid';
import { StyledButton } from '@components';
import { Link } from 'expo-router';

const Onboarding = () => {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <StyledButton variant="secondary">Zarejestruj się</StyledButton>
      <Link className="h-12 w-[300px]" href="/login" asChild>
        <StyledButton className="mt-20">Mam już konto</StyledButton>
      </Link>
    </SafeAreaView>
  );
};

export default Onboarding;
