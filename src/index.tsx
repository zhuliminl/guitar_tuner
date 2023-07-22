import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Platform } from 'react-native';
import AccountSafe from './_mine/account_safe';
import ThemeSetting from './_mine/themeSetting';
import InstrumentsCate from './_tuner/instruments_cate';
import InstrumentsList from './_tuner/instruments_list';
import ToastMessage from './components/ToastMessage';
import AppearanceHost from './contexts/appearance';
import { useThemeStyle } from './hooks/useTheme';
import Tabs, { RootStackParamList } from './tabs';

const Stack = createNativeStackNavigator<RootStackParamList>();

/*
const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};
*/

export default () => {
  const Theme = useThemeStyle();
  const MyTheme = { colors: { background: Theme.bgColorPrimary } };
  return (
    <AppearanceHost>
      <NavigationContainer theme={MyTheme as typeof DefaultTheme}>
        <Stack.Navigator
          initialRouteName="Tabs"
          // initialRouteName="AccountSafe"
          // initialRouteName="InstrumentsCate"
          screenOptions={{
            contentStyle: {},
            headerShown: false,
            ...(Platform.OS === 'android' && {
              animation: 'slide_from_right',
            }),
          }}>
          <Stack.Screen name="Tabs" component={Tabs} />
          <Stack.Screen name="ThemeSetting" component={ThemeSetting} />
          <Stack.Screen name="InstrumentsCate" component={InstrumentsCate} />
          <Stack.Screen name="InstrumentsList" component={InstrumentsList} />
          <Stack.Screen name="AccountSafe" component={AccountSafe} />
        </Stack.Navigator>
        <ToastMessage />
      </NavigationContainer>
    </AppearanceHost>
  );
};
