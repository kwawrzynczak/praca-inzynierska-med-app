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
      'font-normal text-black',
      variant === 'title' && 'font-extrabold text-xl',
      variant === 'subtitle' && 'font-semibold text-lg',
      className,
    )}
    {...rest}
  />
);
