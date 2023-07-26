import { SafeAreaView, View } from 'react-native';
import { Button, Input, Text } from '@components';
import { Link } from 'expo-router';

const RegisterScreen = () => {
  return (
    <SafeAreaView className="flex-1 items-center bg-background">
      <Text className="mt-12 font-bold text-2xl text-accent">Znajdź podopiecznego</Text>
      <Text className="mt-4 text-center font-medium text-lg text-secondary">
        Wyślij zaproszenie do podopiecznego, aby móc zarządzać jego dokumentacją medyczną.
      </Text>
      <View className="h-1/2">
        <Input
          title="Adres e-mail podopiecznego"
          placeholder="uzytkownik@example.com"
          placeholderTextColor="#666"
          textContentType="emailAddress"
          keyboardType="email-address"
        />
      </View>
      <Link href="/invite" asChild>
        <Button className="active:bg-red-500">Wyślij zaproszenie</Button>
      </Link>
    </SafeAreaView>
  );
};

export default RegisterScreen;
