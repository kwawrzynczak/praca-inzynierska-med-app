import { StyledButton, StyledInput, StyledText, StyledTitle } from '@components';
import { Pressable, View } from 'react-native';
import { Formik } from 'formik';
import { TitleTemplate } from '@templates';
import { Link } from 'expo-router';

const LoginScreen = () => {
  return (
    <TitleTemplate title="Logowanie">
      <Formik initialValues={{ email: '', password: '' }} onSubmit={(values) => console.log(values)}>
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View className="mt-32">
            <StyledInput
              title="Twój adres email"
              textContentType="emailAddress"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              keyboardType="email-address"
              value={values.email}
            />

            <StyledInput
              title="Twoje hasło"
              textContentType="password"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry
            />

            <Link href="/" asChild>
              <Pressable>
                <StyledText className="bg-red-500 text-center font-medium text-dark">
                  Nie masz konta? Zarejestruj się!
                </StyledText>
              </Pressable>
            </Link>
            <StyledButton onPress={handleSubmit} className="mt-2">
              Zaloguj się
            </StyledButton>
          </View>
        )}
      </Formik>
    </TitleTemplate>
  );
};

export default LoginScreen;
