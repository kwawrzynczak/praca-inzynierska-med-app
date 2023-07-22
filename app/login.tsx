import { Pressable, SafeAreaView, View } from 'react-native';
import { Input, StyledButton, Text } from '@components';
import { Link } from 'expo-router';
import { Formik } from 'formik';

const LoginScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <Formik initialValues={{ email: '', password: '' }} onSubmit={(values) => console.log(values)}>
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View className="mt-32">
            <Input
              title="Twój adres email"
              textContentType="emailAddress"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              keyboardType="email-address"
              value={values.email}
            />

            <Input
              title="Twoje hasło"
              textContentType="password"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry
            />

            <Link href="/" asChild>
              <Pressable>
                <Text className="bg-red-500 text-center font-medium text-dark">Nie masz konta? Zarejestruj się!</Text>
              </Pressable>
            </Link>
            <StyledButton onPress={handleSubmit} className="mt-2">
              Zaloguj się
            </StyledButton>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default LoginScreen;
