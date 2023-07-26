import { useState } from 'react';
import { Pressable, View } from 'react-native';
import { Text } from '@components/Text';
import { CaretakerImage, PatientImage } from '@images';
import clsx from 'clsx';

export const StepAccountType = () => {
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const onPatientPress = () => {
    setActive1(true);
    if (active2) setActive2(false);
  };
  const onCaretakerPress = () => {
    setActive2(true);
    if (active1) setActive1(false);
  };

  return (
    <View className="h-3/4 items-center justify-center">
      <Pressable
        className={clsx('h-52 w-52 justify-center rounded-full bg-accent/60', active1 && 'scale-105 bg-blue-600/60')}
        onPress={onPatientPress}
      >
        <PatientImage width="190px" height="190px" />
      </Pressable>
      <Text className="mb-6 mt-4 text-center font-medium text-lg text-secondary">Jestem podopiecznym</Text>
      <Pressable
        className={clsx('h-52 w-52 justify-center rounded-full bg-accent/60', active2 && 'scale-105 bg-blue-600/60')}
        onPress={onCaretakerPress}
      >
        <CaretakerImage width="208px" height="208px" />
      </Pressable>
      <Text className="mt-4 text-center font-medium text-lg text-secondary">Jestem opiekunem</Text>
    </View>
  );
};
