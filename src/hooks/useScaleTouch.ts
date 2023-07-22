import React, { useState, useEffect, useRef } from 'react';
import { Animated } from 'react-native';

const minScale = 0.95;
export const useScaleTouch = () => {
  const [isLongPress, setIsLongPress] = useState(false);
  const value = useRef(new Animated.Value(minScale - 0.2)).current;

  useEffect(() => {
    if (isLongPress) {
      Animated.spring(value, {
        toValue: minScale,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.spring(value, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    }
  }, [isLongPress]);

  const onLongPress = () => {
    setIsLongPress(true);
  };
  const onPressOut = () => {
    setIsLongPress(false);
  };

  return {
    onLongPress,
    onPressOut,
    scaleValue: value,
  };
};
