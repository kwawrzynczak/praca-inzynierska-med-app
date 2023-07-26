import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { Button } from '@components';
import { Link } from 'expo-router';

const SettingsScreen = () => {
  return (
    <SafeAreaView className="flex-1 items-center bg-background">
      <Text>settings</Text>
      <Link href="/" asChild>
        <Button>Wyloguj się</Button>
      </Link>
    </SafeAreaView>
  );
};

export default SettingsScreen;
