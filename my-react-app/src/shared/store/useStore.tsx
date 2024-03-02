import create from 'zustand';

interface StoreState {
  jobTitle: string;
  setJobTitle: (title: string) => void;
}

const useStore = create<StoreState>((set) => ({
  jobTitle: '',
  setJobTitle: (title) => set({ jobTitle: title }),
}));

export default useStore;
