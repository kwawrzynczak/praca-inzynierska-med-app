/* eslint-disable react/style-prop-object */
import { Button, StyledText } from '@components';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { StartScreen } from '@screens';
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

const App = () => {
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
    // <View className="flex-1 items-center justify-center bg-primary">
    //   <Button>Mam już konto</Button>
    //   <StyledText className="text-lg text-light">Tekst</StyledText>
    //   <StatusBar style="auto" />
    // </View>
    <StartScreen />
  );
};

export default App;
