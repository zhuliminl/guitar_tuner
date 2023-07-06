import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Cell, CellGroup} from '../../components/Cell';

export default () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>{'Mine Home'}</Text> */}
      <CellGroup title="设置">
        <Cell title="联系我们" desc="您可以通过一些方式等收到返赛" />
        <Cell title="关于萤石云" />
        <Cell title="版本信息" />
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
