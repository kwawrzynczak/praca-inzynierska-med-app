import { Button, StyledText } from '@components';
import { View } from 'react-native';

export const StartScreen = () => {
  return (
    <View className="flex-1 items-center justify-center bg-primary">
      <StyledText className="text-xl text-dark">Zaloguj się</StyledText>
      <Button variant="secondary">Jestem podopiecznym</Button>
      <Button variant="secondary" className="mt-3">
        Jestem opiekunem
      </Button>
      <Button className="mt-20">Mam już konto</Button>
    </View>
  );
};
