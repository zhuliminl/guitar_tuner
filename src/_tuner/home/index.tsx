import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
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
import { Switch } from '../../components/Switch';
import AnimatedBackground from './AnimatedBackground';
import { useThemeStyle } from '../../hooks/useTheme';
import { getCents } from '../../utils/music/pitch';
import AnimatedCents from './AnimatedCents';

type Props = BottomTabScreenProps<RootStackParamList, 'Tuner'>;
export default ({ navigation }: Props) => {
  const [note, setNote] = useState<number | undefined>();
  const [noteString, setNoteString] = useState<string>();
  const [standFrequency, setStandFrequency] = useState<number>();
  const [octave, setOctave] = useState<number>();
  const [cents, setCents] = useState<number>(0);
  const [on, setOn] = useState(false);
  const passTime = useRef(0);
  const [data, setData] = useState({
    note: '',
    cents: 0,
    ot: '',
    stf: '',
    noteString: '',
  });

  const withPermission = usePermissionRecordAudio();

  useEffect(() => {
    const sampleRate = 22050;
    withPermission(() => {
      // RecordingModule?.init({
      //   bufferSize: 2048 * 1,
      //   // bufferSize: 4096,
      //   sampleRate,
      //   // bitsPerChannel: 16,
      //   // channelsPerFrame: 1,
      // });
      // showToast('开始录音初始化');
    });

    const getPitch = _data => {
      // console.log('saul LLLLLLLLLL', _data);
      // console.log('saul LLLLLLLLLL', Date.now() - passTime.current);
      passTime.current = Date.now();
      // return;
      // android
      let frequency = (+_data.frequency).toFixed(2);

      if (frequency < 1) {
        return;
      }
      // console.log('saul FFFFf', frequency);
      // const
      // frequency = 440;
      // frequency = 261.6;
      // const frequency = 261.6;
      // return;
      if (frequency) {
        const s = Date.now();
        const note = getNote(frequency);
        const cents = getCents(frequency, note);
        // setCents(cents);
        const ot = getOctave(note);
        const stf = getStandardFrequency(frequency);
        const noteString = getNoteString(note);
        setData({
          note,
          cents,
          ot,
          stf,
          noteString,
        });
        // console.log('saul 花费时间', Date.now() - s);
        // setStandFrequency(p => stf);
        // setNoteString(p => noteString);
        // setOctave(p => ot);
        // setNote(p => note);
        // console.log('saul RRR', frequency, note, stf);
        // console.log('saul fuck', getCents(frequency, note));
      }
    };

    const sub = RecordingModule.addRecordingEventListener(getPitch);
    return () => {
      sub.remove();
    };
  }, []);

  const showToast = useToast();
  const Theme = useThemeStyle();

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          position: 'absolute',
        }}>
        <AnimatedBackground fill={Theme.bgColorTertiary} />
      </View>
      <View
        style={{
          position: 'absolute',
        }}>
        <AnimatedCents cents={data.cents} />
      </View>
      <LargeTitle title={'调音器'} />
      <FullButton
        title="获取录音权限"
        onPress={() => {
          showToast('获取录音权限', ToastType.Warning);
        }}
      />
      <FullButton
        title="初始化"
        onPress={() => {
          RecordingModule?.init({});
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
      <FullButton
        title="Pitch start"
        onPress={() => {
          withPermission(() => {
            RecordingModule?.getPitch();
          });
        }}
      />
      {/*
      <FullButton
        title="选择乐器"
        onPress={() => {
          navigation.navigate('InstrumentsCate');
        }}
      />
      <Switch
        isActive={on}
        onPress={(isActive: any) => {
          setOn(!isActive);
        }}
      />
      */}
      <LargeTitle title={data.noteString} />
      <LargeTitle title={data.note} />
      <LargeTitle title={data.stf} />
      <LargeTitle title={data.ot} />
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
