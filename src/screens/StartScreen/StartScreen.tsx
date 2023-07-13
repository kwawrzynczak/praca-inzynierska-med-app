import { Button, StyledText } from '@components';
import { useState } from 'react';
import { View } from 'react-native';
import { CalendarIcon } from 'react-native-heroicons/solid';

export const StartScreen = () => {
  const [page, setPage] = useState('1');

  return (
    <>
      {page === '1' && (
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
            <Button className="mt-20" onPress={() => setPage('2')}>
              Mam już konto
            </Button>
          </View>
        </>
      )}
      {page === '2' && (
        <View className="flex-1 items-center justify-center bg-primary">
          <StyledText className="text-dark">Nie masz konta? Zarejestruj się!</StyledText>
          <Button className="mt-2" onPress={() => setPage('1')}>
            Zaloguj się
          </Button>
        </View>
      )}
    </>
  );
};
