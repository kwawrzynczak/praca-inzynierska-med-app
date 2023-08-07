import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { Button } from '@components';
import { Link } from 'expo-router';

const SettingsScreen = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-background">
      <Text className="mt-12 font-bold text-2xl text-accent">Ustawienia</Text>

      <Link href="/" asChild>
        <Button>Wyloguj się</Button>
      </Link>
    </SafeAreaView>
  );
};

export default SettingsScreen;
