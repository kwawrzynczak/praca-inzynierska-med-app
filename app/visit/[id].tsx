/* eslint-disable react/no-unstable-nested-components */
import { Fragment, useState } from 'react';
import { FlatList, Pressable, SafeAreaView, View } from 'react-native';
import { Button, FAB, Text, VisitsListElement } from '@components';
import { Link, useLocalSearchParams } from 'expo-router';
import { twMerge } from 'tailwind-merge';

const VisitScreen = () => {
  const { id } = useLocalSearchParams();
  return (
    <View className="flex-1 bg-background">
      <FAB type="edit" />
      <FAB type="delete" />
      <Text variant="title">Kardiolog</Text>
      <Text variant="subtitle">lek. med. Jan Nowak</Text>
    </View>
  );
};

export default VisitScreen;
