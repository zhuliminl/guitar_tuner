import React, { useEffect, useRef } from 'react';
import {
  TouchableOpacity,
  View,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';
import { useThemeStyle } from '../../hooks/useTheme';

export const Switch = ({ isActive = false, onPress = () => {} }) => {
  const value = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isActive) {
      Animated.spring(value, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.spring(value, {
        toValue: 0,
        useNativeDriver: true,
      }).start();
    }
  }, [isActive]);

  const tX = value.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 10],
  });
  const sizeWidth = 30;
  const sizeHeight = 30;
  const sizeDot = 30;

  const Theme = useThemeStyle();
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        onPress(isActive);
      }}>
      <View
        style={{
          width: sizeWidth,
          height: sizeHeight,
          backgroundColor: Theme.bgColorTertiary,
        }}>
        <Animated.View
          style={{
            height: sizeDot,
            width: sizeDot,
            borderRadius: sizeDot / 2,
            backgroundColor: Theme.colorSafe,
            transform: [
              {
                translateX: tX,
              },
            ],
          }}></Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
};
