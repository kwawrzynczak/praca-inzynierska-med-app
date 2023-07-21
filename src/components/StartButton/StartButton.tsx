/* eslint-disable react/jsx-props-no-spreading */
import { StyledText } from '@components/StyledText';
import clsx from 'clsx';
import { Pressable, Animated, type PressableProps } from 'react-native';
import { useAnimation } from '@hooks';
import { AnimationHook } from '@types';
import { useState } from 'react';

interface ButtonProps extends PressableProps {
  children?: React.ReactNode;
  className?: string;
  onPress?: () => void;
}

export const StartButton = ({ children, className, ...rest }: ButtonProps) => {
  const { opacityValue, fadeIn, fadeOut }: AnimationHook = useAnimation();
  const [active, setActive] = useState(true);
  return (
    <Pressable
      onPressIn={fadeIn}
      onPress={() => setActive(true)}
      onPressOut={fadeOut}
      className={clsx(
        'h-14 w-[300px] flex-row items-center justify-center self-center rounded-xl px-6 shadow-sm',
        className,
      )}
      {...rest}
    >
      <Animated.View
        className={clsx('absolute left-0 top-0 h-full w-[300px] rounded-xl')}
        style={{ opacity: opacityValue }}
      />
      <StyledText className={clsx('font-medium tracking-wider text-white')}>{children}</StyledText>
    </Pressable>
  );
};
