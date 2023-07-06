import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Jazz from '../_jazz/home';
import Mine from '../_mine/home';
import Tools from '../_tools/home';
import Tuner from '../_tuner/home';
import {Theme} from '../utils/Theme';

const Tab = createBottomTabNavigator();
export default () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 10,
          left: 10,
          right: 10,
          borderRadius: Theme.borderRadiusLarge,
          borderTopWidth: 0,
          height: Theme.sizeTabHeight,
          backgroundColor: Theme.bgColorPrimary,
          elevation: 0,
          shadowOffset: {width: 0, height: -20},
        },
        tabBarItemStyle: {},
      }}>
      <Tab.Screen
        name="Tuner"
        component={Tuner}
        options={{
          tabBarIcon: ({...props}) => {
            return <Icon label="调音" {...props} />;
          },
        }}
      />
      <Tab.Screen
        name="Tools"
        component={Tools}
        options={{
          tabBarIcon: ({...props}) => {
            return <Icon label="工具" {...props} />;
          },
        }}
      />
      <Tab.Screen
        name="Jazz"
        component={Jazz}
        options={{
          tabBarIcon: ({...props}) => {
            return <Icon label="爵士" {...props} />;
          },
        }}
      />
      <Tab.Screen
        name="Mine"
        component={Mine}
        options={{
          tabBarIcon: ({...props}) => {
            return <Icon label="我的" {...props} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

const Icon = ({label = '', focused = false}) => {
  return (
    <View
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
    </View>
  );
};
