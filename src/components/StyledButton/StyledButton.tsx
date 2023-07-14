/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable tailwindcss/no-custom-classname */
import { StyledText } from '@components/StyledText';
import clsx from 'clsx';
import { Pressable, Animated, type PressableProps } from 'react-native';
import { useAnimation } from '@hooks';
import { AnimationHook } from '@types';

interface ButtonProps extends PressableProps {
  children?: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
  onPress?: () => void;
}

export const StyledButton = ({ children, className, variant = 'primary', ...rest }: ButtonProps) => {
  const { opacityValue, fadeIn, fadeOut }: AnimationHook = useAnimation();
  return (
    <Pressable
      onPressIn={fadeIn}
      onPressOut={fadeOut}
      className={clsx(
        'h-14 w-[300px] flex-row items-center justify-center rounded-xl px-6 shadow-sm',
        className,
        variant === 'primary' && 'bg-accent shadow-zinc-400',
        variant === 'secondary' && 'bg-white shadow-zinc-300',
      )}
      {...rest}
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
          'font-medium text-lg tracking-wider text-white',
          variant === 'primary' && 'text-white',
          variant === 'secondary' && 'text-dark',
        )}
      >
        {children}
      </StyledText>
    </Pressable>
  );
};
