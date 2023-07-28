import { useState } from 'react';
import { Pressable, View } from 'react-native';
import { Text } from '@components/Text';
import { CaretakerImage, PatientImage } from '@images';
import clsx from 'clsx';

const ROLE_BUTTONS = [
  {
    id: 'patient',
    text: 'Jestem podopiecznym',
    image: <PatientImage width="190px" height="190px" />,
  },
  {
    id: 'caretaker',
    text: 'Jestem opiekunem',
    image: <CaretakerImage width="190px" height="190px" />,
  },
];

export const StepAccountType = () => {
  const [selectedId, setSelectedId] = useState<string>();
  return (
    <View className="h-3/4 items-center justify-center">
      {ROLE_BUTTONS.map(({ id, text, image }) => (
        <>
          <Pressable
            className={clsx(
              'h-52 w-52 justify-center rounded-full bg-accent/60',
              selectedId === id && 'scale-105 bg-blue-600/60',
            )}
            onPress={() => setSelectedId(id)}
          >
            {image}
          </Pressable>
          <Text className="mb-6 mt-4 text-center font-medium text-lg text-secondary">{text}</Text>
        </>
      ))}
    </View>
  );
};
