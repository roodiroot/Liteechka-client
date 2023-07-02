import { StoreApi, UseBoundStore, create } from "zustand";

interface UseModalProps {
  show: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const useModal: UseBoundStore<StoreApi<UseModalProps>> = create(
  (set) => ({
    show: false,
    openModal: () => set({ show: true }),
    closeModal: () => set({ show: false }),
  })
);
