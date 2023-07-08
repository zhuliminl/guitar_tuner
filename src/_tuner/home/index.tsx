import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TurboModuleRegistry,
} from 'react-native';
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {RootStackParamList} from '../../tabs';
import {LargeTitle} from '../../components/LargeTitle';
import RTNCalculator from 'rtn-calculator/js/NativeCalculator';

type Props = BottomTabScreenProps<RootStackParamList, 'Tuner'>;
export default ({navigation}: Props) => {
  const [result, setResult] = useState<number | null>(null);
  return (
    <View style={styles.container}>
      <LargeTitle title={'调音器'} />
      <TouchableOpacity
        onPress={async () => {
          const value = await RTNCalculator?.add(3, 7);
          console.log('saul VVVVVVVVVV', value);
          setResult(value ?? null);
        }}>
        <Text>Test</Text>
      </TouchableOpacity>
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
