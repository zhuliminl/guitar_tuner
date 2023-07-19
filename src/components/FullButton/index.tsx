import { View, TouchableOpacity, Text } from 'react-native';
import { Theme } from '../../utils/Theme';

export default ({ title = '标题', onPress = () => {} }) => {
  return (
    <View
      style={{
        marginTop: Theme.sizeCardPadding,
        width: Theme.windowWidth,
        height: Theme.sizeFullButtonHeight,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        style={{
          borderWidth: 0.5,
          borderColor: Theme.colorDivide,
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
    </View>
  );
};
