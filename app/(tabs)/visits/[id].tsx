/* eslint-disable react/no-unstable-nested-components */
import { Fragment, useState } from 'react';
import { FlatList, Pressable, SafeAreaView, View } from 'react-native';
import { Button, Text, VisitsListElement } from '@components';
import { Link, useLocalSearchParams } from 'expo-router';
import { twMerge } from 'tailwind-merge';

interface VisitProps {
  id: number;
}

const VisitScreen = () => {
  const { id } = useLocalSearchParams();
  return (
    <View className="flex-1 items-center bg-background">
      <Text>{id}</Text>
    </View>
  );
};

export default VisitScreen;
