import React from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Text } from '@components';
import { Link } from 'expo-router';

const SettingsScreen = () => {
  return (
    <SafeAreaView className="flex-1 items-center bg-background">
      <Text variant="title" className="mt-12">
        Ustawienia
      </Text>
    </SafeAreaView>
  );
};

export default SettingsScreen;
