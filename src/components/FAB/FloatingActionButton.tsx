/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable tailwindcss/no-custom-classname */
import { Animated, Pressable, type PressableProps } from 'react-native';
import { Text } from '@components/Text';
import { FontAwesome5 } from '@expo/vector-icons';
import { useAnimation } from '@hooks';
import clsx from 'clsx';

interface StyledButtonProps extends PressableProps {
  children?: React.ReactNode;
  className?: string;
  onPress?: () => void;
}

export const FloatingActionButton = ({ children, className, ...rest }: StyledButtonProps) => {
  const { opacityValue, fadeIn, fadeOut } = useAnimation();

  return (
    <Pressable
      onPressIn={fadeIn}
      onPressOut={fadeOut}
      className={clsx('z-0 h-12 w-12 items-center justify-center rounded-full bg-accent', className)}
      {...rest}
    >
      <Animated.View
        className={clsx('absolute left-0 top-0 h-12 w-12 rounded-full bg-blue-600/60')}
        style={{ opacity: opacityValue }}
      />
      <FontAwesome5 name="plus" color="white" size={25} />
    </Pressable>
  );
};
