import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, Easing } from 'react-native';
import { Svg, Line } from 'react-native-svg';
import { useThemeStyle } from '../../hooks/useTheme';

interface Props {
  fill: string;
}

export default ({ fill = '#999' }: Props) => {
  const value = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(value, {
        duration: 200,
        toValue: 20,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
    ).start();
  }, []);

  const Theme = useThemeStyle();
  const scale = 20;
  const hLines = 19;
  const VLines = Math.floor(Theme.windowWidth / scale);

  return (
    <Animated.View
      style={{
        // backgroundColor: '#EEEE',
        transform: [
          {
            translateY: value,
          },
        ],
      }}>
      <Svg height={hLines * scale} width={Theme.windowWidth}>
        {Array.from({ length: hLines }).map((item, i) => {
          return (
            <Line
              x1="0"
              x2={Theme.windowWidth}
              y1={scale * i}
              y2={scale * i}
              stroke={fill}
              strokeWidth="1"
              strokeLinecap="square"
            />
          );
        })}
        {Array.from({ length: VLines }).map((item, i) => {
          return (
            <Line
              y1="0"
              y2={Theme.windowWidth}
              x1={scale * i}
              x2={scale * i}
              stroke={fill}
              strokeWidth="1"
              strokeLinecap="square"
            />
          );
        })}
      </Svg>
    </Animated.View>
  );
};
