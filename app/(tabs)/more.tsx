import React from 'react';
import { Pressable, SafeAreaView, View } from 'react-native';
import { Button, SettingsTabElement, Text } from '@components';
import { FontAwesome5 } from '@expo/vector-icons';
import { Link } from 'expo-router';

const tabs = [
  { name: 'Leki', path: '/leki', icon: 'pills' },
  { name: 'Wizyty', path: '/wizyty', icon: 'calendar-alt' },
  { name: 'Lekarze', path: '/lekarze', icon: 'user-md' },
  { name: 'Placówki', path: '/placowki', icon: 'hospital' },
];

const MoreScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-background ">
      <SettingsTabElement className="mb-6 border-t-2" name="Pacjenci" path="/pacjenci" icon="wheelchair" />

      <View>
        {tabs.map(({ name, path, icon }, index) => (
          <SettingsTabElement
            className={index === 0 ? 'border-t-2' : ''}
            key={name}
            name={name}
            path={path}
            icon={icon}
          />
        ))}
      </View>

      <SettingsTabElement className="mt-6 border-t-2" name="Ustawienia" path="/settings" icon="cog" />

      <Link href="/" asChild>
        <Button>Wyloguj się</Button>
      </Link>
    </SafeAreaView>
  );
};

export default MoreScreen;
