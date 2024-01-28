import { useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { Button, FAB, Input, Text } from '@components';
import { useUserStore } from '@stores/useUserStore';
import { twMerge } from 'tailwind-merge';

// interface Patient {
//   name: string;
//   email: string;
// }

const patientsList = [
  { email: 'jurek@gmail.com', name: 'Jurek', id: 1, code: 123456789 },
  { email: 'marek@gmail.com', name: 'Marek', id: 2, code: 123456780 },
];

const PatientsScreen = () => {
  const code = useUserStore((state) => state.userCode);
  const setNewUser = useUserStore((state) => state.setNewUser);

  useEffect(() => {
    setNewUser(patientsList[0].code);
  }, [setNewUser]);

  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text variant="subtitle" className="my-5">
        Dodaj podopiecznego
      </Text>
      <Input placeholder="Podaj kod podopiecznego" />
      <Button>Dodaj podopiecznego</Button>
      <Text variant="subtitle" className="my-5">
        Twoi podopieczni
      </Text>
      <FlatList
        className="grow"
        contentContainerStyle={{ gap: 12, justifyContent: 'center' }}
        data={patientsList}
        renderItem={({ item }) => (
          <View
            className={twMerge(
              'flex w-80 flex-row items-center justify-between rounded-xl border-2 border-white bg-white p-3',
              code === item.code && 'border-accent',
            )}
          >
            <View>
              <Text className="text-base">{item.name}</Text>
              <Text className="text-base">{item.email}</Text>
            </View>

            <View className="flex-row gap-x-2">
              {code !== item.code && <FAB type="add" onPress={() => setNewUser(item.code)} />}
              <FAB type="delete" />
            </View>
          </View>
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
