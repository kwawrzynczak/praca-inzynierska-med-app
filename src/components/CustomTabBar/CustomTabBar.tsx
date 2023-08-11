/* eslint-disable no-nested-ternary */
import { Animated, Pressable, SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from '@components/Text';
import { createMaterialTopTabNavigator, MaterialTopTabBarProps } from '@react-navigation/material-top-tabs';
import { twMerge } from 'tailwind-merge';

export const CustomTabBar = ({ state, descriptors, navigation, position }: MaterialTopTabBarProps) => {
  return (
    <SafeAreaView className="bg-background">
      <View className="flex-row items-center justify-center self-center rounded-xl bg-accent p-1">
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label = route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate({ key: route.key, name: route.name, merge: true });
            }
          };

          // const inputRange = state.routes.map((_, i) => i);
          // const opacity = position.interpolate({
          //   inputRange,
          //   outputRange: inputRange.map((i) => (i === index ? 1 : 0)),
          // });

          return (
            <Pressable
              className={twMerge(
                'flex w-40 items-center justify-center bg-accent px-2.5 py-1.5 rounded-lg',
                isFocused && 'bg-white',
              )}
              key={route.name}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
            >
              <Text className={twMerge('text-white font-medium', isFocused && 'text-accent')}>{label}</Text>
            </Pressable>
          );
        })}
      </View>
    </SafeAreaView>
  );
};
