import { Fragment, useState } from 'react';
import { Pressable, View } from 'react-native';
import { Text } from '@components/Text';
import { CaretakerImage, PatientImage } from '@images';
import { twMerge } from 'tailwind-merge';

const roleButtons = [
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
      {roleButtons.map(({ id, text, image }) => (
        <Fragment key={id}>
          <Pressable
            className={twMerge(
              'h-52 w-52 justify-center rounded-full bg-accent/60',
              selectedId === id && 'scale-105 bg-blue-600/60',
            )}
            onPress={() => setSelectedId(id)}
          >
            {image}
          </Pressable>
          <Text className="mb-6 mt-4 text-center font-normal text-lg">{text}</Text>
        </Fragment>
      ))}
    </View>
  );
};
