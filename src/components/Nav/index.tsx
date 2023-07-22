import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import IconFont from '../iconFont';
import { useNavigation } from '@react-navigation/native';
import { useThemeStyle } from '../../hooks/useTheme';
import { Shadow } from 'react-native-shadow-2';

export const Nav = ({ title = '标题' }) => {
  const navigation = useNavigation();
  const Theme = useThemeStyle();
  const backWidth = Theme.sizePagePadding + Theme.sizeCardPadding;
  return (
    <View
      style={{
        width: Theme.windowWidth,
        height: Theme.sizeHeaderHeight,
        backgroundColor: Theme.bgColorPrimary,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: Theme.colorDivide,
      }}>
      {/* 返回 */}
      <TouchableOpacity
        style={{
          width: backWidth,
          height: Theme.sizeHeaderHeight,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          navigation.goBack();
        }}>
        <IconFont
          name="smallArrow_l"
          size={backWidth}
          fill={Theme.fontColorPrimary}
        />
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
            // fontSize: Theme.fontSizeLarge,
            fontSize: Theme.fontSizeTitle,
            fontWeight: 'bold',
          }}>
          {title}
        </Text>
      </View>
    </View>
  );
};
