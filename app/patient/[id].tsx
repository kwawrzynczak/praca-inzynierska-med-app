import { useState } from 'react';
import { Pressable, SafeAreaView, View } from 'react-native';
import { Text } from '@components';
import { useLocalSearchParams } from 'expo-router';
import { twMerge } from 'tailwind-merge';

const PatientScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [fullscreen, setFullscreen] = useState(false);

  return (
    <SafeAreaView className="bg-white">
      <View className="mb-2 flex h-1/4 items-center justify-center">
        <View className="h-52 w-52 rounded-full bg-secondary" />
        <Text variant="title" className="mt-2 text-2xl">
          Patients Name
        </Text>
      </View>

      <View className="h-full bg-background">
        <Text>{id}</Text>
      </View>
    </SafeAreaView>
  );
};

export default PatientScreen;
