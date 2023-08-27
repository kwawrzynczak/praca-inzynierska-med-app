/* eslint-disable react/no-unstable-nested-components */
import { Fragment, useState } from 'react';
import { FlatList, Pressable, SafeAreaView, View } from 'react-native';
import { Button, Text, VisitsListElement } from '@components';
import { Link } from 'expo-router';
import { twMerge } from 'tailwind-merge';

const elements = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }];
const ActiveScreen = () => {
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
          <Link
            asChild
            href={{
              pathname: 'doctor/[id]',
              params: { id: item.id },
            }}
          >
            <Pressable>
              <VisitsListElement key={item.id} id={`${item.id}`} />
            </Pressable>
          </Link>
        )}
      />
    </View>
  );
};

export default ActiveScreen;
