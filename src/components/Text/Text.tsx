/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable react/jsx-props-no-spreading */
import { Text as ReactNativeText, type TextProps } from 'react-native';
import clsx from 'clsx';

interface StyledTextProps extends TextProps {
  className?: string;
}

export const Text = ({ className, children, ...rest }: StyledTextProps) => (
  <ReactNativeText className={clsx(`font-normal`, className)} {...rest}>
    {children}
  </ReactNativeText>
);
