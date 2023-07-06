import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Nav} from '../../components/Nav';
import {Cell, CellGroup} from '../../components/Cell';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export default ({navigation}: NativeStackNavigationProp) => {
  return (
    <View style={styles.container}>
      <Nav title="设置" />
      <CellGroup title="设置">
        <Cell title="联系我们" desc="您可以通过一些方式等收到返赛" />
        <Cell title="关于萤石云" />
        <Cell
          title="版本信息"
          onPress={() => {
            navigation.push('Setting');
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
