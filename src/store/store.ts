import { create } from "zustand";
import { persist } from "zustand/middleware";

type FocusStore = {
  popup: boolean
  setPopup: () => void
}

export const useFocusStore = create<FocusStore>()(persist((set)=>({
  popup: false,
  setPopup: () => set((state) => ({popup : !state.popup}) ),
}),
{
  name: 'Focus store', 
        partialize: (state) => ({ 
          kanjiLessons: state.popup
        }),
}
))