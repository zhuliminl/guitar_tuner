import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {RootStackParamList} from '../../tabs';

type Props = BottomTabScreenProps<RootStackParamList, 'Jazz'>;
export default ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <Text>jj</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#333',
    fontSize: 90,
  },
});
