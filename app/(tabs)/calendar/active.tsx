import { Fragment, useState } from 'react';
import { FlatList, Pressable, SafeAreaView, View } from 'react-native';
import { Button, CalendarListElement, Text } from '@components';
import { Link } from 'expo-router';
import { twMerge } from 'tailwind-merge';

const ActiveScreen = () => {
  return (
    <View>
      <Text>active</Text>
    </View>
  );
};

export default ActiveScreen;