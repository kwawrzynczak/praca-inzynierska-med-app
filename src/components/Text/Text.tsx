/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable react/jsx-props-no-spreading */
import { Text as ReactNativeText, type TextProps } from 'react-native';
import { twMerge } from 'tailwind-merge';

interface StyledTextProps extends TextProps {
  className?: string;
}

export const Text = ({ className, ...rest }: StyledTextProps) => (
  <ReactNativeText className={twMerge(`font-normal`, className)} {...rest} />
);
