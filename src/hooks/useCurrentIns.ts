import { create } from 'zustand';
import { instruments } from '../utils/music/instruments';

interface State {
  currentId: string;
  setCurrentId: (id: string) => void;
}

const useStore = create<State>((set, get) => ({
  currentId: '1',
  setCurrentId: (id: string) => {
    set({
      currentId: id,
    });
  },
}));

export const useCurrentInsId = () => {
  const id = useStore(state => state.currentId);
  return id;
};
export const useCurrentInsIdSet = () => {
  const setId = useStore(state => state.setCurrentId);
  return (id: string) => {
    setId(id);
  };
};

export const useCurrentInsData = () => {
  const currentId = useCurrentInsId();
  return instruments.filter(_ => _.id === currentId)[0];
};
