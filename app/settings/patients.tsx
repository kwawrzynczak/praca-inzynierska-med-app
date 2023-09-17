import React, { useState } from 'react';
import { Pressable, SafeAreaView, View } from 'react-native';
import { Button, Text } from '@components';
import { Link } from 'expo-router';

const PatientsScreen = () => {
  const [selected, setSelected] = useState(false);
  return (
    <SafeAreaView className="flex-1 items-center bg-background">
      <Text className="mt-6" variant="subtitle">
        Wybrany pacjent:
      </Text>
      <Text variant="title" className="mt-2">
        Jan Kowalski
      </Text>
      <Text className="mb-4 mt-6" variant="subtitle">
        Wszyscy pacjenci:
      </Text>
      <View className="flex-row flex-wrap justify-center gap-6">
        <Pressable
          onPress={() => {
            setSelected((prev) => !prev);
          }}
        >
          <View className="h-32 w-36 items-center justify-center rounded-lg bg-white shadow">
            <Text>Jan Kowalski</Text>
          </View>
          {selected && (
            <View className="absolute left-0 top-0 z-0 h-32 w-36 items-center justify-center rounded-lg bg-accent">
              <Text className="font-bold text-white">Wybierz</Text>
            </View>
          )}
        </Pressable>
        <View className="h-32 w-36 items-center justify-center rounded-lg bg-white shadow">
          <Text>Zofia Nowakowska</Text>
        </View>
        <View className="h-32 w-36 items-center justify-center rounded-lg bg-white shadow">
          <Text>Adam Lewiński</Text>
        </View>
        <View className="h-32 w-36 items-center justify-center rounded-lg bg-white shadow">
          <Text>Mateusz Przybył</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PatientsScreen;
