import { View } from 'react-native';
import { Input } from '@components/Input';

export const StepRegisterForm = () => {
  return (
    <View>
      <View>
        <View>
          <Input
            title="Adres e-mail"
            placeholder="uzytkownik@example.com"
            placeholderTextColor="#666"
            textContentType="emailAddress"
            keyboardType="email-address"
          />

          <Input
            title="Hasło"
            placeholder="**********"
            placeholderTextColor="#666"
            textContentType="password"
            secureTextEntry
          />
          <Input
            title="Potwierdź hasło"
            placeholder="**********"
            placeholderTextColor="#666"
            textContentType="password"
            secureTextEntry
          />
        </View>
      </View>
    </View>
  );
};
