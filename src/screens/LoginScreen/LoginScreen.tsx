import { Button, StyledText } from '@components';
import { View } from 'react-native';

export const LoginScreen = () => {
  return (
    <View className="flex-1 items-center justify-center bg-primary">
      <StyledText className="text-dark">Nie masz konta? Zarejestruj się!</StyledText>
      <Button className="mt-2">Zaloguj się</Button>
    </View>
  );
};
