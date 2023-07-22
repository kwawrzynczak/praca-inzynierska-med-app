import { useRef } from 'react';
import { Animated } from 'react-native';

interface AnimationHook {
  opacityValue: Animated.Value;
  fadeIn: () => void;
  fadeOut: () => void;
}

const FADE_IN_ANIMATION_CONFIG: Animated.TimingAnimationConfig = {
  toValue: 0.75,
  duration: 75,
  useNativeDriver: true,
};

const FADE_OUT_ANIMATION_CONFIG: Animated.TimingAnimationConfig = {
  toValue: 0,
  duration: 75,
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
