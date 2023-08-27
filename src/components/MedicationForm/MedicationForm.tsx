import React from 'react';
import { Text, View } from 'react-native';
import { Button } from '@components/Button';
import { Input } from '@components/Input';

interface MedicationFormProps {
  onPress: () => void;
}

export const MedicationForm = ({ onPress }: MedicationFormProps) => {
  return (
    <View className="items-center justify-center">
      <View>
        <Input title="Nazwa leku" placeholder="Nazwa leku" placeholderTextColor="#666" />
        <Input title="Okienko" placeholder="Okienko" placeholderTextColor="#666" />
        <Input title="Okienko" placeholder="Okienko" placeholderTextColor="#666" />
      </View>

      <Button onPress={onPress}>Dodaj przypomnienie</Button>
    </View>
  );
};
