import clsx from 'clsx';
import { Text } from 'react-native';

interface StyledTitleProps {
  children?: string;
}

export const StyledTitle = ({ children }: StyledTitleProps) => {
  return <Text className="font-semibold text-2xl tracking-wider">{children}</Text>;
};
