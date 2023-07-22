import { View, TouchableOpacity, Text, Animated } from 'react-native';
import { useThemeStyle } from '../../hooks/useTheme';
import { useScaleTouch } from '../../hooks/useScaleTouch';

export default ({ title = '标题', onPress = () => {} }) => {
  const Theme = useThemeStyle();
  const { scaleValue, onPressOut, onLongPress } = useScaleTouch();
  return (
    <Animated.View
      style={{
        marginTop: Theme.sizeCardPadding,
        width: Theme.windowWidth,
        height: Theme.sizeFullButtonHeight,
        justifyContent: 'center',
        alignItems: 'center',
        transform: [{ scale: scaleValue }],
      }}>
      <TouchableOpacity
        onPressOut={onPressOut}
        onLongPress={onLongPress}
        style={{
          borderWidth: 0.5,
          borderColor: Theme.colorBorder,
          width: Theme.sizeFullButtonWidth,
          height: Theme.sizeFullButtonHeight,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: Theme.sizeFullButtonHeight / 2,
        }}
        onPress={() => {
          onPress();
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: Theme.fontSizeDefault,
            color: Theme.fontColorPrimary,
          }}>
          {title}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};
