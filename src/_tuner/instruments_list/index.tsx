import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Nav } from '../../components/Nav';
import { RootStackParamList } from '../../tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CellGroup, Cell } from '../../components/Cell';
import { ThemeType } from '../../hooks/useTheme';
import { categoryEnum } from '../../utils/music/instruments';

type Props = NativeStackScreenProps<RootStackParamList, 'InstrumentsList'>;

export default ({ route, navigation }: Props) => {
  const { cateName } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <Nav title={cateName} />
      <ScrollView>
        <CellGroup title="选择您的乐器种类">
          {(Object.keys(categoryEnum) as Array<keyof typeof categoryEnum>).map(
            key => {
              const cateName = categoryEnum[key];
              return (
                <Cell key={cateName} title={cateName} onPress={() => {}} />
              );
            },
          )}
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
