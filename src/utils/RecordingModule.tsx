import { NativeModules, NativeEventEmitter } from 'react-native';

const { Recording } = NativeModules;
const eventEmitter = new NativeEventEmitter(Recording);

interface InitOptions {
  bufferSize: number;
  sampleRate: number;
  bitsPerChannel: number;
  channelsPerFrame: number;
}

export default {
  init: (options: InitOptions) => {
    // 权限检查

    Recording.init(options);
  },
  start: () => Recording.start(),
  stop: () => Recording.stop(),
  addRecordingEventListener: (listener: (data: any) => void) =>
    eventEmitter.addListener('recording', listener),
};
