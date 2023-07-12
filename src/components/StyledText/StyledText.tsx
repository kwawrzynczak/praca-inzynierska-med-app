/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable react/jsx-props-no-spreading */
import clsx from 'clsx';
import { Text as ReactNativeText, type TextProps } from 'react-native';

interface StyledTextProps extends TextProps {
  weight?: string;
  className?: string;
}

export const StyledText = ({ weight = 'normal', className, children, ...rest }: StyledTextProps) => (
  <ReactNativeText className={clsx(`font-${weight}`, className)} {...rest}>
    {children}
  </ReactNativeText>
);
