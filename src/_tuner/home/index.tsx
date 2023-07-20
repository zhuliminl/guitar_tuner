import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import FullButton from '../../components/FullButton';
import { LargeTitle } from '../../components/LargeTitle';
import { ToastType, useToast } from '../../components/ToastMessage';
import { RootStackParamList } from '../../tabs';
import RecordingModule from '../../utils/RecordingModule';
import { usePermissionRecordAudio } from '../../utils/usePermissionRecordAudio';

type Props = BottomTabScreenProps<RootStackParamList, 'Tuner'>;
export default ({ navigation }: Props) => {
  const [result, setResult] = useState<number | null>(null);

  const withPermission = usePermissionRecordAudio();

  useEffect(() => {
    withPermission(() => {
      RecordingModule?.init({
        bufferSize: 4096,
        sampleRate: 44100,
        bitsPerChannel: 16,
        channelsPerFrame: 1,
      });
      showToast('开始录音初始化');
    });

    const sub = RecordingModule.addRecordingEventListener(data => {
      console.log('saul RRRRRRRRRRRRRRR', data);
    });
    return () => {
      sub.remove();
    };
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
          withPermission(() => {
            showToast('开始录音', ToastType.Info);
            RecordingModule?.start();
          });
        }}
      />
      <FullButton
        title="停止录音"
        onPress={() => {
          withPermission(() => {
            RecordingModule?.stop();
          });
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
