import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { RootStackParamList } from '../../tabs';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = BottomTabScreenProps<RootStackParamList, 'Jazz'>;

export default ({ route, navigation }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Mine');
        }}>
        <Text style={styles.title}>{'Jazz Home'}</Text>
      </TouchableOpacity>
    </SafeAreaView>
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
