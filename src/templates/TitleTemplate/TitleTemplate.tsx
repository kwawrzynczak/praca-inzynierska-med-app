import { StyledTitle } from '@components';
import { View } from 'react-native';

interface TitleTemplateProps {
  title: string;
  children: React.ReactNode;
}

export const TitleTemplate = ({ title, children }: TitleTemplateProps) => {
  return (
    <View className="h-screen w-screen flex-1 items-center justify-center bg-primary">
      <View>
        <StyledTitle>{title}</StyledTitle>
      </View>

      <View>{children}</View>
    </View>
  );
};
