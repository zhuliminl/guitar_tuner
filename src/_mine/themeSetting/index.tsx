import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Nav } from '../../components/Nav';
import { RootStackParamList } from '../../tabs';
import AppThemeSwitch from './AppThemeSwitch';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = NativeStackScreenProps<RootStackParamList, 'ThemeSetting'>;

export default ({ route, navigation }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Nav title="主题设置" />
      <AppThemeSwitch />
    </SafeAreaView>
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
