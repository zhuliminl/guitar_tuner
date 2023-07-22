import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useThemeStyle } from '../../hooks/useTheme';
import { useScaleTouch } from '../../hooks/useScaleTouch';

export default ({ style = {}, isActive = false, onPress = () => {} }) => {
  const Theme = useThemeStyle();
  return (
    <TouchableOpacity
      onPress={() => {
        onPress();
      }}
      style={{
        width: 16,
        height: 16,
        borderRadius: 16 / 2,
        justifyContent: 'center',
        alignItems: 'center',
        ...style,
        ...(isActive && {
          backgroundColor: Theme.colorSafe,
        }),
        ...(!isActive && {
          borderWidth: 1,
          borderColor: Theme.colorDivide,
        }),
      }}>
      {isActive && (
        <View
          style={{
            width: 6,
            height: 6,
            borderRadius: 6 / 2,
            backgroundColor: '#FFF',
          }}></View>
      )}
    </TouchableOpacity>
  );
};
