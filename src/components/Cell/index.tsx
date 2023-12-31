import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  TouchableHighlight,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';
import IconFont from '../iconFont';
import { useThemeStyle } from '../../hooks/useTheme';
import { Shadow } from 'react-native-shadow-2';
import { useScaleTouch } from '../../hooks/useScaleTouch';

export const Cell = ({
  title = '关于',
  desc = '',
  onPress = () => {},
  renderRight = undefined,
  ...props
}) => {
  const Theme = useThemeStyle();
  const { onLongPress, onPressOut, isLast, isFirst } = props;
  const cellHeight = Theme.sizeCellHeight;
  return (
    <TouchableHighlight
      onLongPress={() => {
        onLongPress();
      }}
      onPressOut={() => {
        onPressOut();
      }}
      activeOpacity={0.7}
      underlayColor={Theme.bgColorTertiary}
      onPress={() => {
        onPress();
      }}
      style={{}}>
      <View
        style={{
          marginTop: isFirst ? Theme.scale * 2 : 0,
          marginBottom: isLast ? Theme.scale * 2 : 0,
          height: cellHeight,
          flexDirection: 'row',
          paddingLeft: Theme.sizeCardPadding,
        }}>
        <View
          style={{
            flex: 1,
            alignContent: 'center',
            justifyContent: 'center',
          }}>
          {/* 大标题 */}
          <Text
            style={{
              fontSize: Theme.fontSizeDefault,
              fontWeight: 'bold',
              color: Theme.fontColorPrimary,
            }}>
            {title}
          </Text>
          {/* 描述 */}
          {!!desc && (
            <Text
              style={{
                marginTop: Theme.sizeTextPadding,
                fontSize: Theme.fontSizeDesc,
                color: Theme.fontColorTertiary,
              }}>
              {desc}
            </Text>
          )}
        </View>
        {/* 箭头 */}
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: Theme.sizeCardPadding,
          }}>
          <IconFont name="smallArrow_r" size={24} fill={Theme.colorIcon} />
        </View>
      </View>
    </TouchableHighlight>
  );
};

export const CellGroup = ({ title = '', ...props }) => {
  const Theme = useThemeStyle();
  const { onLongPress, onPressOut, scaleValue } = useScaleTouch();
  const totalCount = React.Children.count(props.children);

  // 牛逼的操作
  const renderChildren = () => {
    return React.Children.map(props.children, (child, index) => {
      const isFirst = index === 0;
      const isLast = index === totalCount - 1;
      return React.cloneElement(child, {
        isFirst,
        isLast,
        onLongPress,
        onPressOut,
      });
    });
  };

  return (
    <View
      style={{
        marginTop: Theme.sizeCardPadding,
        marginBottom: Theme.sizeCardPadding,
        width: Theme.windowWidth,
        paddingHorizontal: Theme.sizePagePadding,
      }}>
      {!!title && (
        <Text
          style={{
            marginLeft: Theme.sizeCardPadding,
            fontSize: Theme.fontSizeDesc,
            color: Theme.fontColorTertiary,
            marginBottom: Theme.sizeTitlePadding,
          }}>
          {title}
        </Text>
      )}
      <Animated.View
        style={{
          transform: [
            {
              scale: scaleValue,
            },
          ],
        }}>
        <Shadow
          stretch={true}
          startColor={Theme.shadowStyle2.startColor}
          style={{
            borderRadius: Theme.borderRadiusLarge,
            backgroundColor: Theme.bgColorSecondary,
            // paddingVertical: Theme.borderRadiusLarge / 2,
            overflow: 'hidden',
          }}
          containerStyle={{}}>
          <View>{renderChildren()}</View>
        </Shadow>
      </Animated.View>
    </View>
  );
};
