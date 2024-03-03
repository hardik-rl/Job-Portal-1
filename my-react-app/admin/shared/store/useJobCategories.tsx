import create from "zustand";

interface StoreState {
  jobCategoriesTitle: string;
  setJobCategoriesTitle: (title: string) => void;
}

const useJobCategories = create<StoreState>((set) => ({
  jobCategoriesTitle: "",
  setJobCategoriesTitle: (title) => set({ jobCategoriesTitle: title }),
}));

export default useJobCategories;
