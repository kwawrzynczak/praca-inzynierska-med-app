/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable tailwindcss/no-custom-classname */
import { Animated, Pressable, type PressableProps } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useAnimation } from '@hooks';
import { twMerge } from 'tailwind-merge';

interface StyledButtonProps extends PressableProps {
  className?: string;
  type?: 'add' | 'edit' | 'delete' | 'custom';
  onPress?: () => void;
}

export const FAB = ({ className, type, ...rest }: StyledButtonProps) => {
  const { opacityValue, fadeIn, fadeOut } = useAnimation();

  return (
    <Pressable
      onPressIn={fadeIn}
      onPressOut={fadeOut}
      className={twMerge(
        'z-0 h-12 w-12 items-center justify-center rounded-full bg-accent',
        type === 'delete' && 'bg-red',
        className,
      )}
      {...rest}
    >
      <Animated.View
        className={twMerge('absolute left-0 top-0 h-12 w-12 rounded-full bg-press', type === 'delete' && 'bg-darkred')}
        style={{ opacity: opacityValue }}
      />
      {type === 'add' && <FontAwesome5 name="plus" color="white" size={24} />}
      {type === 'edit' && <FontAwesome5 name="pen" color="white" size={22} />}
      {type === 'delete' && <FontAwesome5 name="trash" color="white" size={22} />}
    </Pressable>
  );
};
