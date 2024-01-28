import React from 'react';
import { View } from 'react-native';
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

      {/* SectionList
            <FlatList
        contentContainerStyle={{ alignItems: 'center' }}
        className="h-full w-screen"
        data={medicationList}
        renderItem={({ item }) => (
          <MedicationListElement
            key={item.id}
            id={item.id}
            name={item.name}
            amount={item.amount}
            substance={item.substance}
            time={item.time}
            isDone
          />
        )}
        keyExtractor={(item) => item.id}
      /> */}

      <Button onPress={onPress}>Dodaj przypomnienie</Button>
    </View>
  );
};
