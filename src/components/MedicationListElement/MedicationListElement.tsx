/* eslint-disable tailwindcss/enforces-shorthand */
/* eslint-disable react/jsx-props-no-spreading */
import { Animated, Pressable, PressableProps, View } from 'react-native';
import { Text } from '@components/Text';
import { useAnimation } from '@hooks';
import Pills from '@images/Pills';
import { Link } from 'expo-router';
import { twMerge } from 'tailwind-merge';

interface ListElementProps extends Omit<PressableProps, 'id'> {
  id: number;
  name: string;
  time: string;
  meal: string;
  dosage: string;
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
        className="mb-4 w-[360px] flex-row items-center justify-between rounded-lg bg-white px-4 py-3"
        onPressIn={fadeIn}
        onPressOut={fadeOut}
        {...rest}
      >
        <Animated.View
          className={twMerge('absolute left-0 top-0 h-24 w-[360px] rounded-lg bg-accent/10')}
          style={{ opacity: opacityValue }}
        />
        <View className="flex-row items-center gap-4">
          <View className="h-14 w-14 items-center justify-center rounded-2xl border border-lightblue bg-neutral-100">
            <Pills height={44} width={44} />
          </View>
          <View>
            <Text className="font-bold text-lg">{name}</Text>
            <Text className="text-base">{dosage}</Text>
            <Text className="font-semibold text-base">
              {time.slice(0, 5)} {meal === 'before' && 'przed posiłkiem'}
              {meal === 'after' && 'po posiłku'}
              {meal === 'with' && 'w trakcie posiłku'}
            </Text>
          </View>
        </View>
      </Pressable>
    </Link>
  );
};
