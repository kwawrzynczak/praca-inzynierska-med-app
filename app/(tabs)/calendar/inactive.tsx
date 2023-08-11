import { Fragment, useState } from 'react';
import { FlatList, Pressable, SafeAreaView, View } from 'react-native';
import { Button, CalendarListElement, Text } from '@components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
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
