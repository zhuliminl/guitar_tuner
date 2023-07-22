import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Animated,
} from 'react-native';
import {
  ThemeType,
  useSetTheme,
  useThemeStyle,
  useThemeType,
} from '../../hooks/useTheme';
import Check from '../../components/Check';
import { Shadow } from 'react-native-shadow-2';
import { useScaleTouch } from '../../hooks/useScaleTouch';

export default () => {
  const Theme = useThemeStyle();
  const themeType = useThemeType();
  const setTheme = useSetTheme();

  return (
    <View
      style={{
        marginTop: Theme.sizePagePadding,
        width: Theme.windowWidth,
        justifyContent: 'center',
        flexDirection: 'row',
      }}>
      {(Object.keys(ThemeType) as Array<keyof typeof ThemeType>).map(key => {
        const themeName = ThemeType[key];
        const targetTheme = useThemeStyle({ targetTheme: themeName });
        const isActive = themeName === themeType;
        const { scaleValue, ...touchEvents } = useScaleTouch();
        return (
          <TouchableOpacity
            {...touchEvents}
            activeOpacity={0.7}
            key={key}
            onPress={() => {
              setTheme(themeName);
            }}
            style={{
              paddingHorizontal: 10,
              alignContent: 'center',
            }}>
            <Animated.View
              style={{
                transform: [
                  {
                    scale: scaleValue,
                  },
                ],
              }}>
              <Shadow
                offset={[0, 10]}
                distance={20}
                startColor={Theme.shadowStyle1.startColor}>
                <View
                  style={{
                    borderRadius: Theme.borderRadiusLarge,
                    width: Theme.scale * 20,
                    height: Theme.scale * 38,
                    backgroundColor: targetTheme.bgColorSecondary,
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      position: 'absolute',
                      bottom: Theme.scale * 2,
                      borderRadius: Theme.borderRadiusSmall,
                      width: Theme.scale * 16,
                      height: Theme.scale * 4,
                      backgroundColor: targetTheme.bgColorPrimary,
                    }}></View>
                </View>
              </Shadow>
            </Animated.View>
            <Text
              style={{
                marginTop: Theme.sizeTextPadding,
                fontSize: Theme.fontSizeDefault,
                fontWeight: isActive ? 'bold' : 'normal',
                color: Theme.fontColorPrimary,
                textAlign: 'center',
              }}>
              {themeName}
            </Text>
            <Check
              style={{
                marginTop: 4,
                alignSelf: 'center',
              }}
              isActive={isActive}
              onPress={() => {
                setTheme(themeName);
              }}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
