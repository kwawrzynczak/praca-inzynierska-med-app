import { useRef } from 'react';
import { Animated } from 'react-native';
import { AnimationHook } from '@types';

interface AnimationConfig {
  toValue: number;
  duration: number;
  useNativeDriver: boolean;
}

const FADE_IN_ANIMATION_CONFIG: AnimationConfig = {
  toValue: 0.7,
  duration: 100,
  useNativeDriver: true,
};

const FADE_OUT_ANIMATION_CONFIG: AnimationConfig = {
  toValue: 0,
  duration: 100,
  useNativeDriver: true,
};

export const useAnimation = (): AnimationHook => {
  const opacityValue = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(opacityValue, FADE_IN_ANIMATION_CONFIG).start();
  };

  const fadeOut = () => {
    Animated.timing(opacityValue, FADE_OUT_ANIMATION_CONFIG).start();
  };

  return {
    opacityValue,
    fadeIn,
    fadeOut,
  };
};
