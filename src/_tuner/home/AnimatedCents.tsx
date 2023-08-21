import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, Easing } from 'react-native';
import { useThemeStyle } from '../../hooks/useTheme';
import useThrottle from '../../hooks/useThrottle';

interface Props {
  cents: number | undefined;
}
export default ({ cents }: Props) => {
  const value = useRef(new Animated.Value(0)).current;
  const Theme = useThemeStyle();
  const scale = 20;
  const VLines = Math.floor(Theme.windowWidth / scale);
  const centerLine = Math.floor(VLines / 2);
  const givenLine = 10;
  const centerP = centerLine * scale;
  const animation = useRef(null);
  const over = useRef(true);

  useEffect(() => {
    console.log('saul >>>>>', cents);
    if (cents === undefined) {
      return;
    }

    if (!over.current) {
      if (animation) {
        animation.current.stop();
      }
    }

    over.current = false;
    animation.current = Animated.timing(value, {
      toValue: cents,
      duration: 300,
      useNativeDriver: true,
      easing: Easing.linear,
      // easing: Easing.cubic,
    });
    animation.current.start(() => {
      over.current = true;
      console.log('saul 结束');
    });
  }, [cents]);

  const tx = value.interpolate({
    inputRange: [-50, 50],
    outputRange: [centerP - givenLine * scale, centerP + givenLine * scale],
  });

  return (
    <Animated.View
      style={{
        position: 'absolute',
        // left: centerP,
        height: 300,
        width: 1,
        backgroundColor: 'red',
        transform: [
          {
            translateX: tx,
          },
        ],
      }}></Animated.View>
  );
};
