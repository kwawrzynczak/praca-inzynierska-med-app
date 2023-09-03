/* eslint-disable react/no-unstable-nested-components */
import { useState } from 'react';
import { TextInput, View } from 'react-native';
import { Button, FAB, Text } from '@components';
import { useLocalSearchParams } from 'expo-router';

const VisitScreen = () => {
  const { id } = useLocalSearchParams();
  const [editable, setEditable] = useState(false);
  return (
    <View className="flex-1 bg-background p-4">
      <TextInput className="font-bold text-2xl text-accent" editable={editable}>
        Kardiolog
      </TextInput>
      <TextInput className="font-normal text-lg text-secondary" editable={editable}>
        lek. med. Jan Nowak
      </TextInput>
      <Text className="mb-2 mt-8 text-base">Notatki do wizyty: </Text>
      <TextInput
        className="rounded-lg border border-white bg-white px-4 py-3 focus:border-accent"
        multiline
        editable={editable}
      >
        Pić dużo wody, skierowanie na usg, konsultacje po badaniu usg
      </TextInput>

      <View className="absolute right-4 top-4 flex-row gap-4">
        {!editable && <FAB type="edit" onPress={() => setEditable(true)} />}
        <FAB type="delete" />
      </View>

      {editable && (
        <Button className="mt-4" onPress={() => setEditable(false)}>
          Zapisz zmiany
        </Button>
      )}
    </View>
  );
};

export default VisitScreen;
