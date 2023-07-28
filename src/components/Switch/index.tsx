import React, { useEffect, useRef } from 'react';
import {
  TouchableOpacity,
  View,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';
import { useThemeStyle } from '../../hooks/useTheme';

interface Props {
  isActive: boolean;
  onPress: (isActive: boolean) => void;
}

export const Switch = ({ isActive = false, onPress = () => {} }: Props) => {
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

  const sizeWidth = 44;
  const sizeHeight = 22;
  const sizeDot = 16;
  const p = (sizeHeight - sizeDot) / 2;

  const tX = value.interpolate({
    inputRange: [0, 1],
    outputRange: [p, sizeWidth - sizeDot - p],
  });

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
          backgroundColor: isActive ? Theme.colorSafe : Theme.bgColorTertiary,
          borderRadius: sizeHeight / 2,
          justifyContent: 'center',
        }}>
        <Animated.View
          style={{
            height: sizeDot,
            width: sizeDot,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: sizeDot / 2,
            backgroundColor: isActive
              ? Theme.bgColorPrimary
              : Theme.bgColorTertiary,
            transform: [
              {
                translateX: tX,
              },
            ],
          }}>
          <View
            style={{
              height: sizeDot - 4,
              width: sizeDot - 4,
              borderRadius: (sizeDot - 4) / 2,
              backgroundColor: isActive
                ? Theme.bgColorPrimary
                : Theme.bgColorPrimary,
            }}></View>
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
};
