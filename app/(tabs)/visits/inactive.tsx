import { Fragment, useState } from 'react';
import { FlatList, Pressable, SafeAreaView, View } from 'react-native';
import { Button, Text, VisitsListElement } from '@components';
import { Link } from 'expo-router';
import { twMerge } from 'tailwind-merge';

const InactiveScreen = () => {
  return (
    <View>
      <Text>Inactive</Text>
    </View>
  );
};

export default InactiveScreen;
