import { SafeAreaView, View } from 'react-native';
import { Button } from '@components';
import { OnbardingImage } from '@images';
import { Link } from 'expo-router';

const Onboarding = () => {
  return (
    <SafeAreaView className="flex-1 items-center bg-background">
      <OnbardingImage width="300px" />
      <Button variant="secondary">Zarejestruj się</Button>
      <Link className="h-12 w-[300px]" href="/login" asChild>
        <Button className="mt-20">Mam już konto</Button>
      </Link>
    </SafeAreaView>
  );
};

export default Onboarding;
