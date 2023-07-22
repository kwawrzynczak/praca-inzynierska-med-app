import { SafeAreaView, View } from 'react-native';
import { StyledButton } from '@components';
import { OnbardingImage } from '@images';
import { Link } from 'expo-router';

const Onboarding = () => {
  return (
    <SafeAreaView className="flex-1 items-center bg-background">
      <OnbardingImage width="300px" />
      <StyledButton variant="secondary">Zarejestruj się</StyledButton>
      <Link className="h-12 w-[300px]" href="/login" asChild>
        <StyledButton className="mt-20">Mam już konto</StyledButton>
      </Link>
    </SafeAreaView>
  );
};

export default Onboarding;
