import { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { Button, FAB, Input, Text } from '@components';
import { Link } from 'expo-router';

interface Patient {
  name: string;
  email: string;
}

const patientsList = [
  { email: 'jurek@gmail.com', name: 'Jurek', id: 1 },
  { email: 'marek@gmail.com', name: 'marek', id: 2 },
];

const PatientsScreen = () => {
  const generateCode = () => {
    return Math.floor(Math.random() * (999999999 - 100000000 + 1) + 100000000);
  };
  return (
    <View className="flex-1 items-center justify-center bg-background">
      {/* <Text variant="subtitle" className="my-5">
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
          <Link
            asChild
            href={{
              pathname: `patient/${item.id}`,
            }}
          >
            <View className="flex w-80 flex-row items-center justify-between rounded-xl border-2 border-accent bg-white p-3">
              <View>
                <Text>{item.name}</Text>
                <Text>{item.email}</Text>
              </View>

              <View className="flex-row gap-x-2">
                <FAB type="custom" />
                <FAB type="delete" />
              </View>
            </View>
          </Link>
        )}
      /> */}
      <Text className="text-3xl text-accent" variant="title">
        {generateCode()}
      </Text>
      <Text variant="subtitle">Podaj opiekunowi swój kod, aby zapewnić mu dostęp do Twojej dokumentacji medycznej</Text>
    </View>
  );
};

export default PatientsScreen;
