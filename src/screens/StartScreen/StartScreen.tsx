import { StyledButton, StyledText, StyledInput, StyledTitle } from '@components';
import { useState } from 'react';
import { Pressable, View } from 'react-native';
import { CalendarIcon } from 'react-native-heroicons/solid';
import { LoginScreen } from '@screens';
import { Formik } from 'formik';

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
            <StyledButton variant="secondary">Jestem podopiecznym</StyledButton>
            <StyledButton variant="secondary" className="mt-3">
              Jestem opiekunem
            </StyledButton>
            <StyledButton className="mt-20" onPress={() => setPage('2')}>
              Mam już konto
            </StyledButton>
          </View>
        </>
      )}
      {page === '2' && <LoginScreen />}
    </>
  );
};
