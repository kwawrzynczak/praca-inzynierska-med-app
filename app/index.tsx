import { StyledButton } from '@components';
import { Link } from 'expo-router';
import {
  Poppins_100Thin,
  Poppins_200ExtraLight,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  Poppins_900Black,
  useFonts,
} from '@expo-google-fonts/poppins';
import { View } from 'react-native';
import { CalendarIcon } from 'react-native-heroicons/solid';

const StartScreen = () => {
  const [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_200ExtraLight,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    Poppins_900Black,
  });

  if (!fontsLoaded) {
    return null;
  }
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
        <StyledButton variant="secondary">Jestem podopiecznym</StyledButton>
        <StyledButton variant="secondary" className="mt-3">
          Jestem opiekunem
        </StyledButton>
        <StyledButton className="mt-20">
          <Link className="h-12 w-[300px]" href="/login">
            Wróć
          </Link>
        </StyledButton>
      </View>
    </>
  );
};

export default StartScreen;
