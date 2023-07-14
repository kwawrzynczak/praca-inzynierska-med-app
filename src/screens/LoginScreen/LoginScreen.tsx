import { StyledButton, StyledInput, StyledText } from '@components';
import { View } from 'react-native';
import { Formik } from 'formik';

export const LoginScreen = () => {
  return (
    <View className="flex-1 items-center justify-center bg-primary">
      <Formik initialValues={{ email: '' }} onSubmit={(values) => console.log(values)}>
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <StyledInput onChangeText={handleChange('email')} onBlur={handleBlur('email')} value={values.email} />
            <StyledText className="text-dark">Nie masz konta? Zarejestruj się!</StyledText>
            <StyledButton onPress={handleSubmit} className="mt-2">
              Zaloguj się
            </StyledButton>
          </View>
        )}
      </Formik>
    </View>
  );
};
