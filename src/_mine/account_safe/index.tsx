import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Nav } from '../../components/Nav';
import { RootStackParamList } from '../../tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CellGroup, Cell } from '../../components/Cell';
import { ThemeType } from '../../hooks/useTheme';
import { categoryEnum } from '../../utils/music/instruments';

type Props = NativeStackScreenProps<RootStackParamList, 'AccountSafe'>;

export default ({ route, navigation }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Nav title="账号与安全" />
      <ScrollView>
        <CellGroup title="">
          <Cell title={'手机'} onPress={() => {}} />
          <Cell title={'微信'} onPress={() => {}} />
        </CellGroup>
        <CellGroup>
          <Cell title={'邮箱'} onPress={() => {}} />
        </CellGroup>
        <CellGroup title="第三方登录">
          <Cell title={'微信'} onPress={() => {}} />
          <Cell title={'Apple'} onPress={() => {}} />
          <Cell title={'QQ'} onPress={() => {}} />
          <Cell title={'Facebook'} onPress={() => {}} />
          <Cell title={'微博'} onPress={() => {}} />
        </CellGroup>
        <CellGroup>
          <Cell title={'修改密码'} onPress={() => {}} />
        </CellGroup>
      </ScrollView>
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
