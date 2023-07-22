import React, { useState, useEffect, useRef } from 'react';
import { Animated } from 'react-native';

export const useScaleTouch = () => {
  const [isLongPress, setIsLongPress] = useState(false);
  const value = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isLongPress) {
      Animated.spring(value, {
        toValue: 2,
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
