/* eslint-disable react/jsx-props-no-spreading */
import { Animated, Pressable, PressableProps, View } from 'react-native';
import { Text } from '@components/Text';
import { useAnimation } from '@hooks';
import { Link } from 'expo-router';
import { twMerge } from 'tailwind-merge';

interface ListElementProps extends Omit<PressableProps, 'id'> {
  id: number;
  name: string;
  time: string;
  meal: string;
  dosage: number | string;
}
export const MedicationListElement = ({ id, name, time, meal, dosage, ...rest }: ListElementProps) => {
  const { opacityValue, fadeIn, fadeOut } = useAnimation();

  return (
    <Link
      asChild
      href={{
        pathname: 'medication/[id]',
        params: { id },
      }}
    >
      <Pressable
        className="mb-4 w-[360px] flex-row items-center justify-between rounded-xl bg-white px-4 py-3"
        onPressIn={fadeIn}
        onPressOut={fadeOut}
        {...rest}
      >
        <Animated.View
          className={twMerge('absolute left-0 top-0 h-24 w-[360px] rounded-lg bg-accent/10')}
          style={{ opacity: opacityValue }}
        />
        <View className="flex-row">
          <View className="size-10 rounded-full bg-red" />
          <View>
            <Text className="font-bold text-lg">{name}</Text>
            <Text className="font-bold text-lg">
              {meal === 'independently' && ''}
              {meal === 'before' && 'przed posiłkiem'}
              {meal === 'after' && 'po posiłku'}
            </Text>
            <Text>Pozostałe dawki: {dosage}</Text>
          </View>
          <Text className="font-bold text-lg">{time.slice(0, 5)}</Text>
        </View>
      </Pressable>
    </Link>
  );
};
