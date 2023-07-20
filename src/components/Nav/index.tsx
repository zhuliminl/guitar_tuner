import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import IconFont from '../iconFont';
import { useNavigation } from '@react-navigation/native';
import { useThemeStyle } from '../../hooks/useTheme';

export const Nav = ({ title = '标题' }) => {
  const navigation = useNavigation();
  const Theme = useThemeStyle();
  return (
    <View
      style={{
        width: Theme.windowWidth,
        height: Theme.sizeHeaderHeight,
        flexDirection: 'row',
      }}>
      {/* 返回 */}
      <TouchableOpacity
        style={{
          width: Theme.sizeHeaderHeight,
          height: Theme.sizeHeaderHeight,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          navigation.goBack();
        }}>
        <IconFont name="smallArrow_l" size={40} fill={Theme.fontColorPrimary} />
      </TouchableOpacity>
      <View
        style={{
          height: '100%',
          flex: 1,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: Theme.fontColorPrimary,
            fontSize: Theme.fontSizeTitle,
            fontWeight: 'bold',
          }}>
          {title}
        </Text>
      </View>
    </View>
  );
};
