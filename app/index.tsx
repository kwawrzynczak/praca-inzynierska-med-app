import { SafeAreaView, View } from 'react-native';
import { Button, Text } from '@components';
import { OnbardingImage } from '@images';
import { Link } from 'expo-router';

const Onboarding = () => {
  return (
    <SafeAreaView className="flex-1 items-center bg-background">
      <Text className="mt-12 font-bold text-3xl text-accent">HealthHub</Text>
      <View className="mb-20 mt-12 rounded-full bg-white">
        <OnbardingImage width="300px" height="300px" />
      </View>

      <Link href="/register" asChild>
        <Button variant="secondary">Zarejestruj się</Button>
      </Link>
      <Link href="/login" asChild>
        <Button className="mt-3">Mam już konto</Button>
      </Link>
    </SafeAreaView>
  );
};

export default Onboarding;
