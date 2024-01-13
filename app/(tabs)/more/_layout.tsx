/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { Stack } from 'expo-router';

const MoreLayout = () => (
  <Stack>
    <Stack.Screen name="index" options={{ headerShown: false }} />
    <Stack.Screen name="patients" options={{ headerTitle: 'Pacjenci', headerBackVisible: true }} />
    <Stack.Screen name="doctors" options={{ headerTitle: 'Lekarze', headerBackVisible: true }} />
    <Stack.Screen name="facilities" options={{ headerTitle: 'Placówki', headerBackVisible: true }} />
  </Stack>
);

export default MoreLayout;
