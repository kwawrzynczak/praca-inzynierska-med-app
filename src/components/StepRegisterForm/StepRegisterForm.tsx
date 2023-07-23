import { Pressable, View } from 'react-native';
import { Button, Input, Text } from '@components';
import { Link } from 'expo-router';
import { Formik } from 'formik';

export const StepRegisterForm = () => {
  return (
    <View>
      <Formik
        initialValues={{ email: '', password: '', validatePassword: '' }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <View>
              <Input
                title="Adres e-mail"
                placeholder="uzytkownik@example.com"
                placeholderTextColor="#666"
                textContentType="emailAddress"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                keyboardType="email-address"
                value={values.email}
              />

              <Input
                title="Hasło"
                placeholder="**********"
                placeholderTextColor="#666"
                textContentType="password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry
              />
              <Input
                title="Potwierdź hasło"
                placeholder="**********"
                placeholderTextColor="#666"
                textContentType="password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.validatePassword}
                secureTextEntry
              />
              <View className="flex-row justify-center">
                <Text className="font-medium text-secondary">Nie pamiętasz hasła? </Text>
                <Link href="/" asChild>
                  <Pressable>
                    <Text className="font-bold text-accent">Zresetuj hasło</Text>
                  </Pressable>
                </Link>
              </View>
            </View>
            <Button onPress={handleSubmit} className="">
              Zaloguj się
            </Button>
            <Link href="/" asChild>
              <Pressable className="mt-3 flex flex-row justify-center">
                <Text className="font-medium text-secondary">Nie masz konta? </Text>
                <Text className="font-bold text-accent">Zarejestruj się!</Text>
              </Pressable>
            </Link>
          </View>
        )}
      </Formik>
    </View>
  );
};
