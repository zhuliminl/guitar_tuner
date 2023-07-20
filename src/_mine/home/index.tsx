import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Cell, CellGroup } from '../../components/Cell';
import { LargeTitle } from '../../components/LargeTitle';
import { RootStackParamList } from '../../tabs';

type Props = BottomTabScreenProps<RootStackParamList, 'Mine'>;

export default ({ route, navigation }: Props) => {
  return (
    <View style={styles.container}>
      <LargeTitle title="我的页面" />
      <CellGroup title="设置">
        <Cell title="联系我们" desc="您可以通过一些方式等收到返赛" />
        <Cell title="关于萤石云" />
        <Cell
          title="主题模式"
          onPress={() => {
            navigation.navigate('ThemeSetting');
          }}
        />
      </CellGroup>
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
