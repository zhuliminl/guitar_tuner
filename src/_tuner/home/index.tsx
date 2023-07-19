import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import React, { useEffect, useState } from 'react';
import { NativeModules, StyleSheet, View } from 'react-native';
import { PERMISSIONS, RESULTS, check, request } from 'react-native-permissions';
import FullButton from '../../components/FullButton';
import { LargeTitle } from '../../components/LargeTitle';
import { RootStackParamList } from '../../tabs';
import RecordingModule from '../../utils/RecordingModule';
import withRecordAudioPermission from '../../utils/withRecordAudioPermission';
import { ToastType, useToast } from '../../components/ToastMessage';

type Props = BottomTabScreenProps<RootStackParamList, 'Tuner'>;
export default ({ navigation }: Props) => {
  const [result, setResult] = useState<number | null>(null);
  useEffect(() => {
    console.log('saul BBBBB');
    withRecordAudioPermission(status => {
      if (status === RESULTS.GRANTED) {
        RecordingModule?.init({
          bufferSize: 4096,
          sampleRate: 44100,
          bitsPerChannel: 16,
          channelsPerFrame: 1,
        });
      }
      // 一套权限请求过程
    });

    RecordingModule.addRecordingEventListener(data => {
      // console.log('saul RRRRRRRRRRRRRRR', data);
    });
  }, []);
  const showToast = useToast();

  return (
    <View style={styles.container}>
      <LargeTitle title={'调音器'} />
      <FullButton
        title="获取录音权限"
        onPress={() => {
          showToast('获取录音权限', ToastType.Warning);
        }}
      />
      <FullButton
        title="开始录音"
        onPress={() => {
          showToast('开始录音', ToastType.Info);
          // RecordingModule?.start();
        }}
      />
      <FullButton
        title="停止录音"
        onPress={() => {
          showToast('开始录音', ToastType.Fail);
          // RecordingModule?.stop();
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
