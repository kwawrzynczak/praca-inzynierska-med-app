/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable tailwindcss/no-custom-classname */
import { Animated, Pressable, type PressableProps } from 'react-native';
import { Text } from '@components/Text';
import { useAnimation } from '@hooks';
import clsx from 'clsx';

interface StyledButtonProps extends PressableProps {
  children?: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
  onPress?: () => void;
}

export const StyledButton = ({ children, className, variant = 'primary', ...rest }: StyledButtonProps) => {
  const { opacityValue, fadeIn, fadeOut } = useAnimation();

  return (
    <Pressable
      onPressIn={fadeIn}
      onPressOut={fadeOut}
      className={clsx(
        'h-12 w-[300px] flex-row items-center justify-center self-center rounded-xl px-6 shadow-sm',
        className,
        variant === 'primary' && 'bg-accent shadow-zinc-400',
        variant === 'secondary' && 'bg-white shadow-zinc-300',
      )}
      {...rest}
    >
      <Animated.View
        className={clsx(
          'absolute left-0 top-0 h-full w-[300px] rounded-xl',
          variant === 'primary' && 'bg-[#7297ce]',
          variant === 'secondary' && 'bg-slate-200',
        )}
        style={{ opacity: opacityValue }}
      />
      <Text
        className={clsx(
          'font-medium tracking-wider text-white',
          variant === 'primary' && 'text-white',
          variant === 'secondary' && 'text-dark',
        )}
      >
        {children}
      </Text>
    </Pressable>
  );
};
