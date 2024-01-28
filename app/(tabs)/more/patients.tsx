// import { useEffect, useState } from 'react';
import { FlatList, Pressable, View } from 'react-native';
import { Button, FAB, Input, Text } from '@components';
import { Link } from 'expo-router';
import { create } from 'zustand';

// interface Patient {
//   name: string;
//   email: string;
// }

interface UserState {
  userCode: number;
  setNewUser: (code: number) => void;
}

const useUserStore = create<UserState>()((set) => ({
  userCode: 0,
  setNewUser: (code) => set(() => ({ userCode: code })),
}));

const patientsList = [
  { email: 'jurek@gmail.com', name: 'Jurek', id: 1, code: 123456789 },
  { email: 'marek@gmail.com', name: 'marek', id: 2, code: 123456780 },
];

const PatientsScreen = () => {
  const code = useUserStore((state) => state.userCode);
  const setNewUser = useUserStore((state) => state.setNewUser);

  console.log(code);

  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text variant="subtitle" className="my-5">
        Dodaj podopiecznego
      </Text>
      <Input placeholder="uzytkownik@example.com" />
      <Button>Wyślij</Button>
      <Text variant="subtitle" className="my-5">
        Twoi podopieczni
      </Text>
      <FlatList
        className="grow"
        contentContainerStyle={{ gap: 12, justifyContent: 'center' }}
        data={patientsList}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => setNewUser(item.code)}
            className="flex w-80 flex-row items-center justify-between rounded-xl border-2 border-accent bg-white p-3"
          >
            <View>
              <Text>{item.name}</Text>
              <Text>{item.email}</Text>
            </View>

            <View className="flex-row gap-x-2">
              <FAB type="custom" />
              <FAB type="delete" />
            </View>
          </Pressable>
        )}
      />
      {/* <Text className="text-3xl text-accent" variant="title">
        {generateCode()}
      </Text>
      <Text variant="subtitle">Podaj opiekunowi swój kod, aby zapewnić mu dostęp do Twojej dokumentacji medycznej</Text> */}
    </View>
  );
};

export default PatientsScreen;

// const generateCode = () => {
//   return Math.floor(Math.random() * (999999999 - 100000000 + 1) + 100000000);
// };
