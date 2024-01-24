import { SafeAreaView, View } from 'react-native';
import { Button, Input, Text } from '@components';
import { Link } from 'expo-router';

const InviteScreen = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-background">
      <Text variant="title" className="mt-12">
        Znajdź podopiecznego
      </Text>
      <Text variant="subtitle" className="mt-4 text-center">
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
        <Button>Wyślij zaproszenie</Button>
      </Link>
    </SafeAreaView>
  );
};

export default InviteScreen;
