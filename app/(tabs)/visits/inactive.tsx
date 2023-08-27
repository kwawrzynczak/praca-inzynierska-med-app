/* eslint-disable react/no-unstable-nested-components */
import { Fragment, useState } from 'react';
import { FlatList, Pressable, SafeAreaView, View } from 'react-native';
import { Button, FAB, Text, VisitsListElement } from '@components';
import { Link } from 'expo-router';
import { twMerge } from 'tailwind-merge';

const elements = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }];
const InactiveScreen = () => {
  return (
    <View className="flex-1 items-center bg-background">
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        className="grow"
        contentContainerStyle={{ padding: 20, gap: 20 }}
        columnWrapperStyle={{ gap: 20 }}
        data={elements}
        renderItem={({ item }) => (
          <View className="flex-col">
            <Text className="text-center text-red-500">Zakończona</Text>
            <VisitsListElement key={item.id} id={`${item.id}`} />
          </View>
        )}
      />
      <FAB type="add" className="absolute bottom-6 right-6" />
    </View>
  );
};

export default InactiveScreen;
