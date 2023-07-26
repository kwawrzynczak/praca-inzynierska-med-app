import { Pressable, View } from 'react-native';
import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { Text } from '@components/Text';
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
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};
