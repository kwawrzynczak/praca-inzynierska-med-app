/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable react/jsx-props-no-spreading */
import { Text as ReactNativeText, type TextProps } from 'react-native';
import { twMerge } from 'tailwind-merge';

interface StyledTextProps extends TextProps {
  className?: string;
  variant?: 'title' | 'subtitle';
}

export const Text = ({ className, variant, ...rest }: StyledTextProps) => (
  <ReactNativeText
    className={twMerge(
      'font-normal text-secondary',
      variant === 'title' && 'font-bold text-2xl text-accent',
      variant === 'subtitle' && 'font-medium text-lg text-secondary',
      className,
    )}
    {...rest}
  />
);
