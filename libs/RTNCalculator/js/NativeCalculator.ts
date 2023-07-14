import type {TurboModule} from 'react-native/Libraries/TurboModule/RCTExport';
import {TurboModuleRegistry} from 'react-native';

interface RecordData {
}

interface InitOptions {
  bufferSize: number;
  sampleRate: number;
  bitsPerChannel: number;
  channelsPerFrame: number;
}

export interface Spec extends TurboModule {
  add(a: number, b: number): Promise<number>;
  getModuleName(): string;
  init(options: InitOptions): void;
  start(call: (data: RecordData) => void): void;
  stop(): void;
}

export default TurboModuleRegistry.get<Spec>(
  'RTNCalculator',
) as Spec | null;