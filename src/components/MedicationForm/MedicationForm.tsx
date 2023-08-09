import React from 'react';
import { Text, View } from 'react-native';
import { Button } from '@components/Button';
import { Input } from '@components/Input';

export const MedicationForm = () => {
  return (
    <View className="items-center justify-center">
      <View>
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
          <Text className="font-medium">Nie pamiętasz hasła? </Text>
        </View>
      </View>

      <Button>Dodaj przypomnienie</Button>
    </View>
  );
};
