import { Animated } from 'react-native';

export interface AnimationHook {
  opacityValue: Animated.Value;
  fadeIn: () => void;
  fadeOut: () => void;
}
