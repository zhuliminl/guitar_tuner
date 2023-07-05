import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Jazz from '../_jazz/home';
import Mine from '../_mine/home';
import Tools from '../_tools/home';
import Tuner from '../_tuner/home';

const Tab = createBottomTabNavigator();
export default () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tuner" component={Tuner} />
      <Tab.Screen name="Tools" component={Tools} />
      <Tab.Screen name="Jazz" component={Jazz} />
      <Tab.Screen name="Mine" component={Mine} />
    </Tab.Navigator>
  );
};

const tabsConfig = [
  {
    label: '调音',
    key: 'tuner',
  },
  {
    label: '应用',
    key: 'tools',
  },
  {
    label: '我的',
    key: 'mime',
  },
  {
    label: '爵士',
    key: 'jazz',
  },
];
