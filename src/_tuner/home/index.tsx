import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {RootStackParamList} from '../../tabs';
import {LargeTitle} from '../../components/LargeTitle';

type Props = BottomTabScreenProps<RootStackParamList, 'Tuner'>;
export default ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <LargeTitle title={'调音器'} />
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
