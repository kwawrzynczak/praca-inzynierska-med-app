import { Pressable, View } from 'react-native';
import { Text } from '@components';
import { CaretakerImage, UserImage } from '@images';

export const StepAccountType = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Pressable className="h-52 w-52 justify-center rounded-full bg-accent/60 active:bg-blue-600/60">
        <UserImage width="190px" height="190px" />
      </Pressable>
      <Text className="mt-4 text-center font-medium text-lg text-secondary">Jestem podopiecznym</Text>
      <Pressable className="mt-10 h-52 w-52 rounded-full bg-accent/60 active:bg-blue-600/60">
        <CaretakerImage width="208px" height="208px" />
      </Pressable>
      <Text className="mt-4 text-center font-medium text-lg text-secondary">Jestem opiekunem</Text>
    </View>
  );
};
