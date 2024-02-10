import { create } from "zustand";

interface useStoreModalInterface {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useStoreModal = create<useStoreModalInterface>((set) => ({
  isOpen: false,
  onOpen: () =>
    set(() => {
      return { isOpen: true };
    }),
  onClose: () =>
    set(() => {
      return { isOpen: false };
    }),
}));
