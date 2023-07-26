import { Pressable, SafeAreaView, View } from 'react-native';
import { Button, Input, Text } from '@components';
import { Link, useRouter } from 'expo-router';

const LoginScreen = () => {
  const router = useRouter();
  const handleLogin = () => {
    router.replace('calendar');
  };
  return (
    <SafeAreaView className="flex-1 items-center bg-background">
      <Text className="mt-12 font-bold text-2xl text-accent">Witaj z powrotem!</Text>
      <Text className="mt-4 text-center font-medium text-lg text-secondary">
        Zaloguj się, aby móc zarządzać swoją dokumentacją medyczną.
      </Text>
      <View className="mt-12">
        <View className="h-3/4">
          <Input
            title="Adres e-mail"
            placeholder="uzytkownik@example.com"
            placeholderTextColor="#666"
            textContentType="emailAddress"
          />

          <Input
            title="Hasło"
            placeholder="**********"
            placeholderTextColor="#666"
            textContentType="password"
            secureTextEntry
          />
          <View className="flex-row justify-center">
            <Text className="font-medium text-secondary">Nie pamiętasz hasła? </Text>
            <Link href="/" asChild>
              <Pressable>
                <Text className="font-bold text-accent underline">Zresetuj hasło</Text>
              </Pressable>
            </Link>
          </View>
        </View>

        <Button onPress={handleLogin} className="">
          Zaloguj się
        </Button>
        <View className="mt-3 flex-row justify-center">
          <Text className="font-medium text-secondary">Nie masz konta? </Text>
          <Link href="/register" asChild>
            <Pressable>
              <Text className="font-bold text-accent underline">Zarejestruj się</Text>
            </Pressable>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
