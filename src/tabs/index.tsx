import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Jazz from '../_jazz/home';
import Mine from '../_mine/home';
import Tools from '../_tools/home';
import Tuner from '../_tuner/home';

const Tab = createBottomTabNavigator();
export default () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          borderTopWidth: 0,
          height: 50,
          // backgroundColor: 'red',
        },
        tabBarItemStyle: {
          flex: 1,
          flexDirection: 'column',
        },
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
        // backgroundColor: '#EEE',
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          color: focused ? 'red' : '#999',
        }}>
        {label}
      </Text>
    </View>
  );
};
