import { Pressable, SafeAreaView, View } from 'react-native';
import { Button, Input, Text } from '@components';
import { Link } from 'expo-router';
import { Formik } from 'formik';

const RegisterScreen = () => {
  return (
    <SafeAreaView className="flex-1 items-center bg-background">
      <Text className="mt-12 font-bold text-2xl text-accent">Zarejestruj się!</Text>
      <Text className="mt-4 text-center font-medium text-lg text-secondary">
        Zaloguj się, aby móc zarządzać swoją dokumentacją medyczną.
      </Text>
    </SafeAreaView>
  );
};

export default RegisterScreen;
