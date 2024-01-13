import React from 'react';
import { Pressable, SafeAreaView, View } from 'react-native';
import { Button, SettingsTabElement, Text } from '@components';
import { FontAwesome5 } from '@expo/vector-icons';
import { Link, usePathname } from 'expo-router';

const tabs = [
  { name: 'Pacjenci', path: '/more/patients', icon: 'user-friends' },
  { name: 'Lekarze', path: '/more/doctors', icon: 'user-md' },
  { name: 'Placówki', path: '/more/facilities', icon: 'hospital' },
];

const MoreScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-background ">
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
