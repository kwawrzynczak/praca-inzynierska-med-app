/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable tailwindcss/no-custom-classname */
import { Animated, Pressable, type PressableProps } from 'react-native';
import { Text } from '@components/Text';
import { useAnimation } from '@hooks';
import { twMerge } from 'tailwind-merge';

interface StyledButtonProps extends PressableProps {
  children?: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
  size?: 'small';
}

export const Button = ({ children, className, variant = 'primary', size, ...rest }: StyledButtonProps) => {
  const { opacityValue, fadeIn, fadeOut } = useAnimation();

  return (
    <Pressable
      onPressIn={fadeIn}
      onPressOut={fadeOut}
      className={twMerge(
        'h-12 w-72 flex-row items-center justify-center self-center rounded-xl px-6',
        className,
        variant === 'primary' && 'bg-accent shadow-zinc-400',
        variant === 'secondary' && 'bg-white shadow-zinc-300',
        size === 'small' && 'w-40',
      )}
      {...rest}
    >
      <Animated.View
        className={twMerge(
          'absolute left-0 top-0 h-full w-72 rounded-xl',
          variant === 'primary' && 'bg-press',
          variant === 'secondary' && 'bg-press/30',
          size === 'small' && 'w-40',
        )}
        style={{ opacity: opacityValue }}
      />
      <Text
        className={twMerge(
          'font-bold tracking-wider',
          variant === 'primary' && 'text-white',
          variant === 'secondary' && 'text-secondary',
        )}
      >
        {children}
      </Text>
    </Pressable>
  );
};
