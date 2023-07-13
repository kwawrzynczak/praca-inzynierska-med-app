import { StyledText } from '@components/StyledText';
import clsx from 'clsx';
import { Pressable } from 'react-native';

interface ButtonProps {
  children: string;
  className?: string;
  variant?: 'primary' | 'secondary';
  onPress?: () => void;
}

export const Button = ({ children, className, variant = 'primary', onPress }: ButtonProps) => {
  return (
    <Pressable
      className={clsx(
        'h-14 w-[300px] flex-row items-center justify-center rounded-xl px-6',
        className,
        variant === 'primary' && 'bg-accent',
        variant === 'secondary' && 'bg-white',
      )}
      onPress={onPress}
    >
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
