import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {Theme} from '../../utils/Theme';
import IconFont from '../iconFont';

export const Cell = ({
  title = '关于',
  desc = '',
  onPress = () => {},
  renderRight = undefined,
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onPress();
      }}
      style={{
        height: Theme.sizeCellHeight,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          height: '100%',
          flex: 1,
          alignContent: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: Theme.fontSizeDefault,
            color: Theme.fontColorPrimary,
          }}>
          {title}
        </Text>
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
      <View
        style={{
          height: Theme.sizeCellHeight,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <IconFont name="smallArrow_r" size={24} fill={'#999'} />
      </View>
    </TouchableOpacity>
  );
};

export const CellGroup = ({title = '', ...props}) => {
  return (
    <View
      style={{
        marginTop: Theme.sizeCardPadding,
        paddingBottom: Theme.sizeCardPadding,
        paddingTop: Theme.sizeCardPadding,
        paddingLeft: Theme.sizeCardPadding,
        paddingRight: Theme.sizeCardPadding,
        marginLeft: Theme.sizePagePadding,
        marginRight: Theme.sizePagePadding,
        borderRadius: Theme.borderRadiusLarge,
        backgroundColor: Theme.bgColorPrimary,
      }}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: Theme.fontSizeTitle,
          color: Theme.fontColorPrimary,
          marginBottom: Theme.sizeTitlePadding,
        }}>
        {title}
      </Text>
      {props.children}
    </View>
  );
};
