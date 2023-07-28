import { useState } from 'react';
import { Pressable, View } from 'react-native';
import { Text } from '@components/Text';
import { CaretakerImage, PatientImage } from '@images';
import clsx from 'clsx';

export const StepAccountType = () => {
  const [selectedId, setSelectedId] = useState<string>();
  return (
    <View className="h-3/4 items-center justify-center">
      <Pressable
        className={clsx(
          'h-52 w-52 justify-center rounded-full bg-accent/60',
          selectedId === 'patient' && 'scale-105 bg-blue-600/60',
        )}
        onPress={() => setSelectedId('patient')}
      >
        <PatientImage width="190px" height="190px" />
      </Pressable>
      <Text className="mb-6 mt-4 text-center font-medium text-lg text-secondary">Jestem podopiecznym</Text>
      <Pressable
        className={clsx(
          'h-52 w-52 justify-center rounded-full bg-accent/60',
          selectedId === 'caretaker' && 'scale-105 bg-blue-600/60',
        )}
        onPress={() => setSelectedId('caretaker')}
      >
        <CaretakerImage width="208px" height="208px" />
      </Pressable>
      <Text className="mt-4 text-center font-medium text-lg text-secondary">Jestem opiekunem</Text>
    </View>
  );
};
