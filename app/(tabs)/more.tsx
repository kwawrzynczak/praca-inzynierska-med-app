import React from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Text } from '@components';
import { Link } from 'expo-router';

const MoreScreen = () => {
  return (
    <SafeAreaView className="flex-1 items-center bg-background">
      <Text variant="title" className="mt-12">
        Więcej
      </Text>

      <Link href="/" asChild>
        <Button>Wyloguj się</Button>
      </Link>
    </SafeAreaView>
  );
};

export default MoreScreen;
