/* eslint-disable tailwindcss/no-custom-classname */
import { StyledText } from '@components/StyledText';
import clsx from 'clsx';
import { Pressable, Animated } from 'react-native';
import { useAnimation } from '@hooks';
import { AnimationHook } from '@types';

interface ButtonProps {
  children: string;
  className?: string;
  variant?: 'primary' | 'secondary';
  onPress?: () => void;
}

export const Button = ({ children, className, variant = 'primary', onPress }: ButtonProps) => {
  const { opacityValue, fadeIn, fadeOut }: AnimationHook = useAnimation();
  return (
    <Pressable
      onPressIn={fadeIn}
      onPressOut={fadeOut}
      className={clsx(
        'h-14 w-[300px] flex-row items-center justify-center rounded-xl px-6 shadow',
        className,
        variant === 'primary' && 'bg-accent',
        variant === 'secondary' && 'bg-white',
      )}
      onPress={onPress}
    >
      <Animated.View
        className={clsx(
          'absolute left-0 top-0 h-full w-[300px] rounded-xl',
          variant === 'primary' && 'bg-[#6396e2]',
          variant === 'secondary' && 'bg-slate-200',
        )}
        style={{ opacity: opacityValue }}
      />
      <StyledText
        className={clsx(
          'font-semibold text-lg tracking-wider text-white',
          variant === 'primary' && 'text-white',
          variant === 'secondary' && 'text-dark',
        )}
      >
        {children}
      </StyledText>
    </Pressable>
  );
};
