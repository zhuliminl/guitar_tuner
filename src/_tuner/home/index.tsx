import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import React, { useEffect, useState } from 'react';
import { NativeModules, StyleSheet, View } from 'react-native';
import { PERMISSIONS, RESULTS, check, request } from 'react-native-permissions';
import FullButton from '../../components/FullButton';
import { LargeTitle } from '../../components/LargeTitle';
import { RootStackParamList } from '../../tabs';
import RecordingModule from '../../utils/RecordingModule';
import withRecordAudioPermission from '../../utils/withRecordAudioPermission';

type Props = BottomTabScreenProps<RootStackParamList, 'Tuner'>;
export default ({ navigation }: Props) => {
  const [result, setResult] = useState<number | null>(null);
  useEffect(() => {
    console.log('saul BBBBB');
    withRecordAudioPermission(status => {
      if (status === RESULTS.GRANTED) {
        // RecordingModule?.init({
        //   bufferSize: 4096,
        //   sampleRate: 44100,
        //   bitsPerChannel: 16,
        //   channelsPerFrame: 1,
        // })
      }
      // 一套权限请求过程
    });

    RecordingModule.addRecordingEventListener(data => {
      // console.log('saul RRRRRRRRRRRRRRR', data);
    });
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
          RecordingModule?.start();
        }}
      />
      <FullButton
        title="停止录音"
        onPress={() => {
          RecordingModule?.stop();
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
