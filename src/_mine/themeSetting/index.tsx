import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Nav } from '../../components/Nav';
import { RootStackParamList } from '../../tabs';
import AppThemeSwitch from './AppThemeSwitch';

type Props = NativeStackScreenProps<RootStackParamList, 'ThemeSetting'>;

export default ({ route, navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Nav title="主题设置" />
      <AppThemeSwitch />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: '#333',
    fontSize: 90,
  },
});
