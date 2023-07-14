import { Text } from 'react-native';

interface StyledTitleProps {
  children?: string;
}

export const StyledTitle = ({ children }: StyledTitleProps) => {
  return <Text className="text-center font-semibold text-2xl tracking-wider">{children}</Text>;
};
