import React from 'react';
import { View, Text } from 'react-native';
import { useThemeStyle } from '../../hooks/useTheme';

interface Props {
  title: number | string | undefined;
}

export const LargeTitle = ({ title = '标题' }: Props) => {
  const Theme = useThemeStyle();
  return (
    <View
      style={{
        marginTop: Theme.sizePagePadding,
        marginLeft: Theme.sizePagePadding,
      }}>
      <Text
        style={{
          color: Theme.fontColorPrimary,
          fontSize: Theme.fontSizeLarge,
          fontWeight: 'bold',
        }}>
        {title}
      </Text>
    </View>
  );
};
