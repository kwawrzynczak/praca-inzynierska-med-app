import { StyledText, Button } from '@components';
import { View } from 'react-native';
import { CalendarIcon } from 'react-native-heroicons/solid';

export const StartScreen = () => {
  return (
    <>
      <View className="z-10 bg-primary">
        <View className="relative top-0 h-[380px] w-screen rounded-b-[90px] bg-secondary" />
        <View className="-top-14 flex w-full items-center justify-center">
          <View className="flex h-28 w-28 items-center justify-center rounded-full bg-accent">
            <CalendarIcon size={85} color="white" />
          </View>
        </View>
      </View>
      <View className="flex-1 items-center bg-primary">
        <Button variant="secondary">Jestem podopiecznym</Button>
        <Button variant="secondary" className="mt-3">
          Jestem opiekunem
        </Button>
        <Button className="mt-20">Mam już konto</Button>
      </View>
    </>
  );
};
