import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FullButton from '../../components/FullButton';
import { LargeTitle } from '../../components/LargeTitle';
import { ToastType, useToast } from '../../components/ToastMessage';
import { RootStackParamList } from '../../tabs';
import RecordingModule from '../../utils/RecordingModule';
import { usePermissionRecordAudio } from '../../utils/usePermissionRecordAudio';
import {
  createPitchFinder,
  getNote,
  getNoteString,
  getOctave,
  getStandardFrequency,
} from '../../utils/music/pitch';

type Props = BottomTabScreenProps<RootStackParamList, 'Tuner'>;
export default ({ navigation }: Props) => {
  const [note, setNote] = useState<number | undefined>();
  const [noteString, setNoteString] = useState<string>();
  const [standFrequency, setStandFrequency] = useState<number>();
  const [octave, setOctave] = useState<number>();

  const withPermission = usePermissionRecordAudio();

  useEffect(() => {
    const sampleRate = 22050;
    withPermission(() => {
      RecordingModule?.init({
        bufferSize: 2048,
        sampleRate,
        // bitsPerChannel: 16,
        // channelsPerFrame: 1,
      });
      showToast('开始录音初始化');
    });

    const pitcherFinder = createPitchFinder({ sampleRate });
    const sub = RecordingModule.addRecordingEventListener(data => {
      const frequency = pitcherFinder(data);
      if (frequency) {
        const note = getNote(frequency);
        setNote(note);
        const stf = getStandardFrequency(frequency);
        setStandFrequency(stf);
        const noteString = getNoteString(note);
        setNoteString(noteString);
        const ot = getOctave(note);
        setOctave(ot);
      }
    });
    return () => {
      sub.remove();
    };
  }, []);

  const showToast = useToast();

  return (
    <SafeAreaView style={styles.container}>
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
      <LargeTitle title={noteString} />
      <LargeTitle title={note} />
      <LargeTitle title={standFrequency} />
      <LargeTitle title={octave} />
    </SafeAreaView>
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
