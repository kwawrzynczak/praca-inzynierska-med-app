/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { Stack } from 'expo-router';

const MoreLayout = () => (
  <Stack>
    <Stack.Screen name="index" options={{ headerShown: false }} />
    <Stack.Screen name="patients" options={{ headerShown: false }} />
    <Stack.Screen name="doctors" options={{ headerShown: false }} />
    <Stack.Screen name="facilities" options={{ headerShown: false }} />
  </Stack>
);

export default MoreLayout;
