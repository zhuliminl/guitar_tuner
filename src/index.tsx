import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Setting from './_mine/setting';
import Tabs from './tabs';
import ToastMessage from './components/ToastMessage';
import { useThemeStyle } from './hooks/useTheme';

const Stack = createNativeStackNavigator();

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
  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: Theme.bgColorPrimary,
        },
      }}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen
          name="Setting"
          component={Setting}
          // options={{
          //   gestureEnabled: false,
          //   animation: 'slide_from_bottom',
          //   animationDuration: 10,
          // }}
        />
      </Stack.Navigator>
      <ToastMessage />
    </NavigationContainer>
  );
};
