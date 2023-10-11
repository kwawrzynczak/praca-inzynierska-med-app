import {
  NunitoSans_200ExtraLight,
  NunitoSans_300Light,
  NunitoSans_400Regular,
  NunitoSans_600SemiBold,
  NunitoSans_700Bold,
  NunitoSans_800ExtraBold,
  NunitoSans_900Black,
  useFonts,
} from '@expo-google-fonts/nunito-sans';
import { Stack } from 'expo-router';

const StackLayout = () => {
  const [fontsLoaded] = useFonts({
    NunitoSans_200ExtraLight,
    NunitoSans_300Light,
    NunitoSans_400Regular,
    NunitoSans_600SemiBold,
    NunitoSans_700Bold,
    NunitoSans_800ExtraBold,
    NunitoSans_900Black,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="register" options={{ title: 'Rejestracja' }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="appointment/[id]" options={{ title: 'Powrót' }} />
      <Stack.Screen name="appointment/create" options={{ title: 'Dodaj wizytę' }} />
      <Stack.Screen name="medication/[id]" options={{ title: 'Powrót' }} />
      <Stack.Screen name="medication/create" options={{ title: 'Dodaj lekarstwo' }} />
      <Stack.Screen name="patient/[id]" options={{ headerShown: false }} />
    </Stack>
  );
};

export default StackLayout;
