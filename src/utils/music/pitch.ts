import PitchFinder from 'pitchfinder';

const middleA = 440;
const semitone = 69;
const noteStrings = [
  'C',
  'C♯',
  'D',
  'D♯',
  'E',
  'F',
  'F♯',
  'G',
  'G♯',
  'A',
  'A♯',
  'B',
];

export const createPitchFinder = ({ sampleRate = 22050 }) => {
  const finder = new (PitchFinder.YIN as any)({ sampleRate: sampleRate });
  return finder;
};

// get musical note from frequency
export const getNote = (frequency: number) => {
  const note = 12 * (Math.log(frequency / middleA) / Math.log(2));
  return Math.round(note) + semitone;
};

// get the musical note's standard frequency
export const getStandardFrequency = (note: number) => {
  return middleA * Math.pow(2, (note - semitone) / 12);
};

// get cents difference between given frequency and musical note's standard frequency
export const getCents = (frequency: number, note: number) => {
  return Math.floor(
    (1200 * Math.log(frequency / getStandardFrequency(note))) / Math.log(2),
  );
};

export const getNoteString = (note: number) => {
  return noteStrings[note % 12];
};

export const getOctave = (note: number) => {
  return parseInt((note / 12).toString()) - 1;
};
