import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CommonActions } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import Jazz from '../_jazz/home';
import Mine from '../_mine/home';
import Tools from '../_tools/home';
import Tuner from '../_tuner/home';
import { useThemeStyle } from '../hooks/useTheme';
import { categoryEnum } from '../utils/music/instruments';

export type RootStackParamList = {
  Tabs: undefined;
  Tuner: undefined;
  Tools: undefined;
  Jazz: undefined;
  Mine: undefined;
  ThemeSetting: undefined;
  InstrumentsCate: undefined;
  InstrumentsList: {
    cateName: categoryEnum;
  };
  AccountSafe: undefined;
};

const Tab = createBottomTabNavigator<RootStackParamList>();
export default () => {
  const Theme = useThemeStyle();
  const tabHeight = Theme.sizeTabHeight;
  const tabWidth = Theme.windowWidth - 20;
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={props => {
        return (
          <View
            style={{
              width: Theme.windowWidth,
              height: tabHeight,
            }}>
            <Shadow
              stretch={true}
              startColor={Theme.shadowStyle1.startColor}
              distance={12}
              containerStyle={{
                position: 'absolute',
                bottom: 10,
                left: 10,
                right: 10,
                height: tabHeight,
                width: tabWidth,
              }}
              style={{
                width: tabWidth,
                height: tabHeight,
              }}>
              <View
                style={{
                  height: tabWidth,
                  borderRadius: Theme.borderRadiusLarge,
                  flexDirection: 'row',
                  flex: 1,
                  backgroundColor: Theme.bgColorSecondary,
                }}>
                {props.state.routeNames.map((routeName, i) => {
                  const focused = props.state.index === i;
                  return (
                    <Icon
                      key={routeName}
                      label={routeName}
                      focused={focused}
                      onPress={() => {
                        props.navigation.dispatch({
                          ...CommonActions.navigate(routeName),
                          target: props.state.key,
                        });
                      }}
                    />
                  );
                })}
              </View>
            </Shadow>
          </View>
        );
      }}>
      <Tab.Screen name="Tuner" component={Tuner} />
      <Tab.Screen name="Tools" component={Tools} />
      <Tab.Screen name="Jazz" component={Jazz} />
      <Tab.Screen name="Mine" component={Mine} />
    </Tab.Navigator>
  );
};

const Icon = ({ label = '', focused = false, onPress = () => {} }) => {
  const Theme = useThemeStyle();
  return (
    <TouchableOpacity
      onPress={() => {
        onPress();
      }}
      style={{
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontSize: Theme.fontSizeDefault,
          color: focused ? Theme.colorBrand : Theme.fontColorQuaternary,
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};
