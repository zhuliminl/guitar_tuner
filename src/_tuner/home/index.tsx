import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import React, {useEffect, useState} from 'react';
import {
  NativeEventEmitter,
  NativeModules,
  StyleSheet,
  View,
} from 'react-native';
import {PERMISSIONS, RESULTS, check, request} from 'react-native-permissions';
import RTNCalculator from 'rtn-calculator/js/NativeCalculator';
import FullButton from '../../components/FullButton';
import {LargeTitle} from '../../components/LargeTitle';
import {RootStackParamList} from '../../tabs';

// const eventEmitter = new NativeEventEmitter(RTNCalculator)

type Props = BottomTabScreenProps<RootStackParamList, 'Tuner'>;
export default ({navigation}: Props) => {
  const [result, setResult] = useState<number | null>(null);
  useEffect(() => {
    console.log('saul BBBBB');
    RTNCalculator?.init({
      bufferSize: 4096,
      sampleRate: 44100,
      bitsPerChannel: 16,
      channelsPerFrame: 1,
    });
    const sub = new NativeEventEmitter(NativeModules.RTNCalculator).addListener(
      'recording',
      data => {
        console.log('saul 录音珊珊', data);
      },
    );
    return sub.remove();
  }, []);

  return (
    <View style={styles.container}>
      <LargeTitle title={'调音器'} />
      <FullButton
        title="获取录音权限"
        onPress={() => {
          check(PERMISSIONS.ANDROID.RECORD_AUDIO)
            .then(result => {
              switch (result) {
                case RESULTS.UNAVAILABLE:
                  console.log(
                    'This feature is not available (on this device / in this context)',
                  );
                  break;
                case RESULTS.DENIED:
                  console.log(
                    'The permission has not been requested / is denied but requestable',
                  );
                  request(PERMISSIONS.ANDROID.RECORD_AUDIO).then(result => {
                    console.log('saul 录音请求结果', result);
                  });
                  break;
                case RESULTS.LIMITED:
                  console.log(
                    'The permission is limited: some actions are possible',
                  );
                  break;
                case RESULTS.GRANTED:
                  console.log('The permission is granted');
                  break;
                case RESULTS.BLOCKED:
                  console.log(
                    'The permission is denied and not requestable anymore',
                  );
                  break;
              }
            })
            .catch(error => {
              console.log('saul RRRRRR', error);
              // …
            });
        }}
      />
      <FullButton
        title="开始录音"
        onPress={() => {
          console.log('saul NNNN', NativeModules);
          RTNCalculator?.start(() => {});
        }}
      />
      <FullButton
        title="停止录音"
        onPress={() => {
          RTNCalculator?.stop();
        }}
      />
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
