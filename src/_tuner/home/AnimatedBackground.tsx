import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, Easing } from 'react-native';
import { Svg, Line } from 'react-native-svg';
import { useThemeStyle } from '../../hooks/useTheme';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
  fill: string;
}

export default ({ fill = '#999' }: Props) => {
  const value = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(value, {
        duration: 1000,
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
    <View>
      <LinearGradient
        colors={[Theme.bgColorPrimary, 'rgba(0,0,0,0)']}
        style={{
          position: 'absolute',
          top: -2,
          zIndex: 999,
          width: Theme.windowWidth,
          height: 90,
        }}></LinearGradient>
      <LinearGradient
        colors={['rgba(0,0,0,0)', Theme.bgColorPrimary]}
        style={{
          position: 'absolute',
          bottom: -2,
          zIndex: 999,
          width: Theme.windowWidth,
          height: 95,
        }}></LinearGradient>
      <Animated.View
        style={
          {
            // transform: [
            //   {
            //     translateY: value,
            //   },
            // ],
          }
        }>
        <Svg height={hLines * scale} width={Theme.windowWidth}>
          {Array.from({ length: hLines }).map((item, i) => {
            return (
              <Line
                key={i}
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
                key={i}
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
    </View>
  );
};
