import clsx from 'clsx';
import { Text, Pressable } from 'react-native';

interface ButtonProps {
  children: string;
  variant?: 'primary' | 'secondary';
}

export const Button = ({ children, variant = 'primary' }: ButtonProps) => {
  return (
    <Pressable
      className={clsx(
        'h-12 flex-row items-center justify-center rounded-xl px-6',
        variant === 'primary' && 'bg-accent',
        variant === 'secondary' && 'bg-white',
      )}
    >
      <Text
        className={clsx(
          'font-semibold text-lg tracking-wider text-white',
          variant === 'primary' && 'text-white',
          variant === 'secondary' && 'text-dark',
        )}
      >
        {children}
      </Text>
    </Pressable>
  );
};
