import create from "zustand";
interface StoreState {
  jobCategoriesTitle: string;
  setJobCategoriesTitle: (title: string) => void;
}

const useJobCategories = create<StoreState>((set) => {
  const storedTitle = localStorage.getItem("jobCategoriesTitle");

  set({
    jobCategoriesTitle: storedTitle || "",
  });

  return {
    jobCategoriesTitle: storedTitle || "",
    setJobCategoriesTitle: (title) => {
      set({ jobCategoriesTitle: title });
      localStorage.setItem("jobCategoriesTitle", title);
    },
  };
});

export default useJobCategories;
