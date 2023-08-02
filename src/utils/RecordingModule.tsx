import { NativeModules, NativeEventEmitter } from 'react-native';

const { Recording } = NativeModules;

interface InitOptions {
  bufferSize?: number;
  sampleRate?: number;
  bitsPerChannel?: number;
  channelsPerFrame?: number;
}

export default {
  init: (options: InitOptions) => {
    Recording.init(options);
  },
  start: () => Recording.start(),
  stop: () => Recording.stop(),
  getPitch: () => Recording.getPitch(),
  addRecordingEventListener: (listener: (data: any) => void) => {
    const eventEmitter = new NativeEventEmitter(Recording);
    const sub = eventEmitter.addListener('recording', listener);
    return {
      remove: () => {
        eventEmitter?.removeSubscription(sub);
      },
    };
  },
};
