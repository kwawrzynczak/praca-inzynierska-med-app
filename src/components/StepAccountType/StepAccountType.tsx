import { Pressable, View } from 'react-native';
import { Text } from '@components';

export const StepAccountType = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Pressable className="h-52 w-52 rounded-full border bg-accent active:bg-blue-900" />
      <Text className="mt-4 text-center font-medium text-lg text-secondary">Jestem podopiecznym</Text>
      <Pressable className="mt-10 h-52 w-52 items-center justify-center rounded-full border bg-accent active:bg-blue-900" />
      <Text className="mt-4 text-center font-medium text-lg text-secondary">Jestem opiekunem</Text>
    </View>
  );
};
